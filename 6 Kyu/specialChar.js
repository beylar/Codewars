function insertCharAfterWords(sentence, char) {
    let arr = sentence.split(" ");

    for (let i = 0; i < arr.length; i++) {
      (i + 1) % 3 === 0 ? (arr[i] += char) : arr[i];
    }
    return arr.join(" ");
  }
  console.log(
    insertCharAfterWords(
      "I love JavaScript programming and sitting infront of the laptop",
      "#"
    )
  );