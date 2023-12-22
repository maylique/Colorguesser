const rgbGuess = document.querySelector('#rgbVal')
const colorBoxes = document.querySelectorAll('.boxes')
const reset = document.querySelector('#reset')
const output = document.querySelector('#output')

let puffer = []
let neuePuffer = `rgb(${puffer.toString()})`
let boxColor;

const colorRandomizer = () => {

    let guessVal = []
    let picker = Math.floor(Math.random() * 5)
    colorBoxes.forEach(box => {
        let red = Math.floor((Math.random()) * 255 )+ 1
        let green = Math.floor((Math.random()) * 255 )+ 1
        let blue = Math.floor((Math.random()) * 255 )+ 1
        box.style.backgroundColor = `rgb(${red},${green},${blue})`
        let rgb = [`${red}, ${green}, ${blue}`]

        boxColor = box.style.backgroundColor
        return guessVal.push(rgb)     
    })
    rgbGuess.textContent = `rgb(${guessVal[picker]})`
    puffer = [...guessVal[picker]] 
    neuePuffer = `rgb(${puffer.toString()})`
}
colorRandomizer()





const resetFunc = () => {
    output.textContent = ''
    reset.style.backgroundColor = 'initial'
}

reset.addEventListener('mouseover', () => {
    setTimeout(() => {
        reset.style.backgroundColor = neuePuffer
    }, 1000);
})

reset.addEventListener('mouseleave', ()=>{
    setTimeout(() => {
        reset.style.backgroundColor = 'initial'
    }, 1500);})


const resetFuncAndRandomizer = () => {
    resetFunc();
    colorRandomizer();
}
reset.addEventListener('click', resetFuncAndRandomizer);


const DealOrNoDeal = (boxColor, neuePuffer) => {
    boxColor == neuePuffer ? output.textContent = 'Richtig' : output.textContent = 'Falsch'
}


colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const boxColor = box.style.backgroundColor
        DealOrNoDeal(boxColor, rgbGuess.textContent)
    })
})

