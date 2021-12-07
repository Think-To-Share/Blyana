window.addEventListener('load', () =>{
    window.addEventListener('scroll',()=>{
        
        if(window.scrollY > 100){
            // document.querySelector('.header-sec .bottom-bar').style.backgroundColor='#fff';
            document.querySelector('.header-sec .bottom-bar').classList.add('scroll')
        }
        else{
            // document.querySelector('.header-sec .bottom-bar').style.backgroundColor='transparent';
            document.querySelector('.header-sec .bottom-bar').classList.remove('scroll')
        }
    })
})