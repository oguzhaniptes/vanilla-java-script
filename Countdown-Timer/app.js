let time = prompt("Give me minute")
let seconds = time * 60

let counter = document.getElementById("counter")

let startTimer = setInterval(() => {
    if (seconds <= 0) {
        clearInterval(startTimer)
        counter.innerHTML = "Time is over."
    } else {
        seconds--

        const day = Math.floor(seconds / 24 / 3600)
        const hour = Math.floor(seconds / 3600) % 24
        const minute = Math.floor(seconds / 60) % 60
        const _second = Math.floor(seconds % 60)

        counter.innerHTML = `Time: ${day} day / ${hour} hour / ${minute} minute / ${_second} second`
    }
}, 1000)