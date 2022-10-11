const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

//クイズの内容
const quiz = {
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
}

//quizがもつ選択肢の数
const numberOfChoices = quiz.choices.length

//quizを画面に表示する関数(構成も兼ねている)
const createQuiz = function () {
  //問題文を表示
  quizText.textContent = "Q. " + quiz.text
  //画像を表示
  quizImage.src = "./images/" + quiz.image
  //選択肢(ボタン)の中身を表示
  for (let i = 0; i < numberOfChoices; i++) {
    let choice = document.createElement("button")
    choice.id = `choice-${i + 1}`
    choice.textContent = quiz.choices[i].text
    choicesContainer.append(choice)
  }
}

//choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  //フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

//createQuiz関数を実行して、クイズを画面に表示する
createQuiz()

//
for (let i = 0; i < numberOfChoices; i++) {
  let choiceId = document.getElementById(`choice-${i + 1}`)
  choiceId.onclick = function () {
    choose(i)
  }
}
