const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuiz = document.getElementById("next-quiz")
let num = 0

//クイズの内容
const quiz = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
      {
        text: "シリウス",
        feedback: "残念！シリウスは、おおいぬ座の星だよ！",
      },
    ],
  },
  {
    text: "このお寿司のネタはなんでしょう",
    image: "engawa.jpg",
    choices: [
      {
        text: "サーモン",
        feedback: "残念！",
      },
      {
        text: "えんがわ",
        feedback: "正解！",
      },
      {
        text: "いか",
        feedback: "残念！",
      },
    ],
  },
]

//クイズの画面を表示させる関数
const reloadQuiz = function (n) {
  //問題文を表示
  quizText.textContent = "Q." + quiz[n].text
  //画像を表示
  quizImage.src = "./images/" + quiz[n].image
  //選択ボタンの中身を表示
  choice1.textContent = quiz[n].choices[0].text
  choice2.textContent = quiz[n].choices[1].text
  choice3.textContent = quiz[n].choices[2].text
}

//choiceNumber番目の選択肢を選択
const choose = function (choiceNumber, n) {
  //フィードバックを表示
  feedback.textContent = quiz[n].choices[choiceNumber].feedback
}

choice1.onclick = function () {
  //0番目の選択肢を選択
  choose(0, num)
}
choice2.onclick = function () {
  //1番目の選択肢を選択
  choose(1, num)
}
choice3.onclick = function () {
  //2番目の選択肢を選択
  choose(2, num)
}

//次の問題へボタンが押されたら、numに1加える（numは初期値は0)
nextQuiz.onclick = function () {
  feedback.textContent = ""
  num++
  reloadQuiz(num)
}

//クイズを画面に表示する
reloadQuiz(0)
