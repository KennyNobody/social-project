(function() {

	$('.btn--load').on('click', function(){

		let _this = $(this);

		let data = {
			'action': 'loadmore',
			'query': _this.attr('data-param-posts'),
			'page': _this.attr('data-page'),
			'tpl': _this.attr('data-tpl')
		}

		_this.html(`<span class="btn__text">
			Загрузка...
			</span>
			<svg class="btn__icon">
			<use xlink:href="` + _this.attr('data-icon') + `"></use>
			</svg>`);

		let tempPage = _this.attr('data-page');

		$.ajax({
			url: '/wp-admin/admin-ajax.php',
			data: data,
			type: 'POST',
			success:function(data){
				if (data) {
					_this.html(`<span class="btn__text">
						Загрузить еще
						</span>
						<svg class="btn__icon">
						<use xlink:href="` + _this.attr('data-icon') + `"></use>
						</svg>`);
					_this.parent().parent().find('.articles__item--clear').first().before(data);
					tempPage++;
					_this.attr('data-page', tempPage++);
					
					if (_this.attr('data-page') == _this.attr('data-max-pages')) {
						_this.parent().remove();
					}
				} else {
					_this.parent().remove();
				}
			}
		});
	});

})();

