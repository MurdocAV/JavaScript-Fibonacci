/* 
  One parameter:
  x --> (A greater value than the last fibonacci number)
*/

/* 
  TODO: 
  1. Input is a single number: x.
  2. Then calculate fiboncacci numbers up to the value of x.
  3. Store and return the numbers as a string.
*/

// Function Returns fibonacci number unitl the given parameter x
function fiboncacciUpTo (x) {
  let sequence = [1,1]
  let sum = sequence.slice(-2).reduce((total, num) => {
    return total + num
  })
  
  while (sum < x) {
    sequence.push(sum)
    sum = sequence.slice(-2).reduce((total, num) => {
        return total + num
    })
  }
  return '"' + sequence.toString() + '".'
}

// // Console.log testing output
// console.log("x = 6:   -->  " + fiboncacciUpTo(6))
// console.log("x = 24:  -->  " + fiboncacciUpTo(24))
// console.log("x = 100: -->  " + fiboncacciUpTo(100))
// console.log("x = -1:  -->  " + fiboncacciUpTo(-1))
