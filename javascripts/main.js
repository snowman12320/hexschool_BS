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

//最新產品圖
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

//排名圖示
function hover_rank(element) {
  element.setAttribute(
    "src",
    `../nbaWeb/olivier-collet-H7cIqigZOBo-unsplash.jpg`
  );
//   element.setAttribute("class", `of-cover`);
}
function unhover_rank(element) {
  element.setAttribute("src", `../nbaWeb/PNG-images-NBA-Players-41png.png`);
  element.removeAttribute("class", `of-cover`);
}

// of-cover op-center
