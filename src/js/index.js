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
const swiperRepair = new Swiper('.swiper.swiper-repair', {
  slidesPerView: '1',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination.swiper-pagination-repair',
    clickable: true
  }
})
const swiperPrices = new Swiper('.swiper.swiper-prices', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination.swiper-pagination-prices',
    clickable: true
  }
})
function setupToggle(buttonSelector, contentSelector) {
  const button = document.querySelector(buttonSelector)
  const content = document.querySelector(contentSelector)

  if (!button || !content) return

  const text = button.querySelector('span')
  const icon = button.querySelector('img')

  button.addEventListener('click', () => {
    content.classList.toggle('expanded')

    if (content.classList.contains('expanded')) {
      text.textContent = 'Скрыть'
      icon.style.transform = 'rotate(180deg)'
    } else {
      text.textContent = 'Показать все'
      icon.style.transform = 'rotate(0deg)'
    }
  })
}

setupToggle('.brands-button', '.table-brands')
setupToggle('.repair-button', '.repair')
const burger = document.querySelector('.burger-button')
const menu = document.querySelector('.menu-sidebar')
const close = document.querySelector('.menu-close')

burger.addEventListener('click', () => {
  menu.classList.add('active')
})

close.addEventListener('click', () => {
  menu.classList.remove('active')
})
