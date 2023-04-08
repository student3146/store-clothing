import Swiper from "swiper";
import vars from '../_vars';


const bannerSlider = new Swiper (vars.bannerSl, {
    loop: true,
    pagination: {
        el: '.banner-pag',
        type: 'bullets',
        clickable: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
})