import Swiper from 'swiper';

(function initPersonSlider(){
	var slider = new Swiper('.slider', {
		spaceBetween: 20,
		loop: true,
		slidesPerView: 4,
		navigation: {
			nextEl: '.slider__btn--next',
			prevEl: '.slider__btn--prev',
		},
	});
})();