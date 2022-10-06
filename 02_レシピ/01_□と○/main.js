const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

// circleButton.onclick = function () {
//   //figureにroundedクラスを追加する
//   figure.classList.add("rounded")
// }
// squareButton.onclick = function () {
//   //figureからroundedクラスを削除する
//   figure.classList.remove("rounded")
// }

figure.onclick = function () {
  figure.classList.toggle("rounded")
}
