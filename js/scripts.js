// $( ".slide" ).click(function() {
//      //
//      // var nextSlide = $(this).next();
//      //
//      // $(this).css("display", "none");
//      //
//      // if( nextSlide.length == 0 ) {
//      //      // nextSlide = $(this).prevAll('.slide').last();
//      //      $(".slide").first().css("display", "block");
//      //
//      //  }
//      // else {
//      //      $(this).next().css("display", "block");
//      // }
//      // });
//      //
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn")
//
// btns.forEach(function(btn){
//  btn.addEventListener("click", function (e){
//    const styles = e.currentTarget.classList;
//    if (style.contains("previous")) {
//      value.style.backgroundColor = "green";
//    } if (style.contains ("next")) {
//      value.style.backgroundColor = "red";
//    }
//  });
// });



var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}

// var images = document.getElementsByClassName("imageSlides");
// var captions = document.querySelector(".figcaption");
//   var introduction = "Hi, I'm " + images + ", and I graduate in " + captions;
//    console.log(introduction);
