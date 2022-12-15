(function () {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });
      let menuFilters = select('#menu-flters li', true);
      on('click', '#menu-flters li', function (e) {
        e.preventDefault();
        menuFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');
        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        menuIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }
  });
  const glightbox = GLightbox({
    selector: '.glightbox'
  });
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
})();
(function ($) {
  "use strict"
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 600,
    lazyLoad: true,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 3
      },
      576: {
        items: 3
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });
})(jQuery);

/* Tidak Best Practice :v */

let modal_1 = document.getElementById("myModals-1");
let modal_2 = document.getElementById("myModals-2");
let modal_3 = document.getElementById("myModals-3");
let modal_4 = document.getElementById("myModals-4");
let modal_5 = document.getElementById("myModals-5");
let modal_6 = document.getElementById("myModals-6");
let modal_7 = document.getElementById("myModals-7");

let span = document.getElementsByClassName("close");
var btn_1 = document.getElementById("speak-1");
var btn_2 = document.getElementById("speak-2");
var btn_3 = document.getElementById("speak-3");
var btn_4 = document.getElementById("speak-4");
var btn_5 = document.getElementById("speak-5");
var btn_6 = document.getElementById("speak-6");
var btn_7 = document.getElementById("speak-7");

btn_1.onclick = () => {
  modal_1.style.display = "block";
}

btn_2.onclick = () => {
  modal_2.style.display = "block";
}

btn_3.onclick = () => {
  modal_3.style.display = "block";
}

btn_4.onclick = () => {
  modal_4.style.display = "block";
}

btn_5.onclick = () => {
  modal_5.style.display = "block";
}

btn_6.onclick = () => {
  modal_6.style.display = "block";
}

btn_7.onclick = () => {
  modal_7.style.display = "block";
}



span[0].onclick = () => {
  modal_1.style.display = "none";
}

span[1].onclick = () => {
  modal_2.style.display = "none";
}

span[2].onclick = () => {
  modal_3.style.display = "none";
}

span[3].onclick = () => {
  modal_4.style.display = "none";
}

span[4].onclick = () => {
  modal_5.style.display = "none";
}

span[5].onclick = () => {
  modal_6.style.display = "none";
}

span[6].onclick = () => {
  modal_7.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal_1) {
    modal_1.style.display = "none";
  }
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
  if (event.target == modal_3) {
    modal_3.style.display = "none";
  }
  if (event.target == modal_4) {
    modal_4.style.display = "none";
  }
  if (event.target == modal_5) {
    modal_5.style.display = "none";
  }
  if (event.target == modal_6) {
    modal_6.style.display = "none";
  }
  if (event.target == modal_7) {
    modal_7.style.display = "none";
  }
}