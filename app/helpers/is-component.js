import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

export default class extends Helper {

	compute([name]) {

		const owner = getOwner(this);

		const lookup = owner.lookup('component-lookup:main');

		switch (true) {
			case lookup.componentFor === undefined:
				return lookup.lookupFactory(name);
			case lookup.componentFor !== undefined:
				return (
					lookup.componentFor(name, owner) ||
					lookup.layoutFor(name, owner)
				);
		}

	}

}
