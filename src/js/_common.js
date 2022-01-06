window.addEventListener('load', () =>{
    window.addEventListener('scroll',()=>{
        
        if(window.scrollY > 100){
            // document.querySelector('.header-sec .bottom-bar').style.backgroundColor='#fff';
            document.querySelector('.header-sec .bottom-bar').classList.add('scroll')
            document.querySelector('.header-sec .mobile-menu').classList.add('scroll')
        }
        else{
            // document.querySelector('.header-sec .bottom-bar').style.backgroundColor='transparent';
            document.querySelector('.header-sec .bottom-bar').classList.remove('scroll')
            document.querySelector('.header-sec .mobile-menu').classList.remove('scroll')
        }
    })

    // Create mutation observer to detect attribute changes
    // const mutObserver = new MutationObserver(mutations => {
    //     mutations.forEach(mutation => {
    //         if (mutation.type === 'attributes') {
    //             const elem = mutation.target;
    //             elem.classList.add('animate__animated' , 'animate__fadeIn');

    //             elem.addEventListener('animationend', (event) => {
    //                 event.stopPropagation()
    //                 event.target.classList.remove('animate__animated', 'animate__fadeIn');
    //             }, {once: true});
    //         }
    //     });
    // });

    // if(document.querySelector('.woocommerce div.product div.images img')) {
    //     mutObserver.observe(document.querySelector('.woocommerce div.product div.images img'), {
    //         attributes: true,
    //     })
    // }
    
    
})

