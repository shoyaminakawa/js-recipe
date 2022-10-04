/***button要素とclickイベント***/
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

//関数を登録
button.onclick = alertMessage

//alertMessageという関数。alertMessage()は関数ではなく返り値(undefined)になるから
//button.onclick = alertMessage()にしてはいけない。

/***input要素とinputイベント***/
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

// const logValue = function (e) {
//   console.log(e)
// }

// inputText.oninput = logValue
// inputDate.oninput = logValue

document.onkeydown = function (e) {
  console.log(e.key)
}

//eはイベントオブジェクトで、イベントハンドラは引数にイベントオブジェクトを受け取れる。
