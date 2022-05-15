$(function () {
	var header = $("#header");
	var introH = $("#intro").innerHeight();
     var scrollOffset = $(window).scrollTop();
      checkScroll(scrollOffset);

         /*Fixed Header*/
    $(window).on("scroll", function() {
    	
    	scrollOffset = $(this).scrollTop();

    	if( scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	});

	 function checkScroll() {
	 	scrollOffset = $(this).scrollTop();

    	if( scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed")

	    }
	 }
	      /*Smooth Scroll*/

    $("[data-scroll]").on("click",function(event){
    	event.preventDefault();

    	var $this = $(this),
    	    blockId = $this.data('scroll'),
    	    blockOffset = $(blockId).offset().top;

         $("#nav a").removeClass("active");
    	    $this.addClass("active");

    	$("html,body").animate({
    		scrollTop: blockOffset
    	},500);
    });


    /*Menu nav toggle*/

    $("#nav_toggle").on("click",function(event){
    	 event.preventDefault();

      $(this).toggleClass("active");
    	 $("#nav").toggleClass("active");

    });

    /*Collapse*/
    $("[data-collapse]").on("click",function(event){
      event.preventDefault();

       var $this = $(this),
    	      blockId = $this.data('collapse');

           $(blockId).slideToggle();
    });

    /*Slider*/
    $("[data-slider]").slick({
    	  infinite: true,
    	  fade: false,
    	  slidesToShow: 1,
       slidesToScroll: 1

    });



});
    
	







