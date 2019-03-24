
$(document).ready(function() {

  var burger = $('.nav-toggle');
  $('.troubleshooting').hide();

  burger.click(function() {
    $(this).toggleClass('opened');
    $('.nav-list').toggleClass('opened');
  });

  function initTroublesMenu() {
    var menu = document.getElementsByClassName('troubleshooting'),
        trigger = document.getElementsByClassName('showTroublesMenu'),
        close = document.getElementsByClassName('btn--close');
        burger = document.getElementsByClassName('nav-toggle');
        isOpened = false;
    $(trigger).click(function() {

      if(window.innerWidth >= 969) {
        isOpened =!isOpened;
        $(menu).toggle();
        $('body').css('min-height',$(document).outerHeight()+60);
        if(isOpened == false) {
          $('body').css('min-height', '100vh');
        }

      } else {
        $(menu).toggle();
        $(burger).toggleClass('opened');
        $('.nav-list').toggleClass('opened');
      }

    });



    var closeMenu = function() {
      $(menu).hide();

    }

    for (var i=0; i < close.length; i++) {
      close[i].onclick = function() {
        closeMenu();
      }
    }
  }

  initTroublesMenu();

  function initModals() {

    var modal = document.getElementsByClassName('modal'),
        trigger = document.getElementsByClassName('modal-trigger'),
        close = document.getElementsByClassName('modal__close');

    function closeModal(that) {
      modal = $(that).closest('.modal');
      if(modal.hasClass('modal-gratitude')) {
        modal.removeClass('modal--show').addClass('modal--hide');
      } else {
        modal.removeClass('modal--show').addClass('modal--hide');
      }


      function afterAnimation() {
        modal.removeClass('modal--hide');
      }

      modal.on("webkitAnimationEnd", afterAnimation);
      modal.on("oAnimationEnd", afterAnimation);
      modal.on("msAnimationEnd", afterAnimation);
      modal.on("animationend", afterAnimation);
    };

    $(close).click(function() {
      closeModal(this);
    });

    $(trigger).click(function() {
      if($(this).hasClass('trigger-gratitude')) {
        $('.modal-gratitude').addClass('modal--show');
      } else {
        $('.modal-diagnostics').addClass('modal--show');
      }
    });

  }
  initModals();

  $('.slick-slider').slick({
    dots: true,
    autoplay: false,
    arrows: false,
    draggable: false,
    fade: true,
    responsive: [{

      breakpoint: 969,
      settings: {
        dots: false,
        width: '921px',
        autoplay: true,
        autoplaySpeed: 5000
      }
    },
    {
      breakpoint: 480,
      settings: 'unslick'
    }],
    appendDots: $('.slick-slider__dots'),
    customPaging : function(slider, i) {
      return '<div class="slick-slider__dot"></div><div class="slick-slider__dot slick-slider__dot--active"></div></a>';
    },
  });

});
