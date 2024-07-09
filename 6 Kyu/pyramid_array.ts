export function pyramid(n: number) : any[] {
    if (n === 0){
      return [];
    }
    else{
  let myArr: any = []
  let num = 1
  for (let j = 1 ; j <= n; j++){
    let res:any = []
    for (let i = 0; i< j; i++){
      res.push(num)
    }
    myArr.push(res)
  }
  return myArr
  }
  }
  pyramid(6)