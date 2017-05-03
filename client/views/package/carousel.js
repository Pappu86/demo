Template.carousel.events({
    'click #leftSlider': function (e) {
        manageSlider("left");
    },
    'click #rightSlider': function (e) {
        manageSlider("right");
    }
});


var manageSlider = function (sliderDirection) {
    var currentSlide = $("[data-activeSlider='active']").attr('data-value') * 1;
    
    //Previous slide
    if (sliderDirection === 'left') {
        if (currentSlide === 1) currentSlide = 6;
        else currentSlide = currentSlide - 1;
    }

    //Next slide
    if (sliderDirection === 'right') {
        if (currentSlide === 6) currentSlide = 1;
        else currentSlide = currentSlide + 1;
    }

    $(".carousel-obj").each(function (index) {
        var $this = $(this),
            sliderNumber = $this.attr('data-value') * 1;

        if (currentSlide === sliderNumber) $this.removeClass('opacity-0').attr('data-activeSlider', 'active');
        else $this.addClass('opacity-0').removeAttr('data-activeSlider');
    });
}