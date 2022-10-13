const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

const inputElement2 = document.getElementById("input-todo2")
const container2 = document.getElementById("cards-container2")
const addButton2 = document.getElementById("add-button2")

const inputElement3 = document.getElementById("input-todo3")
const container3 = document.getElementById("cards-container3")
const addButton3 = document.getElementById("add-button3")

//追加ボタンを押した時の処理を登録
addButton.onclick = function () {
  //カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  //入力欄を空にする
  inputElement.value = ""
}

//追加ボタン2
addButton2.onclick = function () {
  //カードを作成する
  const card = createCard(inputElement2.value)
  container2.append(card)

  //入力欄を空にする
  inputElement2.value = ""
}

//追加ボタン3
addButton3.onclick = function () {
  //カードを作成する
  const card = createCard(inputElement3.value)
  container3.append(card)

  //入力欄を空にする
  inputElement3.value = ""
}

/***** 発展★ - エンターキー******/
//入力欄でエンターキーを押した時の処理を登録
inputElement.onkeydown = function (e) {
  //確認できたらkeyCodeにキーコードを代入
  if (e) {
    if (e.keyCode === 13) {
      //カードを作成する
      const card = createCard(inputElement.value)
      container.append(card)

      //入力欄を空にする
      inputElement.value = ""
    }
  }
}
//共通の処理：テキストからカードを作成する
const createCard = function (text) {
  //カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  //テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  //削除ボタンを押した時の処理を登録
  deleteButton.onclick = function () {
    //カードを削除する
    card.remove()
  }

  card.append(deleteButton)

  return card
}
