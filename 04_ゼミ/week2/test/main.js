const toMorseCode = function (str) {
  let result = str.replace("0", "・")
  while (result != str) {
    str = str.replace("0", "・")
    result = str.replace("0", "・")
  }
}

toMorseCode("000111000")
