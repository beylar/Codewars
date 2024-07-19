function createPhoneNumber(numbers: number[]): string {
    let format = "(xxx) xxx-xxxx"
    numbers.forEach((el) => {
      format = format.replace("x", el.toString())})
    return format;
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))