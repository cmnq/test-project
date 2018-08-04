$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,                              
    items: 4,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.item').magnificPopup({
    type: 'image',
    removalDelay:300,
    mainClass:'mfp-fade'
});

