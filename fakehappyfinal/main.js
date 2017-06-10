
 $(window).scroll(function() {
   $("div#vert_counter").text("px:" +$(window).scrollTop());
});
$(window).scroll(function() {
  $("div.vert_parallax").css({
      "top": ($(window).scrollTop()*1) + "px"
  }).text("Regular:"+ $(window).scrollTop());
});

$(window).scroll(function() {
  $("#parallax_wrap div:nth-child(3)").css({
      "top": ($(window).scrollTop()*2) + "px"
  }).text("Fast:"+ $(window).scrollTop());
});

$(window).scroll(function() {
  $("#parallax_wrap div:nth-child(2)").css({
      "top": ($(window).scrollTop()*0.5) + "px"
  }).text("Slow:"+ $(window).scrollTop());
});
