Template.carousel.onRendered(function(){

});

Template.carousel.events({
    'click #leftSlider': function (e) {
        manageSlider("left");
    },
    'click #rightSlider': function (e) {
        manageSlider("right");
    }
});


var manageSlider = function (sliderDirection) {
    var currentSlide = $("[data-activeSlider='active']").attr('data-value') * 1,
        nextSlide=2;
    
    //Previous slide
    if (sliderDirection === 'left') {
        if (currentSlide === 1) nextSlide = 6;
        else nextSlide = currentSlide - 1;


    }

    //Next slide
    if (sliderDirection === 'right') {
        if (currentSlide === 6) nextSlide = 1;
        else nextSlide = currentSlide + 1;
    }
    
    $("[data-activeSlider='active']").fadeOut(500).removeAttr('data-activeSlider');
    $("[data-value='"+nextSlide+"']").attr('data-activeSlider', 'active').fadeIn(2000);
}