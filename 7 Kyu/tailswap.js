function tailSwap(arr) {
    const [st1, st2] = arr
    const [a1, b1] = st1.split(":")
    const [a2, b2] = st2.split(":")
    return [`${a1}:${b2}`, `${a2}:${b1}`]
  }

  console.log(tailSwap(['abc: 1562', 'ajf: 2749']))