import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use([Pagination])
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  }
});
