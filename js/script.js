// $('.slider__items').slick({
//    infinite: false,
//    speed: 300,
//    slidesToShow: 4,
//    slidesToScroll: 4,
//    responsive: [
//      {
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 3,
//          dots: true,
//          arrows:false,
//        }
//      },
//      {
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2,
//          dots: true,
//          arrows:false,
//        }
//      },
//      {
//        breakpoint: 420,
//        settings: {
//          slidesToShow: 1,
//          slidesToScroll: 1,
//          dots: true,
//          arrows:false,
//        }
//      }
//    ]
//  });

let menuArrows = document.querySelector('.menu__arrows');
let headertopcContacts = document.querySelector('.header__top-contacts');
let menu = document.querySelector('.menu');
let menuItems = document.querySelector('.menu__items');

menuArrows.addEventListener('click',function(){
  menuArrows.classList.toggle('active');
  headertopcContacts.classList.toggle('active');
  menu.classList.toggle('active');
  menuItems.classList.toggle('active');
})
