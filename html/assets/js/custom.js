$(document).on('ready',function() {
  "use strict";
      /*----------------------------------------------
	 -----------Sticky Header  --------------------
	 -------------------------------------------------*/
	var navWrap = $('.mainmenu-area');
	if (navWrap.length) {
 	var navWrap_Offset = $('.mainmenu-area').offset().top;
		$(window).on('scroll',function() {
			var top_scroll = $(window).scrollTop();
			if (top_scroll > navWrap_Offset) {
				navWrap.addClass('stricky');
			} 
			else {
				navWrap.removeClass('stricky');
			}
		});
	}
	
	var stricky_header_top = $('.stricky-header__top');
	if (stricky_header_top.length) {
 	var stricky_header_top_Offset = stricky_header_top.offset().top;
		$(window).on('scroll',function() {
			var top_scroll = $(window).scrollTop();
			if (top_scroll > stricky_header_top_Offset) {
				stricky_header_top.addClass('stricky');
			} 
			else {
				stricky_header_top.removeClass('stricky');
			}
		});
	}
	  /*----------------------------------------------
	 -----------Dropdown Function  --------------------
	 -------------------------------------------------*/
   $('.mobile-menu> li >a').on('click', function() { 
        if ($(window).width() <= 991) {
            $('.mobile-menu> li').removeClass('on');
            $('.mobile-menu> li> ul').slideUp('normal');
            if ($(this).next().next('ul').is(':hidden') === true) { 
                $(this).parent('li').addClass('on');
                $(this).next().next('ul').slideDown('normal');
            }
        }
    });
 /*----------------------------------------------
	 -----------Masonry Function  --------------------
	 -------------------------------------------------*/
	var container_masonry = $(".container-masonry");
	container_masonry.imagesLoaded(function() {
		container_masonry.imagesLoaded(function() {
		container_masonry.isotope({
			itemSelector : ".nf-item",
			layoutMode : "masonry",
			masonry : {
				columnWidth : 0,
				gutter : 0
			}
		});
	});
	});	
		
	   /*----------------------------------------------
	 -----------Light Function  --------------------
	 -------------------------------------------------*/
	var fLight = $(".fancylight");
	if (fLight.length) {
		fLight.fancybox({
			openEffect : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
/*==============================================================
	 Project_pop_home1
	 ==============================================================*/
	var popup_btn = $('.popup-box');
	if (popup_btn.length) {
	popup_btn.magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		}
	});
}	
		
/*----------------------------------------------
	 -----------Counter Function  --------------------
	 -------------------------------------------------*/
	var counter = $('.counter');
	if (counter.length) {
		$('.counter').appear(function() {
			counter.each(function() {
				var e = $(this),
				    a = e.attr("data-count");
				$({
					countNum : e.text()
				}).animate({
					countNum : a
				}, {
					duration : 8e3,
					easing : "linear",
					step : function() {
						e.text(Math.floor(this.countNum));
					},
					complete : function() {
						e.text(this.countNum);
					}
				});
			});
		});
	}
	
	    //=============Accordion Function=============
 $('.mobile-heading').on('click', function() { 
 			 $('.tab-content .tab-block').slideUp('normal');
 			 $('.tab-content .tab__link').removeClass('active__tab');
  				$(this).addClass('active__tab');
            if ($(this).next().is(':hidden') == true) {
                $(this).next().slideDown('normal');
            }
       
    });  
     //=============Tab Function=============
  $('.tab_link').on('click',function(){
  	$('.tab_link').removeClass('active');
  	$(this).addClass('active');
  	var tabShow = $(this).data('tab');
  	$('.tab_container .tb_block').css('display','none');
  	$('.'+tabShow).css('display','block');
  	$('.tab_container .tb_block').removeClass('active');
  	var data_text = $(this).data('tab');
  	setTimeout(function(){
  		$('.tab_container').find('.'+data_text).addClass('active');
  	},50);
  });	

	/*----------------------------------------------
	 -----------Slider Function  --------------------
	 -------------------------------------------------*/
	//Blog Slider
	var itemCarousel_1 = $(".item1-carousel");
	itemCarousel_1.owlCarousel({
		loop : true,
		margin : 10,
		nav : true,
		dots : false,
		center : true,
		autoplay : true,
		autoplayTimeout : 2000,
		autoplayHoverPause : true,
		responsive : {
			0 : {
				items : 1

			},
			600 : {
				items : 1

			},
			1000 : {
				items : 1

			}
		},
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]

	});
	
//	home_Testimonial_Carousel
	var testimonial = $('.testimonial');
	testimonial.owlCarousel({
		loop : true,
		margin : 30,
		nav : false,
		dots : false,
		center : false,
		autoplay : true,
		autoplayTimeout : 3000,
		autoplayHoverPause : true,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 3
			}
		}
	});
	

	//	Releted Project slider
	var relatedProject = $("#related-project");
	relatedProject.owlCarousel({
		loop : true,
		nav : true,
		dots : false,
		margin : 30,
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 2
			},
			1200 : {
				items : 3
			}
		},
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]

	});

	//NEW_ABOUT_testimonial 
	var carouselSlider = $('.carousel-slider');
	carouselSlider.owlCarousel({
		loop : true,
		margin : 10,
		nav : true,
		dots : false,
		center : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 3
			}
		}
	});
	
	//	About page Carousel
	var carouselSlider = $('.abt-block__slider');
	carouselSlider.owlCarousel({
		loop : true,
		margin : 10,
		nav : false,
		dots : true,
	  
		center : false,
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 1
			},
			992 : {
				items : 1
			},
			1200 : {
				items : 1
			}
		}
	});
	//services-items
	var historyBlock = $('.history-block');
	historyBlock.owlCarousel({
		loop : true,
		margin :30,
		nav : true,
		dots : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 4
			}
		}
	});
	
	var carouselSlider = $('.carousel-slider');
	carouselSlider.owlCarousel({
		loop : true,
		margin : 10,
		nav : true,
		dots : false,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 3
			},
			1200 : {
				items : 3
			}
		}
	});
	
	
	
	
	/* ---------------------	
		Owl Slider
	/* --------------------- */
			"use strict";
			if ($('.owl-carousel').length) {		    
				  $(".owl-carousel").each(function (index) {
					var effect_mode = $(this).data('effect');
					var autoplay = $(this).data('autoplay');
					var loop = $(this).data('loop');
					var margin = $(this).data('margin');
					var center = $(this).data('center');
					var autoplay = $(this).data('autoplay');
					var autoplayTimeout = $(this).data('autoplayTimeout');
					var autoplayHoverPause = $(this).data('autoplayHoverPause');
					var navigation = $(this).data('navigation');
					var prev_arrow = $(this).data('prev');
					var next_arrow = $(this).data('next');
					var pagination = $(this).data('pagination');
					var singleitem = $(this).data('singleitem');
					var items = $(this).data('items');
					var itemsdesktop = $(this).data('desktop');
					var itemsdesktopsmall = $(this).data('desktopsmall');
					var itemstablet = $(this).data('tablet');
					var itemsmobile = $(this).data('mobile');
					var nav22 = "namee";
					
					$(this).owlCarousel({ 						
						loop : loop,
						margin : margin,
						
						nav : navigation,
						dots : pagination,
						autoplay : autoplay,
						autoplayTimeout : 2000,
						autoplayHoverPause : autoplayHoverPause, 
						responsive : {
						0 : { items :itemsmobile
						},
						767 : { items :itemstablet
						},
						992 : { items :itemsdesktopsmall
						},
						1200 : { items :itemsdesktop
						}
					},

						navText : ["<i class='"+prev_arrow+"'></i>", "<i class='"+next_arrow+"'></i>"]						
					});
				});
			}
			 
	
	/*----------------------------------------------
	 ----------- parallax Function  --------------------
	 -------------------------------------------------*/
	var parallaxs = $(".parallax");
	if (parallaxs.length) {
	parallaxs.parallax("50%", 0.02);
	}
	var parallaxs = $("#overlay_block");
	if (parallaxs.length) {
	parallaxs.parallax("50%", 0.02);
	}

	$(window).on('load',function(){
		/*----------------------------------------------
	 ----------- Loader Function  --------------------
	 -------------------------------------------------*/
	var preloader = $("#preloader");
	preloader.delay(500).fadeOut();
	});
	
   	/*----------------------------------------------
	 ----------- Map Function  --------------------
	 -------------------------------------------------*/
	var mapWrap = $('#map');
	if (mapWrap.length) {
		google.maps.event.addDomListener(window, 'load', initialize);

	}
	
});

	 /*accordion*/
        var accordion_select = $('.accordion');
        if (accordion_select) {
            accordion_select.each(function () {
                $(this).accordion({
                    "transitionSpeed": 400,
                    transitionEasing: 'ease-in-out'
                });
            });
        }
	
	 /*MatchHeight*/
 if ($('.matchHeigh').length) {
        var matchHeigh = $('.matchHeigh');
        if (matchHeigh) {
            matchHeigh.matchHeight();
        }
 }		
