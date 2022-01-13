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
    
    // woocommerce product title same height
    let productTitle = document.querySelectorAll('.woocommerce-loop-product__title');
    let productTitleHeight = 0;
    productTitle.forEach(element => {
        if(element.clientHeight > productTitleHeight){
            productTitleHeight = element.clientHeight;
        }
    });
    productTitle.forEach(element => {
        element.style.height = productTitleHeight + 'px';
    });
    
})

