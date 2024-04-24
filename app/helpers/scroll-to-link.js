import { helper } from '@ember/component/helper';

export function scrollToLink(
	[element],
	{ block = 'start', inline = 'nearest', smooth = false },
) {
	return () => {
		if (element === undefined) return;

		if (typeof FastBoot !== 'undefined') return;

		history.pushState(undefined, undefined, element);

		if (typeof element === 'string') {
			document.querySelectorAll(element)[0].scrollIntoView({
				block: block,
				inline: inline,
				behavior: smooth ? 'smooth' : 'auto',
			});
		} else {
			element.scrollIntoView({
				block: block,
				inline: inline,
				behavior: smooth ? 'smooth' : 'auto',
			});
		}
	};
}

export default helper(scrollToLink);
