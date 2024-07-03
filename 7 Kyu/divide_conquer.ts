export function divCon(x: (string | number)[]): number {
    let str: number[] = [];
    let num: number[] = [];
  
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === "string") {
        str.push(Number(x[i]));
      } else {
        num.push(Number(x[i])); 
      }
    }
  
    let sumString = 0;
    let sumNumber = 0;
  
   
    for (let i = 0; i < str.length; i++) {
      sumString += Number(str[i]); 
    }
  
    for (let i = 0; i < num.length; i++) {
      sumNumber += num[i];
    }
  
    return sumNumber - sumString;
  }
  
  console.log(divCon(["1", 2, 5, 6, "4", 9, "2"])); 
  