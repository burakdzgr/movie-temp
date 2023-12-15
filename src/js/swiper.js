// common card slider start
var bannerSlider = document.querySelectorAll('[data-swiper="banner-detail-slider"]')
var swiper = new Swiper(".swiper.swiper-card", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
// common card slider end

// ott thumb slider start

function ottThumbSlider() {
  if (typeof Swiper !== "undefined") {
    const slider_thumb = {
      direction: "horizontal",
      spaceBetween: 24,
      slidesPerView: 2,
      loop: true,
      loopedSlides: 8,
      slideToClickedSlide: true,
      autoplay: true,
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
      breakpoints: {
        0: {
          direction: "horizontal",
          slidesPerView: 1,
        },
        768: {
          direction: "horizontal",
          slidesPerView: 2,
        },
      },
    };

    const slider_img = {
      direction: "vertical",
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      loopedSlides: 8,
      mousewheel: false,
      effect: "fade",
      breakpoints: {
        0: {
          direction: "horizontal",
        },
        768: {
          direction: "vertical",
        },
      },
    };
    let sliderThumbsOtt = new Swiper(
      '[data-swiper="slider-thumbs-ott"] [data-swiper="slider-thumbs-inner-ott"]',
      slider_thumb
    );
    let sliderImagesOtt = new Swiper(
      '[data-swiper="slider-images-ott"] [data-swiper="slider-images-inner-ott"]',
      slider_img
    );

    sliderImagesOtt.controller.control = sliderThumbsOtt;
    sliderThumbsOtt.controller.control = sliderImagesOtt;

    document.addEventListener("theme_scheme_direction", (e) => {
      sliderThumbsOtt.destroy(true, true);
      sliderImagesOtt.destroy(true, true);
      setTimeout(() => {
        sliderThumbsOtt = new Swiper(
          '[data-swiper="slider-thumbs-ott"] [data-swiper="slider-thumbs-inner-ott"]',
          slider_thumb
        );
        sliderImagesOtt = new Swiper(
          '[data-swiper="slider-images-ott"] [data-swiper="slider-images-inner-ott"]',
          slider_img
        );
        sliderImagesOtt.controller.control = sliderThumbsOtt;
        sliderThumbsOtt.controller.control = sliderImagesOtt;
      }, 500);
    });
  }
}
ottThumbSlider();

// ott thumb slider end

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 0 ? "vertical" : "horizontal";
  return direction;
}
function verticleSlider() {
  if (typeof Swiper !== "undefined") {
    const slider_thumb = {
      direction: "vertical",
      spaceBetween: 24,
      slidesPerView: 3,
      loop: true,
      loopedSlides: 8,
      slideToClickedSlide: true,
      navigation: {
        nextEl: ".vertical-slider-next",
        prevEl: ".vertical-slider-prev",
      },
      breakpoints: {
        0: {
          direction: "horizontal",
          slidesPerView: 1,
        },
        768: {
          direction: "vertical",
          slidesPerView: 3,
        },
      },
    };
    const slider_img = {
      direction: "vertical",
      slidesPerView: 1,
      loop: true,
      loopedSlides: 8,
      mousewheel: false,
      effect: "fade",
      breakpoints: {
        0: {
          direction: "horizontal",
        },
        992: {
          direction: "vertical",
        },
      },
    };

    let sliderThumbs = new Swiper(
      '[data-swiper="slider-thumbs"] [data-swiper="slider-thumbs-inner"]',
      slider_thumb
    );

    let sliderImages = new Swiper(
      '[data-swiper="slider-images"] [data-swiper="slider-images-inner"]',
      slider_img
    );

    sliderImages.controller.control = sliderThumbs;
    sliderThumbs.controller.control = sliderImages;

    document.addEventListener("theme_scheme_direction", (e) => {
      sliderThumbs.destroy(true, true);
      sliderImages.destroy(true, true);
      setTimeout(() => {
        sliderThumbs = new Swiper(
          '[data-swiper="slider-thumbs"] [data-swiper="slider-thumbs-inner"]',
          slider_thumb
        );
        sliderImages = new Swiper(
          '[data-swiper="slider-images"] [data-swiper="slider-images-inner"]',
          slider_img
        );
        sliderImages.controller.control = sliderThumbs;
        sliderThumbs.controller.control = sliderImages;
      }, 500);
    });
  }
}

// Call the function to initialize the Swipers
verticleSlider();

//vericle thumb slider end

