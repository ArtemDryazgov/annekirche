$(document).ready(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	$('.btn__arch_more').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.architect__addition').eq(i).toggleClass('architect__addition_active');
			$('.btn__arch_more').eq(i).toggleClass('btn__arch_more_none');
		});
	});

	$('.btn__arch_hide').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.architect__addition').eq(i).toggleClass('architect__addition_active');
			$('.btn__arch_more').eq(i).toggleClass('btn__arch_more_none');
		});
	});

	$('.work__slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow/strelka_221.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow/strelka_219.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			},
		]
	});
});