$(function(){
    
    $('.pratos').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplayspeed: 3000,
        arrows: false,
        nextArrow: null,
        prevArrow: null 
      }) 
      
})

var textAreas = document.getElementsByTagName('textarea');

Array.prototype.forEach.call(textAreas, function(elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});