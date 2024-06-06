// reverse("Reverse this string, please!"), "Reverse siht string, !esaelp"
function reverse(str){
   str = str.split(" ");
   let array = []
   str.map((el) => {
    if(el == "Reverse" || el == "Reversing" || el == "reverse" || el == "reversing" || el == "reversed" || el == "Reversed"){
        array.push(el)
    }
    else{
    let reversed = el.split("").reverse().join("")
    console.log(reversed)
    array.push(reversed)
}
   })
return array.join(" ")
  }
  console.log(reverse("Reverse this string, please!"))