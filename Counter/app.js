const decrease = document.getElementById('down')
const reset = document.getElementById('reset')
const increase = document.getElementById('up')

const value = document.querySelector('#value')

let mineNumber = 0

decrease.addEventListener('click', () => {
    mineNumber -= 1
    value.textContent = mineNumber
})
reset.addEventListener('click', () => {
    mineNumber = 0
    value.textContent = mineNumber
})
increase.addEventListener('click', () => {
    mineNumber += 1
    value.textContent = mineNumber
})