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

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

if (document.querySelector('.icon-section')){
    const images = document.querySelectorAll('.icon-section .logoimg');
    const brandsHeadingText = document.querySelector('.icon-section .brands-heading-text');
    images.forEach(img => {
        img.addEventListener('click',(e) => {
            const text = e.target.dataset.text;
            brandsHeadingText.innerText = text;
            animateCSS('.icon-section .brands-heading-text', "fadeInUp");
        })
    })
}