function productThumbslider() {
  if (typeof Swiper !== "undefined") {
    const slider_thumb = {
      direction: "horizontal",
      spaceBetween: 24,
      slidesPerView: 2,
      loop: true,
      loopedSlides: 8,
      slideToClickedSlide: true,
      autoplay: false,
      navigation: {
        nextEl: ".slider-next",
        prevEl: ".slider-prev",
      },
      breakpoints: {
        0: {
          direction: "horizontal",
          slidesPerView: 2,
        },
        479: {
          direction: "horizontal",
          slidesPerView: 3,
        },
        768: {
          direction: "horizontal",
          slidesPerView: 4,
        },
      },
    };

    const slider_img = {
      direction: "horizontal",
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      loopedSlides: 8,
      mousewheel: false,
      effect: "fade",
    };
  }}
  productThumbslider()

  
var swiper = new Swiper(".swiper.swiper-actors", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1025: {
      slidesPerView: 11,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 11,
      spaceBetween: 1,
    },
  },
});
var swiper = new Swiper(".swiper.swiper-tabs", {
  spaceBetween: 30,
  loop: true,
  // autoplay: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".swiper.swiper-movie-categories-card", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});
if (
  document.querySelectorAll('[data-swiper="gallery-top"]').length &&
  document.querySelectorAll('[data-swiper="gallery-bottom"]').length
) {
  const options = {
    slidesPerView: 5,
    loop: true,
    loopedSlides: 4,
    centeredSlides: true,
    slideToClickedSlide: true,
    touchRatio: 0.2,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      479: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-arrow.swiper-button-next",
      prevEl: ".swiper-arrow.swiper-button-prev",
    },
  };

  let galleryTop = new Swiper('[data-swiper="gallery-top"]', options);

  const options1 = {
    spaceBetween: 32,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 4,
    effect: "fade",
    on: {
      slideChange: function () {
        // Get the currently active slide index in the gallery-bottom Swiper
        var activeSlideIndex = this.activeIndex;

        // Find the active slide element
        var activeSlide = this.slides[activeSlideIndex];
        const mainUUID = generateUUID();
        $(activeSlide).find(".iq-custom-tab").attr("id", mainUUID);
        $(activeSlide).find(".tab-content").attr("id", mainUUID);
        $(activeSlide)
          .find(".iq-custom-tab .nav-link")
          .each(function () {
            const thisId = $(this).attr("id");
            const thisTarget = $(this).attr("data-bs-target");
            const target = $(activeSlide).find(thisTarget);
            const uuid = generateUUID();
            const newtargetID = thisTarget.replace("#", "");
            target.attr("id", newtargetID + "-" + uuid);
            target.attr("aria-labelledby", thisId + "-" + uuid);
            $(this).attr("data-bs-target", "#" + newtargetID + "-" + uuid);
            $(this).attr("id", thisId + "-" + uuid);
            $(this).attr("aria-controls", target.attr("id"));
          });

        $(activeSlide)
          .find(".iq-custom-tab .nav-link")
          .each(function () {
            const tabTrigger = new bootstrap.Tab(this);
            this.addEventListener("click", (event) => {
              event.preventDefault();
              tabTrigger.show();
            });
          });
      },
    },
  };

  let galleryThumbs = new Swiper('[data-swiper="gallery-bottom"]', options1);
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

  document.addEventListener("theme_scheme_direction", (e) => {
    galleryTop.destroy(true, true);
    galleryThumbs.destroy(true, true);
    setTimeout(() => {
      galleryTop = new Swiper('[data-swiper="gallery-top"]', options);
      galleryThumbs = new Swiper('[data-swiper="gallery-bottom"]', options1);
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
    }, 500);
  });
}

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var bannerSlider = document.querySelectorAll('[data-swiper="banner-detail-slider"]');

  if (bannerSlider.length > 0) {
    const options = {
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-banner-button-next",
        prevEl: ".swiper-banner-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        1200: {
          slidesPerView: 1.2,
        },
      },
    };
    let swiper = new Swiper('[data-swiper="banner-detail-slider"]', options);
    document.addEventListener("theme_scheme_direction", (e) => {
      swiper.destroy(true, true);
      setTimeout(() => {
        swiper = new Swiper('[data-swiper="banner-detail-slider"]', options);
      }, 500);
    });
  } else {
    console.error("Banner slider için uygun öğe bulunamadı.");
  }
});



// if (bannerSlider) {
//   const options = {
//     centeredSlides: true,
//     grabCursor: true,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-banner-button-next",
//       prevEl: ".swiper-banner-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1.2,
//       },
//       1200: {
//         slidesPerView: 1.2,
//       },
//     },
//   };
//   let swiper = new Swiper('[data-swiper="banner-detail-slider"]', options);
//   document.addEventListener("theme_scheme_direction", (e) => {
//     swiper.destroy(true, true);
//     setTimeout(() => {
//       swiper = new Swiper('[data-swiper="banner-detail-slider"]', options);
//     }, 500);
//   });
// }else{
//   console.log("Seçili swiper bulunamadı")
// }
