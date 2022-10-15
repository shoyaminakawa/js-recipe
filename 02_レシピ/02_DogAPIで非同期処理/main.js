const imageElement = document.getElementById("dog-image")

//*****発展★ - The Cat API *****//
/*
// 指定したサーバーにデータを取りに行く
fetch(" https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    console.log(data[0])
    imageElement.src = data[0].url // 画像を表示する
  })
*/

//***** 発展★★ - Breeds List(未完成) *****//
let typeOfDogs = "Akita"

const dogsSelect = document.getElementById("dogs-select")
dogsSelect.onchange = function () {
  console.log(dogsSelect.value)
  typeOfDogs = dogsSelect.value
}

fetch(`https://dog.ceo/api/breed/${typeOfDogs}/image/random`)
  .then((res) => {
    console.log(res)
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    console.log(data)
    imageElement.src = data.message // 画像を表示する
  })
//*****発展★ - 更新ボタン *****//
const reloadButton = document.getElementById("reload-button")

reloadButton.onclick = function () {
  window.location.reload()
}
