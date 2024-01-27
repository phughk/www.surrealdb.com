import { helper } from '@ember/component/helper';

export function image([id, type]) {
	switch (type) {
		case 'main':
			return `https://cdn.brandsafe.io/w(1720)q(80)/${id}.auto`;
		case 'post':
			return `https://cdn.brandsafe.io/w(1600)q(80)/${id}.auto`;
		case 'large':
			return `https://cdn.brandsafe.io/w(1250)q(80)/${id}.auto`;
		case 'small':
			return `https://cdn.brandsafe.io/w(820)q(80)/${id}.auto`;
		default:
			return `https://cdn.brandsafe.io/w(1600)q(80)/${id}.auto`;
	}
}

export default helper(image);
