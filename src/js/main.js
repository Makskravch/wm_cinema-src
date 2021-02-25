$(function() {

  const windowEl          = $(window)
  const documentEl        = $(document)
  const body              = $('body')
  const header            = $('#header')
  const menu              = $('#menu')
  const menuBtn           = $('.js-menu-btn')
  const menuBtnText       = menuBtn.find('.menu-btn__text')
  const toggleBtn         = $('.js-toggle-btn')
  const customSelectDark  = $('.js-custom-select-dark')
  const customSelectLight = $('.js-custom-select-light')
  const hiddenTextWrap    = $('.js-hidden-text-wrap')

  // Custom Selectmenu
  if (customSelectDark.length) {
    customSelectDark.selectmenu({
      classes: {
        "ui-selectmenu-button": "selectmenu-button_dark",
        "ui-selectmenu-menu": "selectmenu-menu_dark"
      }
    })
  }
  if (customSelectLight.length) {
    customSelectLight.selectmenu({
      classes: {
        "ui-selectmenu-button": "selectmenu-button_light",
        "ui-selectmenu-menu": "selectmenu-menu_light"
      }
    })
  }

  // Popup profile
  if ($('.js-open-popup-profile').length) {
    $('.js-open-popup-profile').magnificPopup({
      items: {
        src: '#popup-profile',
        type: 'inline'
      },
      midClick: true,
      showCloseBtn: false,
      mainClass: 'mfp-fade',
      callbacks: {
        open: function() {
          body.addClass('overflow');
        },
        close: function() {
          body.removeClass('overflow');
        }
      }
    });
  }

  // Banner slider
  if ($('.js-banner-slider').length) {
    $('.js-banner-slider').slick({
      infinite: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false
          }
        }
      ]
    })
  }

  // Slider 4 tiles
  if ($('.js-slider-4').length) {
    $('.js-slider-4').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        },
      ]
    })
  }

  // Slider 5 tiles
  if ($('.js-slider-5').length) {
    $('.js-slider-5').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        },
      ]
    })
  }




  menuBtn.on('click', toggleActiveClass)
  menuBtn.on('click', openCloseMenu)
  toggleBtn.on('click', slideToggle)
  documentEl.on('scroll', headerBackgroundColorHandler)
  if (windowEl.scrollTop() > 15) {
    headerBackgroundColorHandler()
  }
  documentEl.on('scroll', closeCustomSelect)
  windowEl.on('resize', closeCustomSelect)

  hiddenTextWrap.on('click', function (e) {
    const text = $(this).find('.js-hidden-text')
    const btn  = $(this).find('.js-btn-show-text')
    if (e.target.closest('.js-btn-show-text') && text.hasClass('is-hidden-text')) {
      text.removeClass('is-hidden-text')
      text.animate({'max-height': '1000px'})
      btn.hide()
    }
  })

  function toggleActiveClass() {
    $(this).toggleClass('is-active')
  }

  function openCloseMenu() {
    body.toggleClass('overflow')
    menu.toggleClass('is-active')
    if (menu.hasClass('is-active')) {
      menuBtnText.text('Закрити')
    } else {
      menuBtnText.text('Меню')
    }
    if (windowEl.scrollTop() > 15) {
      header.toggleClass('colored-bg')
    }
  }

  function slideToggle() {
    if ($(this).find('.js-toggled').length) {
      $(this).find('.js-toggled').slideToggle()
    }
    if ($(this).siblings('.js-toggled').length) {
      $(this).siblings('.js-toggled').slideToggle()
    }
  }

  function closeCustomSelect() {
    customSelectDark.selectmenu('close')
    customSelectLight.selectmenu('close')
  }

  function headerBackgroundColorHandler() {
    if (windowEl.scrollTop() > 15) {
      header.addClass('colored-bg')
    } else {
      header.removeClass('colored-bg')
    }
  }
})
