const swiper = () => {
	const swiper = new Swiper('.swiper', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 1000,

		pagination: {
			el: '.swiper-pagination',
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

swiper();
