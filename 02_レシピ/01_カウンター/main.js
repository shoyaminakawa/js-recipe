const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

//ボタンをクリックしたときの処理を登録
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
