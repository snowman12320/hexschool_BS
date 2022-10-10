// const toggleMenuBtn = document.querySelector("#toggle-btn");
// const body = document.querySelector("body");
// toggleMenuBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   body.classList.toggle("sidebar-toggled");
// });

//小圖示
function hover_custom(element) {
  element.setAttribute(
    "src",
    `./nbaWeb/1652102106slam-dunk-silhouette-basketball.svg`
  );
}
function unhover_custom(element) {
  element.setAttribute("src", `./nbaWeb/silhouette-basket-01.svg`);
}

//產品圖
$(document).ready(function () {
  $(".card-img").mouseover(function (e) {
    var choose = e.target.dataset.num;
    $("body [data-num=" + choose + "]").addClass("hover_img");
  });
  $(".card-img").mouseout(function (e) {
    var choose = e.target.dataset.num;
    $("body [data-num=" + choose + "]").removeClass("hover_img");
  });
});

//排行圖
$(document).ready(function () {
  $(".card-img-top").mouseover(function (e) {
    var choose = e.target.dataset.num;
    $("body [data-num=" + choose + "]").addClass("hover_img");
  });
  $(".card-img-top").mouseout(function (e) {
    var choose = e.target.dataset.num;
    $("body [data-num=" + choose + "]").removeClass("hover_img");
  });
});


