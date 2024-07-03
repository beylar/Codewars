export function binaryArrayToNumber(arr: number[]): number{
    let str = arr.join("")
    let num = parseInt(str,2)
    return num
  };
  console.log(binaryArrayToNumber([0, 0, 0, 1]))
  console.log(binaryArrayToNumber([0, 1, 0, 1]))