import { helper } from '@ember/component/helper';
import config from '@ascua/config';

export function docs([url]) {
	return config.domain + url;
}

export default helper(docs);
