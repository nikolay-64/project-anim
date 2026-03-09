const bgElements = () => {
	const elements = document.querySelectorAll('.set-bg');

	elements.forEach((element) => {
		const bgUrl = element.dataset.setbg;
		if (bgUrl) {
			element.style.backgroundImage = `url(${bgUrl})`;
		}
	});
};

bgElements();
