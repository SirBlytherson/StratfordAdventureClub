(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
	
	$(document).ready(function() {
		function resetPage() {
			$('#home').hide();
			$('#about').hide();
			$('#team').hide();
			$('#blog').hide();
		}
		function startup() {
			resetPage();
			$('#home').show();
			$('#about').show();
		}
		startup();
		$('#home-button').on('click', function () {
			resetPage();
			$('#home').show();
			$('#about').show();
		});
		$('#about-button').on('click', function () {
			resetPage();
			$('#about').show();
			$('#team').show();
		});
		$('#blog-button').on('click', function () {
			resetPage();
			$('#blog').show();
		});
		$('#gallery-button').on('click', function () {
			resetPage();
			$('#gallery').show();
		});
		/*
			var pages = [ "#home", "#about", "#blog" ]
			for(let page in pages) {
				$(page + "-button").click(function(){
					$(page).show()
					for(let p in pages) {
						if(p != page) $(p).hide()
					}
				});
			}
			*/
	});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

