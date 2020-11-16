$(".burger").on("click", function () {
  $(".nav").toggleClass("nav_active");
  $(".burger").toggleClass("burger-active");
});

$(".slider").slick({
  // dots: true,
  cssEase: "ease",
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".slider-comments").slick({
  cssEase: "ease",
  swipeToSlide: true,
});
// new WOW().init();
