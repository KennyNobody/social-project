import $ from 'jquery';
import Mmenu from 'mmenu-js';

(function initMenu(){
	new Mmenu( "#mmenu", {
		"extensions": [
		"pagedim-black",
		],
		navbar: {
			title: 'Лучший социальный проект'
		}
	});
})();