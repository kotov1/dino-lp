$(function() {

	// Mobile menu
	$(".nav-menu").click(function() {
		$(this).toggleClass("nav-menu-expanded");
	});
	
	// Jquery scrolling
	$(document).ready(function(){
		$(".nav-menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		});
		$(".presentation-btn").click(function() {
			var top = $('#about').offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		});
	});

	// section products modal calls
	$('#product1-modalCall').magnificPopup({
		items: {
			src: '#product1-modal',
			type: 'inline'
		}
	});
	$('#product2-modalCall').magnificPopup({
		items: {
			src: '#product2-modal',
			type: 'inline'
		}
	});
	$('#product3-modalCall').magnificPopup({
		items: {
			src: '#product3-modal',
			type: 'inline'
		}
	});
	$('#product4-modalCall').magnificPopup({
		items: {
			src: '#product4-modal',
			type: 'inline'
		}
	});
	$('#product5-modalCall').magnificPopup({
		items: {
			src: '#product5-modal',
			type: 'inline'
		}
	});
	$('#product6-modalCall').magnificPopup({
		items: {
			src: '#product6-modal',
			type: 'inline'
		}
	});
	$('#product7-modalCall').magnificPopup({
		items: {
			src: '#product7-modal',
			type: 'inline'
		}
	});
	$('#product8-modalCall').magnificPopup({
		items: {
			src: '#product8-modal',
			type: 'inline'
		}
	});
	$('#product9-modalCall').magnificPopup({
		items: {
			src: '#product9-modal',
			type: 'inline'
		}
	});
	$('#product10-modalCall').magnificPopup({
		items: {
			src: '#product10-modal',
			type: 'inline'
		}
	});
	$('#product11-modalCall').magnificPopup({
		items: {
			src: '#product11-modal',
			type: 'inline'
		}
	});

	// Video
	$(document).on('click','.js-videoPoster',function(e) {
		e.preventDefault();
		var poster = $(this);
		var wrapper = poster.closest('.js-videoWrapper');
		videoPlay(wrapper);
	});
	function videoPlay(wrapper) {
		var iframe = wrapper.find('.js-videoIframe');
		var src = iframe.data('src');
		wrapper.addClass('videoWrapperActive');
		iframe.attr('src',src);
	}

});
