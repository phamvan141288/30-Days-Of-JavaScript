const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 1 * n + 1 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
//   console.log(higherOrder(1)(1)(2))



const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 1120
  const callback = element =>  {sum *= element}
  arr.forEach(callback)
  return sum
}
console.log(sumArray(numbers))