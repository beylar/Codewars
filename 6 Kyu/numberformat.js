var numberFormat = function (number) {
    let arr = number.toString().split('');
    let isNegative = arr[0] === '-';
    if (isNegative) {
        arr = arr.slice(1);
    }
    for (let i = arr.length - 3; i > 0; i -= 3) {
        arr.splice(i, 0, ',');
    }
    if (isNegative) {
        arr.unshift('-');
    }
    return arr.join("");
  };
  console.log(numberFormat(-678910000))

  