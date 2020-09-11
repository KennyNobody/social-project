(function toggleHeaderState(){
	const el = document.querySelector('.header--front');

	if (el) {
		window.addEventListener('scroll', function(){
			if (window.scrollY > 0) {
				el.classList.remove('header--static');
			} else {
				el.classList.add('header--static');
			}
		});
	}
})();