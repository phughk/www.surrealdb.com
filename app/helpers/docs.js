import { helper } from '@ember/component/helper';
import config from 'surreal/config/environment';

export function docs([url]) {
	return config.domain + url;
}

export default helper(docs);
