const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  //countを更新
  count += 1
  //countを秒単位にして表示
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    //start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

//Idはタイマーの識別子になる。setInterval()を止めるのは、clearInterval()

/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★★ - わずかなずれ
//内容:このストップウォッチは、わずかに正確ではない。その理由を説明せよ。
/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/
//setIntervalの時間は「前の実行が終わってから次の実行が始まるまでに、最低限確保される待ち時間」
//実行同士の間隔は関数自体の実行時間が足されて、必ずセットした時間を上回ることになるから。

/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★★★ - なぞのずれ
//内容:ストップウォッチのcountUp関数を以下のように書いたが、うまくいかない。
// const countUp = function () {
//   count += 0.01
//   display.textContent = count
// }
//これは浮動小数点数が必ずしも正確ではないからである。浮動小数点数の誤差について調べよ。
/*ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/
//コンピューター自体は、１０進数の0.01を２進数として扱う。0.01を完全に2進数で表せないため、計算に誤差が生じてしまう。
