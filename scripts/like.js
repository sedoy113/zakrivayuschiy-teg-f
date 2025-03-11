const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card-like-button');
const iconButtonArray = document.querySelectorAll('.card-icon-button');

iconButtonArray.forEach((iconButton, index) => {
	iconButton.onclick = () =>
		toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
	button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
	heart.classList.toggle('is-liked');
	setButtonText(heart, button);
}

function setButtonText(heart, button) {
	if ([...heart.classList].includes('is-liked')) {
		setTimeout(
			() => (button.querySelector('.btn__text').textContent = 'Unlike'),
			500
		);
	} else {
		setTimeout(
			() => (button.querySelector('.btn__text').textContent = 'Like'),
			500
		);
	}
}
