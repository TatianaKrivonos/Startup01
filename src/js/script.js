
$(document).ready(function() {
  /*слайдер*/
  $('.j-team').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.j-review').slick({
    arrows: false,
    dots: true
  });

  /*активные элементы*/
  $(".tabs__link").click(function(e) {
    e.preventDefault();
  });

  $(".tabs__link--all").addClass("active");

  $(".tabs__link").on("click", function(){
    $(".tabs__link").removeClass("active");
    $(this).addClass("active");
  });
});

/*кнопка меню*/
let toggle = document.getElementById('toggle');
let menu = document.getElementById('menuList');

  toggle.addEventListener('click', menuVisible);
  function menuVisible(e) {
    e.preventDefault();
    menu.classList.toggle('main-nav__list--open');
  };
