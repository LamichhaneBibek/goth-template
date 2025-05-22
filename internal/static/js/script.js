(function ($) {

    "use strict";

    $(document).ready(function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();



        // dropdown menu
        $('.main-menu li.dropdown > a').on('click', function () {
            $(this).next('ul').slideToggle(300);
            $(this).parent('li').toggleClass('drop');
        });


        //Submenu Dropdown Toggle
        if ($('.main-menu li.dropdown ul').length) {
            $('.main-menu li.dropdown').append('<div class="dropdown-btn"><i class="fas fa-chevron-right"></i></div>');

            //Dropdown Button
            $('.main-menu li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(300);
                $(this).parent('li').toggleClass('drop');
            });

            //Disable dropdown parent link
            $('.main-menu li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        
        
        //Main Slider Carousel
        if ($('.main-slider-carousel').length) {
            $('.main-slider-carousel').owlCarousel({
                loop:true,
                items: 1,
                margin: 0,
                nav: false,
                dots: true,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,			
            });    		
        }
        
        
        //Featured Carousel
        if ($('.featured-carousel').length) {
            $('.featured-carousel').owlCarousel({
                loop:true,
                items: 5,
                margin: 0,
                nav: true,
                dots: false,
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    950:{
                        items:3
                    },
                    1300:{
                        items:4
                    },
                    1600:{
                        items:5
                    }
                }
            });    		
        }
        
        
        //Gallery Page Carousel
        if ($('.gallery-slider').length) {
            $('.gallery-slider').owlCarousel({
                loop:true,
                items: 3,
                margin: 15,
                nav: true,
                dots: false,
                active: true,
                smartSpeed: 1000,
                autoplay: 5000,
                navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    950:{
                        items:3
                    }
                }
            });    		
        }
        
        
        /* skill Circle Counter */
		if ($.fn.circleProgress) {
			var progress1 = $('.one.progress-content')
			if($.fn.circleProgress) {
			  progress1.appear(function () {
				progress1.circleProgress({
					value: 0.85,
					size: 160,
                    thickness: 15,
					fill: "#000000",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(85 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress2 = $('.two.progress-content')
			if($.fn.circleProgress) {
			  progress2.appear(function () {
				progress2.circleProgress({
					value: 0.76,
					size: 160,
                    thickness: 15,
					fill: "#000000",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(76 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress3 = $('.three.progress-content')
			if($.fn.circleProgress) {
			  progress3.appear(function () {
				progress3.circleProgress({
					value: 0.6,
					size: 160,
                    thickness: 15,
					fill: "#000000",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(60 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress4 = $('.four.progress-content')
			if($.fn.circleProgress) {
			  progress4.appear(function () {
				progress4.circleProgress({
					value: 0.78,
					size: 160,
                    thickness: 15,
					fill: "#000000",
                    lineCap: 'round',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(78 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
        
        // instagram magnific popup
        if ($.fn.magnificPopup) {
            $('.instagram-posts a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                }
            });
        }
        
        
        // gallery magnific popup
        if ($.fn.magnificPopup) {
            $('.gallery-content a').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('a');
                    }
                }
            });
        }
        

        /*Video Magnific Popup */
        if ($.fn.magnificPopup) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }
        
        
        $(function() {
          $('audio').audioPlayer();
        });
        

        
        // Gallery Load More Ajax
        if($('.gallery-more').length){
            $('.gallery-more').simpleLoadMore({
              item: '.gallery-single-item',
              count: 7,
              itemsToLoad: 3,
              btnHTML: '<div class="gallery-btn text-center pt-50 pb-15 wow customFadeInUp delay-1s slow"><a href="#" class="theme-btn">Load More</a></div>'
            });
        }
        
        
        // Gallery Page Load More Ajax
        if($('.gallery-page-more').length){
            $('.gallery-page-more').simpleLoadMore({
              item: '.gallery-single-item',
              count: 3,
              itemsToLoad: 3,
              btnHTML: '<div class="gallery-btn text-center pt-35 pb-15 wow customFadeInUp delay-0-2s slow"><a href="#" class="theme-btn">Load More</a></div>'
            });
        }
        
        
        
        /* initialize the contact page map on the "map" div with a given center and zoom*/
        if($('#map').length !== 0){
            var map = L.map('map', {
                center: [40.929483, -74.376729],
                zoom: 9,
                zoomControl: false,
                scrollWheelZoom: true,
            });

            L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {}).addTo(map);
            
             var point = [40.929482, -74.376728];
             var marker = L.marker(point).addTo(map);
        }
        
        

        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // search open
        $(".search-btn button").on('click', function () {
            $('.main-header').addClass('open-search');
        });
        // search close
        $(".search-close button").on('click', function () {
            $('.main-header').removeClass('open-search');
        });


        // main-menu open
        $(".menu-toggler button").on('click', function () {
            $('.main-header').addClass('open-menu');
        });
        // main-menu close
        $(".menu-close button").on('click', function () {
            $('.main-header').removeClass('open-menu');
        });



        // Elements Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
       
        

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();
        
        
    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });



})(window.jQuery);
