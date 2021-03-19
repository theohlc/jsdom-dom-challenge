
var intervalID = window.setInterval(incrementTimer, 1000);

p       = document.getElementById('pause')
plus    = document.getElementById('plus')
minus   = document.getElementById('minus')
heart   = document.getElementById('heart')
let paused = false

p.addEventListener("click", function() {
    if (paused) {
        intervalID = window.setInterval(incrementTimer, 1000);
        paused = false
    } else {
        window.clearInterval(intervalID)
        paused = true
    }
})

plus.addEventListener("click", function() {
    counter = document.getElementById('counter')
    counter.innerHTML = parseInt(counter.innerHTML) + 1
})

minus.addEventListener("click", function() {
    counter = document.getElementById('counter')
    counter.innerHTML = parseInt(counter.innerHTML) - 1
})

heart.addEventListener("click", function() {
    let counter = document.getElementById('counter')
    let count = parseInt(counter.innerHTML)
    let times = 1

    ul = document.getElementsByClassName('likes')[0]
    li = document.createElement('li')
    li.innerHTML = `${count} has been liked ${times} times`
    ul.appendChild(li)
})

function incrementTimer() {
    counter = document.getElementById('counter')
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}