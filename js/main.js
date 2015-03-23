(function ($) {

	new WOW().init();

	$(window).load(function() {
		$("#loader").delay(100).fadeOut("slow");
	});

	$(window).scroll(function() {
    var navbar = $(".navbar");
    var navbarOffset = navbar.offset().top;
    var aboutOffset = $('#about').offset().top;
    var navbarSize = navbar.height();
    var shrink = (navbarOffset + navbarSize - aboutOffset) >= 0;
		if (shrink) {
			$(".navbar-fixed-top").addClass("shrink");
		} else {
			$(".navbar-fixed-top").removeClass("shrink");
		}
	});

  $("a[href^='#'].smooth").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       window.location.hash = hash;
   });
  });

  $('.thumbnail').click(function(){

  	var title = $(this).parent('a').attr("title");
		var path = $(this).attr("data-path");

		var modal = $('.modal-body');
		modal.empty();

		var content;
		if(path.indexOf("youtube") > -1 || path.indexOf("youtu.be") > -1) {
			content = $("<div class=\"modal-video-wrapper\"><iframe src=\"" + path + "\"></iframe></div>");
		}
		else {
			content = $("<img src=\"" + path + "\" />")
		}

  	$('.modal-title').html(title);
  	content.appendTo(modal);
  	$('#portfolio-modal').modal({show:true});
  });

  /* blur on modal open, unblur on close */
  $('#portfolio-modal').on('show.bs.modal', function () {
   $('.col-6,.row .thumbnail').addClass('blur');
  });

  $('#portfolio-modal').on('hide.bs.modal', function () {
   $('.col-6,.row .thumbnail').removeClass('blur');
  });

})(jQuery);
