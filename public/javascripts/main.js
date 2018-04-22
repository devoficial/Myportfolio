var str = ["Websites","Webapplications","Ui","Landing Pages"]
$(document).ready(function() {
var myTimer = setInterval(function(){
    var randomNumber = Math.round( Math.random() * (str.length-1) );

      $("#change").text(str[randomNumber]).addClass("animated zoomIn");
    
},2000);


  // Check if element is scrolled into view
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('slideInLeft');
      }
    });
  });
  $(window).scroll(function() {
    $('.scroll-animations2 .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('lightSpeedIn');
      }
    });
  });
});      