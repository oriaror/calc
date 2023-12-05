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
  return a
}