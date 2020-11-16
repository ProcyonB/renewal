$(".burger").on("click", function () {
  $(".nav").toggleClass("nav_active");
  $(".burger").toggleClass("burger-active");
});

$(".menu_link").on("click", function () {
  $(".nav").removeClass("nav_active");
  $(".burger").removeClass("burger-active");
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
$("#with_slim").on("click", function () {
  $("#slim-price").html(`1400 &#8381;`);
  $("#slim_list").html(`<ul>
  <li>меню, рассчитанное под твои показатели</li>
  <li>индивидуальное сопровождение</li>
  <li>Тренировки от меня, после которых не будут подкашиваться ноги, только бодрость и заряд энергией на весь день</li>
  <li>минус 5-10 кг</li>
  <li>лайфхаки, секреты, советы по уходу и список ресторанов, где можно вкусно перекусить</li>
  <li>продолжительность - 1 месяц</li>
</ul>`);
});
$("#without_slim").on("click", function () {
  $("#slim-price").html(`900 &#8381;`);
  $("#slim_list").html(`<ul>
  <li>меню, рассчитанное под твои показатели</li>
  <li>похудение от -3кг</li>
  <li>Самостоятельное похудение</li>
</ul>`);
});
