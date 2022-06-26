// -----------------------------------------------------search bar------------------------------------------------------
// updated 2019
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

// ---------------------------------------------------scroll up---------------------------------------------------------
window.addEventListener('scroll',function(){
  var scroll=document.querySelector('.scrollTop');
  scroll.classList.toggle("active" , window.scrollY > 500)
})
function scrollToTop(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2200,
    autoplayHoverPause:true
})
//-----------------------------button---------------------------------- 
$( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");
 
 });
//-------------------------------------------vertical carousel-------------------------
var count = -1;
var slides = jQuery.makeArray($('#slides article')), //base 0
    totalSlides = slides.length - 1;
var         startPos = { "top":'100%',  "z-index": "0" },
            endPos = { 'top':'0px', "z-index": "2" },
            prevPos = {'top': '-100%',  "z-index": "0"},
            transit = {"transition": "top 800ms ease 0s", "transition-delay": "0s"},
            nonetrans = {"transition": "none"},
            timer = null;


  function advance() {
    if (count == totalSlides){ 
      $(slides[count]).animate(startPos,0).css(transit);
        count = 0;
      $(slides[count]).css(prevPos).css(nonetrans);
      $(slides[count]).animate(endPos,0).css(transit);
     }else {  
       
      $(slides[count]).animate(startPos,0).css(transit);
       count++;
       $(slides[count]).css(prevPos).css(nonetrans);
      $(slides[count]).animate(endPos,0).css(transit);
       
      } 
    }
 
        function rewind() { 
     
          if( count === 0 ) {
            $(slides[count]).animate(prevPos,0).css(transit);
            count = totalSlides;
            $(slides[count]).css(startPos).css(nonetrans);
            $(slides[count]).animate(endPos,0).css(transit);
          }else{
            $(slides[count]).prev().css(startPos).css(nonetrans);
            $(slides[count]).animate(prevPos,0).css(transit);
             count = count -1; 
            $(slides[count]).animate(endPos,0).css(transit);
          
          } 
      
          
        } 

//---------------Dots functions
function selectDots(){  
  n = count + 1;
  $('#dots li:nth-child('+n+')').addClass('selected');
  $('#dots li:nth-child('+n+')').siblings().removeClass('selected');
}

function clickDots() {
  
 $('#dots li').bind('click',function (){
   
  var index = $(this).index();
   if (count > index){ 
      
     $(slides[count]).animate(prevPos,0).css(transit);
      count = index;
     $(slides[count]).css(startPos).css(nonetrans);
     $(slides[count]).animate(endPos,0).css(transit);

   }else if(count < index){
     $(slides[count]).animate(startPos,0).css(transit);
     count = index;
     $(slides[count]).css(prevPos).css(nonetrans);
     $(slides[count]).animate(endPos,0).css(transit);
 
 }else {
   return false;
 }
     selectDots();
     clearTimeout(timer); 
     timer = setTimeout(playSlides,7500);
     unbindBtn();
 });
  
} 

//-----------------------next and prev buttons

function upDown() {
$('.next').bind('click', function() {
    advance();
    selectDots();
    clearTimeout(timer);  
    timer = setTimeout(playSlides, 7500);
    unbindBtn();
});

$('.prev').bind('click', function() {  
  if(count == -1){
    count = 0;
  }else{
  rewind();
  }
  
  selectDots();
  clearTimeout(timer);
  timer = setTimeout(playSlides, 7500);
  unbindBtn();
});
}
 
function unbindBtn() {
  $('.next,.prev,#dots li').unbind('click');
  setTimeout(upDown,800);
  setTimeout(clickDots,800);
}
//----------------------- Slideshow automatic slide function
function playSlides() {
   clickDots();
   upDown();
   function loop() {
      advance();
      selectDots();
      timer = setTimeout(loop, 5000);
      unbindBtn();
      }                        
   loop();       
}
 
$(document).ready(function(){  
  playSlides();
});
  //----------------counter----------------  

  $('.counter').countUp({
    'time': 300,
    'delay': 2,
  });
  //----------------------button call------------------------
  $( ".button_call_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".call_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".call_button_circle").removeClass("desplode-circle");
    $(this).prev(".call_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_call_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".call_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".call_button_circle").removeClass("explode-circle");
      $(this).prev(".call_button_circle").addClass("desplode-circle");
 
 });

 //----------------------button call------------------------
 $( ".button_call_inner" ).mouseenter(function(e) {
  var parentOffset = $(this).offset(); 
 
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".call_button_circle").css({"left": relX, "top": relY });
  $(this).prev(".call_button_circle").removeClass("desplode-circle");
  $(this).prev(".call_button_circle").addClass("explode-circle");

});
//-------------------------------------------LOAD MORE-------------------------------------
$(".load-more").slice(0, 3).show()
$("more-btn").on("click",function(){
  $(".load-more:hidden").slice(0, 3).slidedown()
  if( $(".load-more:hidden").length = 0){
    $("more-btn").fadeout('slow')
  }
})