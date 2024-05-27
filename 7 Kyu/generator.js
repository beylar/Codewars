function* nextElementGenerator(array) {
    if(array.length > 1){
    for(let value of array){
        yield(value);
    }}
    else {
        yield(Number(array))
    }
  }
  
  let arr = nextElementGenerator([2]);
  console.log(arr.next().value)
  console.log(arr.next().value)
  console.log(arr.next().value)
  console.log(arr.next().value)
  console.log(arr.next().value)
  console.log(arr.next().value)
  