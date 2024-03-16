const nav = $(".nav");
const mainListDiv = document.getElementById("mainListDiv");
let a = () => {
  if (mainListDiv.classList[1] !== "affix") {
    if ($(document).scrollTop() > 50) {
      $(".nav").addClass("affix");
    } else {
      $(".nav").removeClass("affix");
    }
  }
}

$(window).scroll(function () {
  a();
});

$(".navTrigger").click(function () {
  if (nav[0].classList[1] !== "affix") {
    $(".nav").toggleClass("affix");
  }
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$(".navlink").click(function () {
  $("#mainListDiv").toggleClass("show_list");
});


a();