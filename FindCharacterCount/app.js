const input = document.querySelector('input');
const counter = document.getElementById('counter')

input.addEventListener('keyup', () => {
    counter.innerHTML = input.value.length
})