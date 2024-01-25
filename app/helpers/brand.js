import { helper } from '@ember/component/helper';

export function brand([type]) {
	switch (type) {
		case 'name':
			return 'SurrealDB';
		case 'domain':
			return 'surrealdb.com';
		case 'website':
			return 'https://surrealdb.com';
		case 'company.name':
			return 'SurrealDB Ltd.';
		case 'company.address':
			return 'Civvals, 50 Seymour Street, London, England, W1H 7JG, United Kingdom';
	}
}

export default helper(brand);
