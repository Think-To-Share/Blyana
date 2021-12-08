import { tns } from 'tiny-slider/src/tiny-slider'
if (document.querySelector('.hero-section')) {
    tns({
        container: '.hero-section .slides',
        items: 1,
        nav: false,
        // controlsContainer: '.hero-section .testimonial-nav',
        autoplay: true,
        controls:false,
        autoplayTimeout:50000,
        autoplayButtonOutput: false,
        responsive: {
            768:{
              items: 1,
              controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
              controls:true
            }
        }
    })
}

if (document.querySelector('.blog-section')) {
    tns({
        container: '.blog-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls:false,
        responsive: {
            768:{
              items: 2,
              gutter: 20,
            },
            992:{
                items: 3,
                gutter: 20,
              }
        }
    })
}

if (document.querySelector('.instragram-sec')) {
    tns({
        container: '.instragram-sec .slides',
        items: 1,
        nav: false,
        autoplay: true,
        autoplayButtonOutput: false,
        controls:true,
        // gutter:20,
        loop:true,
        controlsContainer:'.instragram-sec .controls-container',
        responsive: {
            576:{
                items:2,
            },
            768:{
              items:4,
              gutter:20
            }

        }
    })
}