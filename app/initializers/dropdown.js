export default {
	name: 'dropdown',

	initialize() {
		if (typeof window !== 'undefined' && !window.dropdownReady) {
			window.dropdownReady = true;
			if (typeof window.navigation !== 'undefined') {
				window.navigation.addEventListener("navigate", (event) => {
					const els = Array.from(document.querySelectorAll(".dropdown, .dropdown-background, .dropdown-backdrop"));
					els.map((el) => {
						const curr = el.style.display
						el.style.display = 'none';
						setTimeout(() => el.style.display = curr, 500)
					});
				});
			}
		}
	},
};
