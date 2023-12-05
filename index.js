let a = '';
let b = '';
let sign = '';
let finish = false;

let result = document.querySelector('#result')
const buttons = document.querySelectorAll('.button')


let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let operation = ['+', '-', 'X', '/']

buttons.forEach(item => {
  item.addEventListener('click', (event) => {
    const key = event.currentTarget.innerText
    if (nums.includes(key)) {
      if (b === '' && sign === '') {
        a += key
        result.innerHTML = a
      }
      else {
        b += key
        result.innerHTML = b
      }
    }
    if (operation.includes(key)) {
      sign = key
      console.log(sign)
    }
    if (key === '=') {
      a = calc(a, b, sign)
      b = ''
      sign = ''
      result.innerHTML = a;
      finish = true;
      return
    }
    if (key === 'AC') {
      a = ''
      b = ''
      sign = ''
      result.innerHTML = 0;
      return
    }
  })
})

function calc(a, b, sign) {
  if (a && b && sign === '+') {
    a = (+a) + (+b)
  }
  if (a && b && sign === '-') {
    a = (+a) - (+b)
  }
  if (a && b && sign === 'X') {
    a = (+a) * (+b)
  }
  if (a && b && sign === '/') {
    a = (+a) / (+b)
  }
  return a;
}



























































// const NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const OPERATIONS = ['+', '-', '*', '/', '=']

// window.onload = function () {
//   calculatorField('.calculator')
// }

// function calculatorField(container) {
//   const zaYaica = document.querySelector(container)



//   zaYaica.appendChild(generateInput())
//   generateButtons(NUMBER).forEach((item) => zaYaica.appendChild(item))
//   generateButtons(OPERATIONS).forEach((item) => zaYaica.appendChild(item))

// }

// function generateInput() {
//   const resultInput = document.createElement('input')
//   resultInput.readOnly = true;
//   resultInput.type = 'text'
//   resultInput.id = 'result'
//   return resultInput
// }

// function generateButton(type) {
//   const button = document.createElement('button')
//   button.innerText = type
//   button.onclick = () => appendNumber(type)
//   if(type === '=') {
//     button.onclick = () => result()
//   }
//   return button
// }

// function generateButtons(types) {
//   return types.map((type) => {
//     return generateButton(type)
//   })
// }

// function appendNumber(ch) {
//   const input = document.querySelector('#result')
//   const lastResult = input.value
//   if (OPERATIONS.indexOf(ch) !== -1) {
//     if (OPERATIONS.indexOf(lastResult[lastResult.length - 1]) !== -1) {
//       console.log(lastResult)
//       input.value = lastResult.slice(0, -1) + ch
//     } else {
//       input.value = lastResult + ch
//     }
//   } else {
//     input.value = lastResult + ch
//   }
// }


// function result () {
//   const input = document.querySelector('#result')
//   alert(eval(input.value))
// }

