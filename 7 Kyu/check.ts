export function checkExam(array1: string[], array2: string[]): number {
    let result : number = 0
    for(let i = 0; i< array1.length; i++){
      if(array1[i] === array2[i]){
        result += 4
      }
      else if(array2[i] !== ""){
       if (array1[i] !== array2[i]){
        result -= 1;
      }
      }
      else{
        result += 0
      }
  }
  return result >= 0 ? result : 0
  }

  checkExam(["a","b", "d"], ["a","c",""])