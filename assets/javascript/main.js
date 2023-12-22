const rgbGuess = document.querySelector('#rgbVal')
const colorBoxes = document.querySelectorAll('.boxes')
const reset = document.querySelector('#reset')

const colorRandomizer = () => {
    colorBoxes.forEach(box => {
        let red = Math.floor((Math.random()) * 256 )+ 1
        let green = Math.floor((Math.random()) * 256 )+ 1
        let blue = Math.floor((Math.random()) * 256 )+ 1
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    })
}
colorRandomizer()

reset.addEventListener('click', colorRandomizer)

