"use strict"

const logName = (name) => {
  console.log(`Hello, ${name}!`)
}

const nameA = 'Alpha'
const nameB = 'Betty'

logName(nameA)
logName(nameB)

//.........................................

const checkAge = function (age) {
  if (age >= 18) {
    console.log('You are old enough')
  } else if (age < 18 && age >= 0) {
    console.log('You are still young')
  } else {
    console.log('You are not born yet')
  }
}

checkAge(10) // You are still young
checkAge(25) // You are old enough
checkAge(-2) // You are not born yet


//.........................................

const addMarks = (text, mark, times) => {
  let newText = text

  for (let i = 0; i <= times; i++) {
    newText += mark // too get total mark, calculate from times
  }

  console.log(newText);
}

addMarks('Hello', '!', 1) // Hello!
addMarks('Hello', '!', 3) // Hello!!!
addMarks('How are you', '?', 1) // How are you?
addMarks('How are you', '?', 2) // How are you??

//.........................................


const showNameWithAge = (name = 'Unknown', age = 0) => {
  const nameWithAge = `${name} is ${age} year(s) old`

  return nameWithAge // return the value to be used later
}

const alpha = showNameWithAge('Alpha', 11)
const betty = showNameWithAge('Betty', 42)
const gamma = showNameWithAge('Gamma', 30)

console.log(alpha)
console.log(betty)
console.log(gamma)




function add(num1, num2) {
  return num1 + num2
}

function substract(num1, num2) {
  return num1 - num2
}

const divide = (num1, num2) => {
  return num1 / num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const addition = add(50, 20)
const substraction = substract(30, 15)
const dividation = divide(100, 20)
const multiplication = multiply(5, 2)
const totalAll = addition + substraction + dividation + multiplication

console.log(addition);
console.log(substraction);
console.log(dividation);
console.log(multiplication);
console.log(totalAll);


//.........................................

function reverseWord(word) {

  let counter = ''

  for (let i = word.length - 1; i >= 0; i--) {
    counter += word[i]
  }
  return counter


}
console.log(reverseWord('ayn NAHILIP apul nagnaj ,9102 lirpA 71'));


const pyramid = (num) => {

  for (let i = 0; i <= num; i++) {
    let count = ''
    for (let j = num; j >= i; j--) {
      count += ' '
    }
    for (let k = 0; k <= i * 2; k++) {
      count += k
    }
    console.log(count)
  }

}
pyramid(3)


let convertion = (clock) => {
  let minute = Math.floor(clock / 60)
  let second = clock % 60
  return `${minute} : ${second}`

}
console.log(convertion(112))