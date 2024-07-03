export function sumDigits(n: number): number {
    let num = Math.abs(n)
    let str = num.toString()
    let sum = 0;
     for (let i = 0; i < str.length; i++) {
          const digit = Number(str[i]);
          sum += Math.abs(digit);
      }
    return sum
  }

  sumDigits(11)
  sumDigits(-32)
  //sumDigits("yoo"): will return an error as the specified input is a string