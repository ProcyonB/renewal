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

new WOW().init();

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
  $("#slim-price").html(`899 &#8381;`);
  $("#slim_list").html(`<ul>
  <li>меню, рассчитанное под твои показатели</li>
  <li>похудение от -3кг</li>
  <li>Самостоятельное похудение</li>
</ul>`);
});

$("#with_weight").on("click", function () {
  $("#weight-price").html(`1400 &#8381;`);
  $("#weight_list").html(`<ul>
  <li>меню, рассчитанное под твои показатели</li>
  <li>индивидуальное сопровождение</li>
  <li>Тренировки от меня, после которых не будут подкашиваться ноги, только бодрость и заряд энергией на весь день</li>
  <li>плюс 4-6 кг</li>
  <li>лайфхаки, секреты, советы по уходу и список ресторанов, где можно вкусно перекусить</li>
  <li>продолжительность - 1 месяц</li>
</ul>`);
});
$("#without_weight").on("click", function () {
  $("#weight-price").html(`899 &#8381;`);
  $("#weight_list").html(`<ul>
  <li>меню, рассчитанное под твои показатели</li>
  <li>набор веса от 2 кг</li>
  <li>Самостоятельный набор массы</li>
</ul>`);
});

$("#with_training").on("click", function () {
  $("#training-price").html(`1799 &#8381;`);
  $("#training_list").html(`<ul>
  <li>Жиросжигающая-интенсивная</li>
  <li>На верхнюю часть тела</li>
  <li>На нижнюю часть тела</li>
  <li>Растяжка</li>
  <li>10.000 шагов дома</li>
</ul>
<p class="about_training">все тренировки входят в программы с сопровождением </p>`);
});
$("#without_training").on("click", function () {
  $("#training-price").html(`399 &#8381;`);
  $(
    "#training_list"
  ).html(`<p class="about_training">одна тренировка из пакета: Жиросжигающая-интенсивная, На верхнюю часть тела, На нижнюю часть тела,
  Растяжка, 10.000 шагов дома </p>`);
});

$(".for_connect").on("click", function () {
  $(".popup").css({ left: 0 });
});
$(".close").on("click", function () {
  $(".popup").css({ left: "100%" });
});
