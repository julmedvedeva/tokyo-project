function right_carusel(carusel) {
  var block_width = $(carusel).find('.carousel-block').outerWidth();
  $(carusel).find(".carousel-items").animate({ left: "-" + block_width + "px" }, 700, function () {
    $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
    $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
    $(carusel).find(".carousel-items").css({ "left": "0px" });
  });
}

$(function () {
  auto_right('.carousel:first');
})

function auto_right(carusel) {
  setInterval(function () {
    if (!$(carusel).is('.hover'))
      right_carusel(carusel);
  }, 3000)
}