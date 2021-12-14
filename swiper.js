var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletElement: 'span',
      bulletClass: 'swiper-pagination-bullet',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    effect: "fade"
  })

  
  // window.addEventListener('DOMContentLoaded', function() {
  //   document.querySelector('#burger').addEventListener('click', function(){
  //     document.querySelector('#menu').classList.toggle('is-active')
  //   })
  // })

let burger = document.querySelector('.burger');
let parent = document.querySelector('.header__burger');
burger.onclick = function(){
  parent.classList.toggle('menu_show');
}