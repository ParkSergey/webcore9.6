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
})

swiperRepair.use([Pagination])

const swiperRepair = new Swiper('.swiper.swiper-repair', {
  wrapperClass: '.swiper-wrapper .swiper-wrapper-repair',
  slideClass: '.swiper-slide .swiper-slide-repair',

  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination.swiper-pagination-repair',
    clickable: true
  }
})
const swiperPrices = new Swiper('.swiper.swiper-prices', {
  // тут класс свайпер
  wrapperClass: '.swiper-wrapper .swiper-wrapper-prices', 
  slideClass: '.swiper-slide .swiper-slide-prices',
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination.swiper-pagination-prices',
    clickable: true
  }
})
