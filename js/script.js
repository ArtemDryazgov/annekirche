window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.nav__list'),
		menuItem = document.querySelectorAll('.nav__item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('nav__list_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('nav__list_active');
		})
	})
})

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