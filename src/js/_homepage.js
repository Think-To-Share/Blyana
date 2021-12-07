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
        items: 3,
        nav: true,
        gutter: 20,
        autoplay: true,
        autoplayButtonOutput: false,
        controls:false
    })
}