/*-----------------------------------------------
 -----------  Map Color Theme Function  ----------
 -------------------------------------------------*/
var mapWrap = $('#map');
if (mapWrap.length) {
	var myCenter = new google.maps.LatLng(51.538308, -0.3817765);
	function initialize() {
		var mapProp = {
			center : myCenter,
			zoom : 15,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			scrollwheel : false,
			styles : [{
				elementType : 'geometry',
				stylers : [{
					color : '#242f3e'
				}]
			}, {
				elementType : 'labels.text.stroke',
				stylers : [{
					color : '#242f3e'
				}]
			}, {
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#746855'
				}]
			}, {
				featureType : 'administrative.locality',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#d59563'
				}]
			}, {
				featureType : 'poi',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#d59563'
				}]
			}, {
				featureType : 'poi.park',
				elementType : 'geometry',
				stylers : [{
					color : '#263c3f'
				}]
			}, {
				featureType : 'poi.park',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#6b9a76'
				}]
			}, {
				featureType : 'road',
				elementType : 'geometry',
				stylers : [{
					color : '#38414e'
				}]
			}, {
				featureType : 'road',
				elementType : 'geometry.stroke',
				stylers : [{
					color : '#212a37'
				}]
			}, {
				featureType : 'road',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#9ca5b3'
				}]
			}, {
				featureType : 'road.highway',
				elementType : 'geometry',
				stylers : [{
					color : '#746855'
				}]
			}, {
				featureType : 'road.highway',
				elementType : 'geometry.stroke',
				stylers : [{
					color : '#1f2835'
				}]
			}, {
				featureType : 'road.highway',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#f3d19c'
				}]
			}, {
				featureType : 'transit',
				elementType : 'geometry',
				stylers : [{
					color : '#2f3948'
				}]
			}, {
				featureType : 'transit.station',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#d59563'
				}]
			}, {
				featureType : 'water',
				elementType : 'geometry',
				stylers : [{
					color : '#17263c'
				}]
			}, {
				featureType : 'water',
				elementType : 'labels.text.fill',
				stylers : [{
					color : '#515c6d'
				}]
			}, {
				featureType : 'water',
				elementType : 'labels.text.stroke',
				stylers : [{
					color : '#17263c'
				}]
			}]
		};
		var map = new google.maps.Map(document.getElementById("map"), mapProp);

		var marker = new google.maps.Marker({
			position : myCenter,
			icon : {
				url : 'assets/images/map-pin.png',
				size : new google.maps.Size(90, 111), //marker image size
				origin : new google.maps.Point(0, 0), // marker origin
				anchor : new google.maps.Point(35, 86) // X-axis value (35, half of marker width) and 86 is Y-axis value (height of the marker).
			}
		});

		marker.setMap(map);

	}

	function reloadStylesheets() {
		var queryString = 'reload=' + new Date().getTime();
		$('link[rel="stylesheet"]').each(function() {
			if (this.href.indexOf('?') === -1) {
				this.href = this.href + '&' + queryString;
			} else {
				this.href = this.href + '?' + queryString;
			}
		});
	}
	}
	