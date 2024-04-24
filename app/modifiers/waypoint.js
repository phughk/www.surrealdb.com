import { setModifierManager, capabilities } from '@ember/modifier';
import Viewport from '@ascua/viewport/classes/viewport';
import enabled from '@ascua/viewport/utils/enabled';
import { setOwner } from '@ember/application';
import { inject } from '@ember/service';

const viewport = Viewport.Instance;

export default setModifierManager(
	(owner) => ({
		capabilities: capabilities('3.22', { disableAutoTracking: false }),

		createModifier(modifier, args) {
			return new modifier(owner, args);
		},

		installModifier(instance, element, args) {
			instance.install(element, args);
		},

		updateModifier(instance, args) {
			instance.update(args);
		},

		destroyModifier(instance) {
			instance.remove();
		},
	}),
	class WaypointModifier {
		@inject waypoints;

		constructor(owner, args) {
			setOwner(this, owner);
		}

		install(element, { positional: [name] }) {
			this.element = element;

			element.id = name;

			this.name = name;

			if (enabled()) {
				viewport.observe(
					element,
					() => {
						this.waypoints.add(this.name);
					},
					() => {
						this.waypoints.del(this.name);
					},
					{ threshold: 0, rootMargin: '0px 0px -75% 0px' },
				);
			}
		}

		update([name]) {
			// Ignore
		}

		remove() {
			if (enabled()) {
				this.waypoints.del(this.name);
				viewport.unobserve(this.element);
			}
		}
	},
);
