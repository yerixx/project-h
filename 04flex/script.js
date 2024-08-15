window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  const nav = document.querySelector(".header_navigation");

  if (scrollY > 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

// Slick Slider
$(document).ready(function () {
  $(".myslider").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//ScrollTo
$(".gototop .gnb a").click(function () {
  $.scrollTo(this.hash || 0, 800);
});
