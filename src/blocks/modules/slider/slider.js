import Swiper from 'swiper';

(function initPersonSlider(){
	var slider = new Swiper('.slider', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.slider__btn--next',
			prevEl: '.slider__btn--prev',
		},
		breakpoints: {
			540: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			840: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});
})();