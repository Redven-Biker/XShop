"use strict";
(function($) {
    $.fn.extend({
        scrollWindow: function(options) {
            var defaults = { duration: "slow", easing : "swing" }
            var options =  $.extend(defaults, options);
            var goToHash = function(target){
                $(window).scrollTop($(target).offset().top);
                $('html,body').animate({scrollTop: $(target).offset().top}, options.duration, options.easing, function() {
                    location.hash = target;
                });
            };
            if(location.hash.length > 1) goToHash(location.hash);
        }
    });

    function vertical_center() {
        $('.vertical-center').each(function(index, el) {
            var parent_height = $(el).parent().height();
            var element_height = $(el).height();
            var diff_height = (parent_height-element_height)/2;
            $(el).css('top', diff_height + 'px');
        });
    }

    function wpgmappity_maps_loaded() {
        var blue = "#768FAC";
        var violet = "#B95D82";
        var black = "#030303";
        var green = "#77be32";
        var yellow = "#CBB774";
        var ocre = "#B5AD6C";
        var orange = "#fda527";
        var red = "#CA0021";
        var drag;
        if($(window).width()<796){drag=true;}else{drag=true;}
        var color = jellythemes.color.length>0 ? jellythemes.color : color;; // set your map color here! (blue, black, green, yellow, purple, orange...)
        var saturation = 100;
        var pointerUrl = jellythemes.theme_path +  '/images/map/pointer-'+color+'.png'; // set your color pointer here! (pointer-blue/green/yellow/fucsia/purple/turquoise/red/orange.png)
        switch(color) {
            case ('blue'):
                var color = blue;
                var saturation = 100;
                break;
            case ('black'):
                var color = black;
                var saturation = -100;
                break;
            case ('green'):
                var color = green;
                var saturation = 100;
                break;
            case ('yellow'):
                var color = yellow;
                var saturation = 100;
                break;
            case ('ocre'):
                var color = ocre;
                var saturation = 100;
                break;
            case ('red'):
                var color = red;
                var saturation = 100;
                break;
            case ('orange'):
                var color = orange;
                var saturation = 100;
                break;
            case ('violet'):
                var color = violet;
                var saturation = 100;
                break;
        }
        var latlng = new google.maps.LatLng($('#maps').data('lat'),$('#maps').data('lon')); <!-- (Fist Value Longitude, Second Value Latitude), can obtain YOUR coordenates here!: http://universimmedia.pagesperso-orange.fr/geo/loc.htm -->
        var styles = [
        {
        "featureType": "landscape",
        "stylers": [
            {"hue": "#000"},
            {"saturation": -100},
            {"lightness": 40},
            {"gamma": 1}
        ]
        },
        {
        "featureType": "road.highway",
        "stylers": [
            {"hue": color},
            {"saturation": saturation},
            {"lightness": 20},
            {"gamma": 1}
        ]
        },
        {
        "featureType": "road.arterial",
        "stylers": [
            {"hue": color},
            {"saturation": saturation},
            {"lightness": 20},
            {"gamma": 1}
        ]
        },
        {
        "featureType": "road.local",
        "stylers": [
            {"hue": color},
            {"saturation": saturation},
            {"lightness": 50},
            {"gamma": 1}
        ]
        },
        {
        "featureType": "water",
        "stylers": [
            {"hue": "#000"},
            {"saturation": -100},
            {"lightness": 15},
            {"gamma": 1}
        ]
        },
        {
        "featureType": "poi",
        "stylers": [
            {"hue": "#000"},
            {"saturation": -100},
            {"lightness": 25},
            {"gamma": 1}
        ]
        }
        ];
        var options = {
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl : false,
            mapTypeControl : false,
            scaleControl : false,
            streetViewControl : false,
            draggable:drag,
            scrollwheel:false,
            panControl : false, zoom : 17,
            styles: styles
        };
        var wpgmappitymap = new google.maps.Map(document.getElementById('maps'), options);
        var point0 = new google.maps.LatLng($('#maps').data('lat'),$('#maps').data('lon')); <!-- (Fist Value Longitude, Second Value Latitude), can obtain YOUR coordenates here!: http://universimmedia.pagesperso-orange.fr/geo/loc.htm -->
        var marker0= new google.maps.Marker({
            position : point0,
            map : wpgmappitymap,
            icon: pointerUrl //Custom Pointer URL
        });
        google.maps.event.addListener(marker0, 'click', function() {
                var infowindow = new google.maps.InfoWindow({content: 'undefined'});
                infowindow.open(wpgmappitymap,marker0);
        });
        wpgmappitymap.setCenter(latlng);
    } // end wpgmappity_maps_loaded()

    $(document).ready(function () {
        vertical_center();

        $('.mouse').on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $('#home-slider').height() }, 300);
        });
        $('a[data-rel]').each(function() {
            $(this).attr('rel', $(this).data('rel'));
        });

        $('.megabutton').click(function(e) {
            $('.md-overlay').addClass('show');
            $('.modal-form').addClass('show');
            $('.md-overlay').on('click',function() {
                $(this).removeClass('show');
                $('.modal-form').removeClass('show');
            });
            e.preventDefault();
        });
        $('.modal-form .close').click(function (e) {
            $('.md-overlay').removeClass('show');
            $('.modal-form').removeClass('show');
            e.preventDefault();
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*Validation*/
        $("#contactform").validate({
            submitHandler: function(form) {
                $(form).ajaxSubmit();
                $(form).find('.formSent').show();
            }
        });

        /*Validation*/
        $("#contact-project").validate({
            submitHandler: function(form) {
                $(form).ajaxSubmit();
                $(form).find('.formSent').show();
            }
        });

        $('.folio-project').on('click', function() {
            var href = $(this).attr('href');
            if ($('#ajax').is(':visible')) {
                $('#ajax').css({ display:'block' }).animate({ height:'0' }).hide().slideUp('slow');
            }
            $('#ajax').html('');

            $('#ajax').show(0).animate({ height:'1200px' }, 500 ,function() {
                $('#ajax').load(href, function() {
                    $('#ajax').css('height','auto');
                    $("html, body").animate({ scrollTop: $('#ajax').offset().top }, 300);
                });
            });
        });

        if (!$('#ip-container').hasClass('single')) {
            $(window).on("scroll", function(){ //when the user is scrolling...
                if ($(window).scrollTop() >= 100) { //header hide by scroll
                    $('#header').addClass('overflow');
                } else {
                    $('#header').removeClass('overflow');
                }
                if ($(window).scrollTop() >= ($('#owl-main').height()/2)) { //If user scroll entire home slider
                    $('#header').addClass('fixed');
                } else {
                    $('#header').removeClass('fixed');
                }
            });
        }

        $('.facts .col-lg-2 h3').counterUp({
            delay: 20,
            time: 3000
          });

        if ($(".player").length>0 && $(window).width()>1024) { //If there are video backgrounds
            $(".player").mb_YTPlayer();
        }

        $(".we-are").idTabs();

        /*Sections appears in scroll*/
        $('.jt_row').on('inview', function(event, visible) {
            if (visible === true) {
                $(this).addClass('visible');
            }
        });


        $(window).scrollTop(1); //move scroll to fires inview events
        /*Scroll to sections*/
        if (!$('#ip-container').hasClass('single')) {
            $('#nav').onePageNav({
                filter: ':not(.external)',
            });
        }
        $('#header').on('click', '.collapse.in .menu-item a', function() {
            $('.collapse.in').collapse('hide');
        });


    }); // End document ready


    $(document).ajaxComplete(function() {
        "use strict";
        var slider1 = $("#owl-project-single");
        slider1.owlCarousel({
            navigation: false,
            items:2,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: false,
            pagination: false,
        });
        // Custom Navigation Events
          // Custom Navigation Events
          $(".next1").click(function(){ slider1.trigger('owl.next'); });
        $(".prev1").click(function(){ slider1.trigger('owl.prev'); });

        $(".close").click(function(e) {
            $('#ajax').html('').css('height','0px');
            e.preventDefault();
        });
    }); // End ajax complete

    $(window).load(function() {
        vertical_center();

        $().scrollWindow();
        window.setTimeout(function() {
            $().scrollWindow();
        }, 5000);

        //Set google maps
        if ($('#maps').length>0) {wpgmappity_maps_loaded();}

        // Set video player buttons behaviour
        $(".player").each(function () {
            var btn = $(this).find('.playstop');
            var player = $(this);
            if ($(this).getPlayer()==='undefined') {
                var state = $(this).getPlayer().getPlayerState();
            } else {state=1;}
            if (state==1) {
                btn.text('Pause');
                btn.addClass('stop')
            } else {
                btn.text('Play');
                btn.removeClass('stop');
            }
            if (btn.length>0) {
                btn.click(function(e) {
                    if ($(this).hasClass('stop')) {
                        player.pauseYTP();
                        btn.text('Play');
                    } else {
                        player.playYTP();
                        btn.text('Pause');
                    }
                    $(this).toggleClass('stop');
                    e.preventDefault();
                });
            }
        });

        $("#owl-main-text").owlCarousel({
            autoPlay: 3500,
            goToFirst: true,
            goToFirstSpeed: 2000,
            navigation: false,
            slideSpeed: 700,
            pagination: false,
            transitionStyle: "fadeUp",
            singleItem: true
        });
        $('#home-slider').height($(window).height());
        if ($(window).width() >1024) { $('.slider-parallax').css('padding-top', $(window).height() + 'px'); }
        /* Home background slider */
        $("#owl-main").owlCarousel({
            autoPlay: $("#owl-main .item").length>1 ? 3500 : false,
            navigation: false,
            goToFirst: true,
            goToFirstSpeed: 2000,
            slideSpeed: 700,
            pagination: true,
            transitionStyle: "fade",
            singleItem: true,
            afterInit: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-main .item').height($(window).height());
                    $('#home-slider #owl-main img').height($(window).height());
                } else {
                    $('#home-slider #owl-main .item').height(1200);
                }

                $('#home-slider #owl-main img').width('auto');

                var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-main img').css('top', '0px' );

                    $('#home-slider #owl-main img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-main img').css('left', '0px' );
                    $('#home-slider #owl-main img').height('auto');
                    $('#home-slider #owl-main img').width($(window).width());
                    $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
                }

            },
            afterUpdate: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-main .item').height($(window).height());
                    $('#home-slider #owl-main img').height($(window).height());
                } else {
                    $('#home-slider #owl-main .item').height(600);
                }
                $('#home-slider #owl-main img').width('auto');
                var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-main img').css('top', '0px' );
                    $('#home-slider #owl-main img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-main img').css('left', '0px' );
                    $('#home-slider #owl-main img').height('auto');
                    $('#home-slider #owl-main img').width($(window).width());
                    $('#home-slider #owl-main img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
                }
            }
        });


        /* Home background slider */
        $("#owl-blog").owlCarousel({
            autoPlay: 3500,
            navigation: false,
            goToFirst: true,
            goToFirstSpeed: 2000,
            slideSpeed: 700,
            pagination: false,
            singleItem: true,
            afterInit: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-blog .item').height($(window).height());
                    $('#home-slider #owl-blog img').height($(window).height());
                } else {
                    $('#home-slider #owl-blog .item').height(1200);
                }

                $('#home-slider #owl-blog img').width('auto');

                var left = ((($('#home-slider').width() - $('#home-slider #owl-blog img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-blog img').css('top', '0px' );

                    $('#home-slider #owl-blog img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-blog img').css('left', '0px' );
                    $('#home-slider #owl-blog img').height('auto');
                    $('#home-slider #owl-blog img').width($(window).width());
                    $('#home-slider #owl-blog img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-blog img').height())/2)) + 'px' );
                }

            },
            afterUpdate: function() {
                $('#home-slider').height($(window).height());
                if (!$('#home-slider').hasClass('fixed-height')) {
                    $('#home-slider #owl-blog .item').height($(window).height());
                    $('#home-slider #owl-blog img').height($(window).height());
                } else {
                    $('#home-slider #owl-blog .item').height(600);
                }
                $('#home-slider #owl-blog img').width('auto');
                var left = ((($('#home-slider').width() - $('#home-slider #owl-main img').width())/2));
                if (left<0) {
                    $('#home-slider #owl-blog img').css('top', '0px' );
                    $('#home-slider #owl-blog img').css('left', left + 'px' );
                } else {
                    $('#home-slider #owl-blog img').css('left', '0px' );
                    $('#home-slider #owl-blog img').height('auto');
                    $('#home-slider #owl-blog img').width($(window).width());
                    $('#home-slider #owl-blog img').css('top', ((($('#home-slider').height() - $('#home-slider #owl-main img').height())/2)) + 'px' );
                }
            }
        });

        //Generic carousel
        $(".testimonials-carousel").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            transitionStyle : "goDown"
        });

        $(".generic-carousel").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            afterInit: function() {
                vertical_center();
            },
            afterUpdate: function() {
                vertical_center();
            }
        });



         $("#owl-studio").owlCarousel({
            autoPlay: 5000,
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });

        $(".clients-carousel").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            pagination: false,
            items : 5,
            itemsDesktop : [1199,5],
            itemsTablet: [768,5],
            itemsDesktopSmall : [979,5],

      });

        var $container = $('#folio');
        $container.isotope({
            itemSelector: '.folio-item'
        });
        var $optionSets = $('.folio-filter'),
            $optionLinks = $optionSets.find('a');
        $optionLinks.click(function() {
            var $this = $(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents('.folio-filter');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            value = value === 'false' ? false : value;
            options[key] = value;
            if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
                changeLayoutMode($this, options);
            } else {
                $container.isotope(options);
            }
            return false;
        });
        if (!$('#ip-container').hasClass('single')) {
            $('#nav li').removeClass('current');
            //$('#nav > li:first-child').addClass('current');
        }
    }); // End Window Load

    //Set home slider height on resize
    $(window).resize(function () {
        vertical_center();
        $('#home-slider').height($(window).height());
        if ($(window).width() >1024) { $('.slider-parallax').css('padding-top', $(window).height() + 'px'); }
    });




    /* Parallax */
    jQuery(document).ready(function($) {
        "use strict";
        if ($(window).width()>1024) {
            jQuery(window).on("scroll", function(){ //when the user is scrolling...
                /* Parallax */
                Move('.paraOn'); //move the background images in relation to the movement of the scrollbar
            });
        }
    });
    function Move(seccio){
        jQuery(seccio).each(function(){
            $(this).css('background-position', '0 '+(($(window).scrollTop()+$(window).height()-$(this).attr('yPos'))/3+$(this).height())+'px');
        });
    }
    jQuery('.parallax').on('inview', function(event, visible) {
            if (visible === true) {
                // element is now visible in the viewport
                var offset = jQuery(this).offset();
                jQuery(this).addClass('paraOn').attr('yPos',offset.top);
            } else {
                // element has gone out of viewport
                jQuery(this).removeClass('paraOn');
            }
    });


    jQuery(document).ready(function(){
        jQuery(".corner").click(function(){
            jQuery('#customizer').toggleClass('s-open');
        });
    });

    function swapStyleSheet(sheet){
        document.getElementById('general-css').setAttribute('href', sheet);
    }


}(jQuery));

