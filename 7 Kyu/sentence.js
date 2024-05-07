function makesTheSentence(characterArray, sentenceString) {

    //arr = arr.split(/["\s,.?!"]+/).sort()
    let arr = sentenceString.split("").sort().filter((el) => el !== " ")
    characterArray = characterArray.sort()
    console.log(characterArray)
    console.log(arr)

    let diff = 0;
    for (let i = 0; i < characterArray.length; i++) {
        if (characterArray[i] !== arr[i]) {
            diff++;
        }

    }
    if (diff == 0) {
        return true
    }
    else {
        return false
    }

}

console.log(makesTheSentence(["I", 'a', 'm', 't', 'h', 'e', 'r', 'e'], "I am there"))
console.log(makesTheSentence(['S', 'h', 'e', 'a', 'd', 'f', '.'], "She adds."))