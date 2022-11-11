$( ".slide" ).click(function() {

     var nextSlide = $(this).next();

     $(this).css("display", "none");

     if( nextSlide.length == 0 ) {
          // nextSlide = $(this).prevAll('.slide').last();
          $(".slide").first().css("display", "block");

      }
     else {
          $(this).next().css("display", "block");
     }
     });
