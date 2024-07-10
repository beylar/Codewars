export function twoOldestAges(ages: number[]): number[] {
    const newArr = ages.sort((a, b) => b - a)
    
    const output: number[] = []
    output.push(newArr[0], newArr[1])
    return output.sort((a,b) => a - b)
  }
  
  console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))