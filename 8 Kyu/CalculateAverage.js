function findAverage(array) {
    let sum = 0;
    let avg = 0;
    if (array.length !== 0){
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    avg = sum/ array.length
    return avg;
}
else{
    return 0;
}
  }


console.log(findAverage([21,23,54]))
console.log(findAverage([]))