const rgbGuess = document.querySelector('#rgbVal')
const colorBoxes = document.querySelectorAll('.boxes')


const colorRandomizer = () => {
    let red = Math.floor((Math.random()) * 256 )+ 1
    let green = Math.floor((Math.random()) * 256 )+ 1
    let blue = Math.floor((Math.random()) * 256 )+ 1

    let rgb = [red, green, blue]
    return rgb
}

console.log(colorBoxes);

colorBoxes.forEach(box => {
    let color = [colorRandomizer()]
    let red = Math.floor((Math.random()) * 256 )+ 1
    let green = Math.floor((Math.random()) * 256 )+ 1
    let blue = Math.floor((Math.random()) * 256 )+ 1
    console.log(color);
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})

