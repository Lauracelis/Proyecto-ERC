
/*FUNCIONES DE LA LINEA DEL TIEMPO*/

/* DEFINICIONES DE VARIABLES */
var timelineSwiper = new Swiper ('.timeline .swiper-container', {
    direction: 'vertical', //Para establecer la dirección del texto
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
      var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      768: {
        direction: 'horizontal',
      }
    }
  });



