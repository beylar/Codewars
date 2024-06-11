// reverse("Reverse this string, please!"), "Reverse siht string, !esaelp"
function reverse(str) {
    let words = str.trim().split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        if (i % 2 !== 0) {
            words[i] = words[i].split("").reverse().join("");
        }
    }
    return words.join(" ");
}
  console.log(reverse("Reverse this string, please!"))