(() => {
	const form = document.querySelector('.card__form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const ratingNumber = form.elements['ratingNumber'].value;
		const ratingYouSelectedElement = document.querySelector('.card__rating-you-selected');
		ratingYouSelectedElement.innerText = 'You selected ' + ratingNumber + ' out of 5';

		const ratingCard = document.querySelector('.card--rating-state');
		const thankYouCard = document.querySelector('.card--thank-you-state');

		thankYouCard.style.display = 'grid';
		ratingCard.style.display = 'none';
	});
})();