function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    let dog: number = 0;
    let cat : number = 0;
    if(humanYears === 1){
      return [humanYears, dog+ 9, cat+ 9]
    }
      if(humanYears === 2){
        return [humanYears, dog+24, cat+24 ]
      }
      if(humanYears > 2){
        return [humanYears, dog+24+((humanYears-2)* 4), cat+24+((humanYears-2) * 5)  ]
      }
    else{
    return [0,0,0]
    }
  }
  
  console.log(humanYearsCatYearsDogYears(10))
  