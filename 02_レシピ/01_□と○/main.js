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

// figure.onclick = function () {
//   figure.classList.toggle("rounded")
// }
//要素.classList.toggle(クラス名)で、クラスをadd,removeができる！

/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★ - いろんなイベント
//内容:クリック以外のイベントで図形を変化させる(どんなイベントでも良い)
/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/

//マウスカーソルが乗った時に丸くなり、離したときに四角に戻るプログラム
// figure.onmouseover = function () {
//   figure.classList.toggle("rounded")
// }
// figure.onmouseout = function () {
//   figure.classList.toggle("rounded")
// }

/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★ - いろんなイベント
//内容:クリック以外のイベントで図形を変化させる(どんなイベントでも良い)
/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/

figure.onclick = function () {
  //classにtriangleがある場合(三角の場合)
  if (figure.classList[1] === "triangle") {
    figure.classList.add("square")
    //この時点ではsquareはclassList[2]にある
  }
  //classにsquareがある場合
  if (figure.classList[1] === "square") {
    //classにroudedがある場合(丸の場合)
    if (figure.classList[2] === "rounded") {
      figure.classList.remove("square")
      figure.classList.add("triangle")
      figure.classList.remove("rounded")
    } else {
      figure.classList.add("rounded")
    }
  }

  if (figure.classList[2] === "square") {
    figure.classList.remove("triangle")
  }
}

//まずは、場合分けとして"squareがある場合を考えた。
//そして、roundedが既にある場合は次は三角形にしたいので、squareとroudedを消去して、triangleを追加した。
//roundedがない場合は、次は丸にしたいので、roundedを追加した。

//三角形にしてから四角形にするのに苦労した。
//まず、triangleがある場合にとりあえずsquareを追加しておく。
//そうすると、figure.classList[1] === "square"は満たさないので、飛ばして、
//最後のif文でtriangleを消去することで、なんとかループを作り出すことができた。

//おそらく、もっと明確でわかりやすい条件分岐があるはず。。。

//そのほかは、三角から四角に戻る時のアニメーションがいまいち。これはおそらくwidthとheightの関係？なのか(四角から丸は変えてないので)
