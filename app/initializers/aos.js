export default {
	name: 'aos',
	initialize(instance) {
		if (typeof AOS !== 'undefined') {
			AOS.init({
				delay: 50, // values from 0 to 3000, with step 50ms
				offset: 150, // offset (in px) from the original trigger point
				duration: 750, // values from 0 to 3000, with step 50ms
				easing: 'ease', // default easing for AOS animations
				once: false, // whether animation should happen only once - while scrolling down
				mirror: false, // whether elements should animate out while scrolling past them
				anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
			});

			if (document.readyState === 'complete') {
				AOS.refreshHard();
			} else {
				window.addEventListener('load', () => {
					AOS.refreshHard();
				});
			}
		}
	},
};
