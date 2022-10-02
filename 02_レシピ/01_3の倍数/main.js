//TRY

// 引数 number を受け取る関数
const genkiFunction = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      //nを3で割った余りが0のとき
      console.log(`${n}!!!!!!!`) //コンソール出力
    } else {
      //それ以外のとき
      console.log(n) //コンソール出力
    }
  }
}

/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★ - FizzBuzz
//内容: 3 の倍数なら 「Fizz」 、 5 の倍数なら 「Buzz」,
//     15 の倍数なら 「FizzBuzz」と出力
/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
//引数 number を受け取る関数
const fizzbuzzFunction = function (number) {
  // n を 1 から, number まで、 値を 1 ずつ増やしながら for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      //nが15の倍数のとき
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      //nが3の倍数のとき
      console.log("Fizz")
    } else if (n % 5 === 0) {
      //nが5の倍数のとき
      console.log("Buzz")
    } else {
      //上記のどの条件にも当てはまらないとき
      console.log(n)
    }
  }
}

//15の倍数のときを条件のはじめにもってこないと上手く動作しない(15の倍数は3の倍数でもあるし、5の倍数でもあるため)。

/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★★ - 3が大好き
//内容: 文字の中に3が含まれる数字のとき元気になる
/*ーーーーーーーーーーーーーーーーーーーーーーーー*/

const genki3Function = function (number) {
  for (let n = 0; n <= number; n++) {
    let nStr = `${n}` //数字であるnを文字列にしてnStrに代入
    if (nStr.match(/3/)) {
      //nStrが"3"を含むとき
      console.log(`${n}!!!!!!!`) //コンソール出力(元気に)
    } else {
      //上記以外の条件のとき
      console.log(n)
    }
  }
}

//nを文字列として考えることで, 文字列内に"3"が含まれているときを条件として考えられるようにした。
//数字のままでも数字列内に"3"があるときを考えられるのかもしれないが、調べられなかった。

/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
//発展★★★ - 元気な秒針
//内容: setIntervalを使って1秒ごとにカウントを増やし、
//      3の倍数の時だけ元気にコンソールに出力
/*ーーーーーーーーーーーーーーーーーーーーーーーー*/
//プログラム(1):引数に数字を入れて実行し、任意の値まで１秒ごとに３の倍数をチェックする
//プログラム(2):引数はなにも入れずに実行し、ページの開いている限り無限に３の倍数をチェックする

//引数numberを受け取る関数
const secondHandFunction = function (number) {
  //
  let count = 1 //変数countに初期値1を代入

  /***setInterval(関数、間隔(ms))***/

  //setIntervalでfunction内の処理を1000(ms)ごとに実行,
  //setIntervalの返り値をidに代入(clearInterval()で使うため)
  let id = setInterval(function () {
    if (count % 3 === 0) {
      //nを3で割った余りが0のとき
      console.log(`${count}!!!!!!!`) //コンソール出力
    } else {
      //それ以外のとき
      console.log(count) //コンソール出力
    }

    //number引数が渡された場合
    if (number !== null) {
      if (count >= number) {
        //countの値がnumberの値以上のとき
        clearInterval(id) //タイマーを止める
      } else {
        count++ //countに1加える
      }
    } else {
      //number引数が渡されなかった場合
      count++ //countに1加える
    }
  }, 1000)
}

//setInterval()での関数処理の繰り返し回数のcountと前回のプログラムのnを統一して考えた。
//setInterval()の返り値を使って、clearInterval()を実行できる。
//secondHandFunction()の引数numberが渡される場合とnumberが渡されない場合を
//(続き)考えることで、プログラム(1)と(2)を同時に実現するプログラムにできた。
//number引数有無の条件分岐で count++が重複してしまっているのを解消できないか？