(function($) {
    var support = { animations : Modernizr.cssanimations },
        container = document.getElementById( 'ip-container' ),
        header = container.querySelector( 'header.ip-header' ),
        loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
        animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
        // animation end event name
        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

    function init() {
        var onEndInitialAnimation = function() {
            if( support.animations ) {
                this.removeEventListener( animEndEventName, onEndInitialAnimation );
            }

            startLoading();
        };

        // disable scrolling
        window.addEventListener( 'scroll', noscroll );

        // initial animation
        classie.add( container, 'loading' );

        if( support.animations ) {
            container.addEventListener( animEndEventName, onEndInitialAnimation );
        }
        else {
            onEndInitialAnimation();
        }
    }

    function startLoading() {
        // simulate loading something..
        var simulationFn = function(instance) {
            var progress = 0,
                interval = setInterval( function() {
                    progress = Math.min( progress + Math.random() * 0.1, 1 );

                    instance.setProgress( progress );

                    // reached the end
                    if( progress === 1 ) {
                        classie.remove( container, 'loading' );
                        classie.add( container, 'loaded' );
                        $().scrollWindow();
                        clearInterval( interval );

                        var onEndHeaderAnimation = function(ev) {
                            if( support.animations ) {
                                if( ev.target !== header ) return;
                                this.removeEventListener( animEndEventName, onEndHeaderAnimation );
                            }

                            classie.add( document.body, 'layout-switch' );
                            window.removeEventListener( 'scroll', noscroll );
                        };

                        if( support.animations ) {
                            header.addEventListener( animEndEventName, onEndHeaderAnimation );
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 80 );
        };

        loader.setProgressFn( simulationFn );
    }

    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    $(window).load(function() {
        if (!$('.ip-header').hasClass('no-loader'))
            init();
    });


}(jQuery));


