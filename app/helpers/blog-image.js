import { helper } from '@ember/component/helper';

export function image([id, type]) {
	switch (type) {
		case 'main':
			return `https://cdn.brandsafe.io/w(1720)q(80)/${id}.webp`;
		case 'post':
			return `https://cdn.brandsafe.io/w(1600)q(80)/${id}.webp`;
		case 'large':
			return `https://cdn.brandsafe.io/w(1250)q(80)/${id}.webp`;
		case 'small':
			return `https://cdn.brandsafe.io/w(820)q(80)/${id}.webp`;
		default:
			return `https://cdn.brandsafe.io/w(1600)q(80)/${id}.webp`;
	}
}

export default helper(image);
