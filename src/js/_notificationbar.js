import { timer } from 'rxjs'
import { map } from 'rxjs/operators'

window.addEventListener('load', () => {
    const offers = ['Subscribe for 10% off on your first order', 'Free shipping on all orders over $75']
    const topBarText = document.querySelector('.header-sec .top-bar .top-bar-text');

    if(topBarText) {
        timer(0, 5000)
        .pipe(
            map(step => step % offers.length),
            map(index => offers[index])
        )
        .subscribe(
            text => {
               topBarText.textContent = text;
            }
        )
    }
})