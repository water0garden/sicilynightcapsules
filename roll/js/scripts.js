
function showTranslations(num)
var translation = document.getElementsById("myTranslation");
       ("#show").click(function(){
         ("myTranslation").show();
         if (x = 0; x < translation.length; x++) {
             translation[x].style.display = "none";
       });
     });




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
