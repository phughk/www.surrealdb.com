import matter from "gray-matter";
import { marked } from "marked";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(path.dirname(__dirname), "app/blog");
const blogFeed = path.join(path.dirname(__dirname), "public/feed/blog.rss");

const newsDir = path.join(path.dirname(__dirname), "app/news");
const newsFeed = path.join(path.dirname(__dirname), "public/feed/news.rss");

const releasesDir = path.join(path.dirname(__dirname), "app/content/releases");
const releasesFeed = path.join(
	path.dirname(__dirname),
	"public/feed/releases.rss",
);

const metadata = {
	title: "SurrealDB",
	description:
		"To stay up-to-date with new blog articles, future product releases, and documentation updates, subscribe to our email newsletter.",
	link: "https://surrealdb.com",
};

export async function generateFeed(input, output, baseUrl) {
	const files = fs.readdirSync(input).reverse();
	const read = await Promise.all(
		files.map(async (file) => {
			const content = fs.readFileSync(path.join(input, file));
			const parsed = matter(content);
			parsed.content = parsed.content.replaceAll(
				/!\[(.+)\]\((.{20})\)/g,
				`![$1](https://cdn.brandsafe.io/w(1600)q(80)/$2.auto)`,
			);

			parsed.content = marked.parse(parsed.content).normalize();
			parsed.data.id = file.match(/^\d\d\d\d-\d\d-\d\d-/)
				? file.slice(11, -3) // xxxx-xx-xx-SLICED_PART.md
				: file.slice(0, -3); // SLICED_PART.md
			parsed.data.url = `https://surrealdb.com${baseUrl}${parsed.data.id}`;
			if (parsed.data.image && parsed.data.image.length == 20)
				parsed.data.image = `https://cdn.brandsafe.io/w(1600)q(80)/${parsed.data.image}.auto`;

			if (!(parsed.data.date instanceof Date))
				parsed.data.date = new Date(parsed.data.date);

			parsed.data.title ??= parsed.data.id;

			return parsed;
		}),
	);

	const posts = read.filter((post) => post.data.show !== false);
	const rssItems = posts
		.map(
			({ data, content }) => `
				<item>
					<title>${data.title}</title>
					<link>${data.url}</link>
					<guid>${data.url}</guid>
					<pubDate>${data.date.toUTCString()}</pubDate>
					${data.summary ? `<description>${data.summary}</description>` : ""}
					${data.categories ? data.categories.map((c) => `<category>${c}</category>`).join("\n") : ""}
					${data.image ? `<media:content url="${data.image}" medium="image" />` : ""}
					<content:encoded><![CDATA[${content}]]></content:encoded>
				</item>
			`,
		)
		.join("");

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss" version="2.0">
	<channel>
		<title>${metadata.title}</title>
		<description>${metadata.description}</description>
		<link>${metadata.link}</link>
		<lastBuildDate>${posts[0].data.date.toUTCString()}</lastBuildDate>
		${rssItems}
	</channel>
</rss>`;

	fs.writeFileSync(output, feed);
}

generateFeed(blogDir, blogFeed, '/blog/');
generateFeed(newsDir, newsFeed, '/news/');
generateFeed(releasesDir, releasesFeed, '/releases#v');
