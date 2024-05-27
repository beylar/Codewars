// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//increments can't work with for in....
function whoLikes(array){
    let count= 0;
    for(let i=0; i<array.length;i++ ){
        if(array.length == 1){
            return `${array[i]} likes this`
        }
        if(array.length == 2){
            return `${array[i]} and ${array[i+1]} like this`
        }
        if(array.length == 3){
            return `${array[i]}, ${array[i+1]} and ${array[i+2]} like this`
        }
        if(array.length >= 4 ){
            count = count + array.length;
            count = count - 2;
            return `${array[i]}, ${array[i+1]} and ${count} others like this`
        }
    }
    return `no one like this`

}

console.log(whoLikes([]))
console.log(whoLikes(["Peter"]))
console.log(whoLikes(["Jacob", "Alex"]))
console.log(whoLikes(["Jacob", "Alex", "Peter"]))
console.log(whoLikes(["Jacob", "Alex", "Peter","nice","Jacob", "Alex"]))