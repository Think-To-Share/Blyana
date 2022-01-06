import { tns } from 'tiny-slider/src/tiny-slider'

class IconSection {
    constructor(section) {
        this.section = section;
        this.slide_active = false;
    }

    init() {
        this.createSlides();
        this.slides.destroy();

        // Adjust slides for the first time
        this.adjustSlides();

        // Register resize event and text animation
        this.registerResizeEvent();
        this.setupClickAnimation();

        // Setup slide listener
        this.setupSlideListener();
    }

    animate(element, animation, prefix = 'animate__') {
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
    }

    createSlides() {
        this.slides = tns({
            container: '.icon-section .icon-slides',
            items: 2,
            nav: false,
            loop: false,
            controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],

            responsive: {
                576: {
                    items: 3,
                }
            }
        })
    }

    adjustSlides() {
        if (window.innerWidth < 768) {
            if(this.slides.rebuild && !this.slide_active) {
                this.slides = this.slides.rebuild();
                this.slide_active = true;

                // Setup slide listener
                this.setupSlideListener();
            }
        } else {
            if(this.slides.destroy) {
                this.slides.destroy();
                this.slide_active = false;
            }
        }
    }

    registerResizeEvent() {
        window.addEventListener('resize', () => {
            this.adjustSlides();
        })
    }

    setupClickAnimation() {
        const images = document.querySelectorAll(`${this.section} .logoimg`);
        const brandsHeadingText = document.querySelector(`${this.section} .brands-heading-text`);

        images.forEach(img => {
            img.addEventListener('click',(e) => {
                // add active class to the clicked image
                images.forEach(img => img.classList.remove('active'))
                e.target.classList.add('active');

                // animate the text
                const text = e.target.dataset.text;
                brandsHeadingText.innerText = text;
                this.animate('.icon-section .brands-heading-text', "fadeInUp");
            })
        })
    }

    setupSlideListener() {
        if(this.slides.events) {
            this.slides.events.on('indexChanged', (event) => {
                const images = document.querySelectorAll(`${this.section} .logoimg`);
                images[event.index].click();
            })
        }
    }
}

export default IconSection;