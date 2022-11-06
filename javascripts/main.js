// active
// 導覽列的
$(".navbar-nav").on("click", "a", function () {
  $(this)
    .addClass("active")
    //   父層的
    .parent()
    //   同層的
    .siblings()
    //   子層的
    .find("a")
    .removeClass("active");
});
// 產品側欄的
$(".aside").on("click", "a", function () {
  $(this)
    .addClass("active")
    //   父層的
    .parent()
    //   同層的
    .siblings()
    //   子層的
    .find("a")
    .removeClass("active");
});
// 故事分頁的
$(".pagination").on("click", "a", function () {
  $(this)
    .addClass("active")
    //   同層的
    .siblings("a")
    .removeClass("active");
});

// visited
// 導覽列的
$(".navbar-nav").on("click", "a", function () {
  $(this).addClass("visited");
});

//導覽陰影
function showNavshadow() {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("nav_shadow");
  } else {
    $(".navbar").removeClass("nav_shadow");
  }
}
$(window).scroll(showNavshadow);

// call to action
function showArrow() {
  if ($(this).scrollTop() > 100) {
    $(".banner_arrow").hide();
  } else {
    $(".banner_arrow").show();
  }
}
$(window).scroll(showArrow);

//小圖示
function hover_custom(element) {
  element.setAttribute(
    "src",
    `./nbaWeb/1652102106slam-dunk-silhouette-basketball.svg`
  );
}
function unhover_custom(element) {
  element.setAttribute("src", `./nbaWeb/silhouette-basket-05.svg`);
}

// JS啟用提示框
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//註冊驗證
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//視差滾動顯示
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos, windowHeight);//捲動位置 和 視窗高度 互相都會變

    // animated_left
    $(".animated_left").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight / 1.2 + scrollPos >= thisPos) {
        $(this).addClass("fadeIn_left");
      }
    });
    //animated_down
    $(".animated_down").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight / 1.5 + scrollPos >= thisPos) {
        $(this).addClass("fadeIn_down");
      }
    });

    // bg scroll
    // $("#profiles").css("background-position-y", -(scrollPos / 2) + "px");
    // $("#header-ele").css("transform", "translateY( " + scrollPos / 2 + "px )");
  });
});
