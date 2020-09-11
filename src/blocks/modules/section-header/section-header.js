(function toggleHeaderSectionState(){
	const el = document.querySelector('.section-header');

	if (el) {
		window.addEventListener('scroll', function(){
			if (window.scrollY > 0) {
				el.classList.add('section-header--fixed');
			} else {
				el.classList.remove('section-header--fixed');
			}
		});
	}
})();