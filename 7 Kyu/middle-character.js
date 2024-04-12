function getMiddle(word) {
    let middleIndex = Math.floor(word.length / 2);
    return word.length % 2 === 0
        ? word.slice(middleIndex - 1, middleIndex + 1)
        : word.charAt(middleIndex);
}
console.log(getMiddle("test"));