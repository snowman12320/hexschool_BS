// active
// 導覽列的
$(document).ready(function () {
  $(".nav-link").click(function () {
    $(this).toggleClass("active");
  });
});
// 產品側欄的
$(document).ready(function () {
  $(".aside a").click(function () {
    $(this).toggleClass("active");
  });
});
// 故事分頁的
$(document).ready(function () {
  $(".pagination a").click(function () {
    $(this).toggleClass("active");
  });
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
