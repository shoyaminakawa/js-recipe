const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

//クイズの内容
const quiz = {
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
}

//クイズの画面を表示させる関数
const reloadQuiz = function () {
  //問題文を表示
  quizText.textContent = "Q." + quiz.text
  //画像を表示
  quizImage.src = "./images/" + quiz.image
  //選択ボタンの中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

//choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  //フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  //0番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  //1番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  //2番目の選択肢を選択
  choose(2)
}

//クイズを画面に表示する
reloadQuiz()
