const modal = document.querySelector('.search-model');
const iconModalButton = document.querySelector('.icon_search');
const iconCloseModalButton = modal.querySelector('.search-close-switch');
const searchInput = modal.querySelector('#search-input');

iconModalButton.addEventListener('click', (e) => {
	e.preventDefault();
	modal.style.display = 'block';
});

iconCloseModalButton.addEventListener('click', (e) => {
	e.preventDefault();
	modal.style.display = 'none';
	searchInput.value = '';
});

searchInput.addEventListener('input', (e) => {
	e.preventDefault();
	console.log('search-input value: ', e.target.value);
	searchInput.value = '';
});
