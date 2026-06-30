import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination])

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

swiperRepair.use([Pagination])

const swiperRepair = new Swiper('.swiper-repair', {
  wrapperClass: 'swiper-wrapper-repair',
  slideClass: 'swiper-slide__repair',

  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination-repair',
    clickable: true,
  },
})
