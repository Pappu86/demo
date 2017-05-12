Template.slickPackage.onRendered(function () {
$(".slickDemo").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });

$(".slickImageDemo").slick({        
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
});

