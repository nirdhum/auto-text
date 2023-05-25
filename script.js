const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const inputText = document.getElementById('inputText')
let text = 'Nirdhum Narayan'
let idx = 1
let speed = 500 / speedElement.value

writeText()

function writeText() {
    textElement.innerHTML = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

inputText.addEventListener('input', function (e) {
    e.preventDefault()

    if (inputText.value == '') {
        text = 'Nirdhum Narayan'
    } else {
        text = inputText.value
    }
})

speedElement.addEventListener('input', (e) => speed = 500 / e.target.value)