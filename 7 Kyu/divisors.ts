export function divisors(n: number) {
    const arr: number[] = []
    for(let i = 0; i< 500000; i++){
      if(n % i === 0){
        arr.push(i)
      }
  }
    return arr.length
  }

  divisors(6)