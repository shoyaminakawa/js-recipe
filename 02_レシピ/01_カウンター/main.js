const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

//+1ボタンをクリックしたときの処理を登録
plusButton.onclick = function () {
  //ここにクリック後の処理を書く
  //countを更新
  count += 1
  //count を表示
  display.textContent = count
}

/***学んだこと ***/
//idをもとにした要素の取得は、document.getElementById("id名")で実現する
//Javascriptからブラウザにアクセスするときは、DOMという仕組みがあり、
//DOMを介して、イベント発生時にイベントハンドラが実行される。
//element.textContentのように、要素を持つプロパティ（属性）を書き換えるっことで、画面に反映できる

/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★ - 便利なボタン
//内容: カウントを１つ増やすボタンに加えて、１つ減らすボタン、２倍にするボタンを追加する
/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
const minusButton = document.getElementById("minus-button")
const doubleButton = document.getElementById("double-button")

//-1ボタンをクリックしたときの処理
minusButton.onclick = function () {
  //countを更新
  count -= 1
  //countを表示
  display.textContent = count
}

//×2ボタンをクリックしたときの処理
doubleButton.onclick = function () {
  //countを更新
  count *= 2
  //countを表示
  display.textContent = count
}

/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★★★ - 電卓
//内容: 電卓をつくってみる(どのようなインターフェースでもよい)
/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
const calDisplay = document.getElementById("cal-display")
const addButton = document.getElementById("add-button")
const subButton = document.getElementById("sub-button")
const mulButton = document.getElementById("mul-button")
const divButton = document.getElementById("div-button")
const numButtons = document.getElementsByClassName("num")
const cButton = document.getElementById("c-button")
const resultButton = document.getElementById("result-button")
const inverseButton = document.getElementById("inverse-button")
const persentButton = document.getElementById("percent-button")
const pointButton = document.getElementById("point-button")

let calcStr = ""
let result = 0

//Cボタン
cButton.onclick = function () {
  calcStr = ""
  calDisplay.textContent = "0(計算式がここに表示されます)"
}

//+/-ボタン(実装できていない)
inverseButton.onclick = function () {
  for (let i = calcStr.length - 1; i >= 0; i--) {
    if (calcStr[i] === "-") {
      console.log(calcStr[i])
      calcStr[i] = calcStr[i].replace("-", "+")
      console.log(calcStr[i])
      break
    } else if (calcStr[i] === "+") {
      calcStr[i] = "-"
      break
    }
  }
}

//%ボタン
persentButton.onclick = function () {
  calcStr += "%"
  calDisplay.textContent = calcStr
}

//数字入力
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].onclick = function (e) {
    calcStr += String(e.target.textContent)
    calDisplay.textContent = calcStr
  }
}
//足し算
addButton.onclick = function () {
  calcStr += "+"
  calDisplay.textContent = calcStr
}
//引き算
subButton.onclick = function () {
  calcStr += "-"
  calDisplay.textContent = calcStr
}
//掛け算
mulButton.onclick = function () {
  calcStr += "*"
  calDisplay.textContent = calcStr
}
//割り算
divButton.onclick = function () {
  calcStr += "/"
  calDisplay.textContent = calcStr
}

//=ボタン
resultButton.onclick = function () {
  result = Function("return (" + calcStr + ")")()
  calcStr = String(result)
  calDisplay.textContent = calcStr
}

//.ボタン
pointButton.onclick = function () {
  calcStr += "."
  calDisplay.textContent = calcStr
}

//デザイン、配置はiPhoneの標準の計算機の真似をした
//+/-ボタンを実装できてないので、実装できるようにしたい
//例外処理(計算できないような文字列を作らないように)を実装しなければいけない
