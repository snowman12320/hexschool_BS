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

//產品圖 以CSS取代 避免顫抖
// $(document).ready(function () {
//   $(".card-img").hover(function (e) {
//     var choose = e.target.dataset.num;
//     $("body [data-num=" + choose + "]").toggleClass("hover_img");
//   });
// .mouseenter() + .mouseleave() 也可  /.mouseout() .mousemove() 應該是移動紀錄點
// $(".card-img").mouseleave(function (e) {
//   var choose = e.target.dataset.num;
//   $("body [data-num=" + choose + "]").removeClass("hover_img");
// });
// });

//排行圖  以CSS取代 避免顫抖
// $(document).ready(function () {
//   $(".card-img-top").mouseenter(function (e) {
//     var choose = e.target.dataset.num;
//     $("body [data-num=" + choose + "]").addClass("hover_img");
//   });
//   $(".card-img-top").mouseleave(function (e) {
//     var choose = e.target.dataset.num;
//     $("body [data-num=" + choose + "]").removeClass("hover_img");
//   });
// });

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
