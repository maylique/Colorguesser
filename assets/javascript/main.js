const rgbGuess = document.querySelector('#rgbVal')
const colorBoxes = document.querySelectorAll('.boxes')
const reset = document.querySelector('#reset')
const output = document.querySelector('#output')
const headline = document.querySelectorAll('.boxh1')


let puffer = []
let neuePuffer = `rgb(${puffer.toString()})`
let boxColor;

// const colorRandomizer = () => {

//     let guessVal = []
//     let picker = Math.floor(Math.random() * 5)
//     colorBoxes.forEach(box => {
//         let red = Math.floor((Math.random()) * 255 )+ 1
//         let green = Math.floor((Math.random()) * 255 )+ 1
//         let blue = Math.floor((Math.random()) * 255 )+ 1
//         box.style.backgroundColor = `rgb(${red},${green},${blue})`
//         let rgb = [`${red}, ${green}, ${blue}`]

//         boxColor = box.style.backgroundColor
//         return guessVal.push(rgb)     
//     })
//     rgbGuess.textContent = `rgb(${guessVal[picker]})`
//     puffer = [...guessVal[picker]] 
//     neuePuffer = `rgb(${puffer.toString()})`
// }
// colorRandomizer()

const colorRandomizer = () => {
    let guessVal = []
    let picker = Math.floor(Math.random() * 5)
    colorBoxes.forEach(box => {
        let red = Math.floor((Math.random()) * 255 )+ 1
        let green = Math.floor((Math.random()) * 255 )+ 1
        let blue = Math.floor((Math.random()) * 255 )+ 1
        let rgb = [red, green, blue]

        box.style.backgroundColor = `rgb(${red},${green},${blue})`
        guessVal.push(rgb)
    })

    let selectedRGB = guessVal[picker]
    neuePuffer = `rgb(${selectedRGB[0]}, ${selectedRGB[1]}, ${selectedRGB[2]})`
    rgbGuess.innerHTML = `<span style="color:rgb(${selectedRGB[0]},0,0);">${selectedRGB[0]}</span> <span style="color:rgb(0,${selectedRGB[1]},0);">${selectedRGB[1]}</span> <span style="color:rgb(0,0,${selectedRGB[2]});">${selectedRGB[2]}</span>`
}

colorRandomizer()



// colorBoxes.forEach((box, index) => {
//     const boxColor = box.style.backgroundColor
//     const rgbValues = boxColor.match(/\d+/g) 
//     const rgbString = `rgb(${rgbValues.join(',')})`
//     headline[index].style.color = rgbString
// })

const changeBoxColor = () => {
    colorBoxes.forEach((box, index) => {
        const boxColor = box.style.backgroundColor
        const rgbValues = boxColor.match(/\d+/g) 
        const rgbString = `rgb(${rgbValues.join(',')})`
        headline[index].style.color = rgbString
    })
}

changeBoxColor();


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
    changeBoxColor();
}
reset.addEventListener('click', resetFuncAndRandomizer);

reset.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else if (randomNumber === 2) {
        window.location.href = 'https://www.youtube.com/watch?v=jhExvE5fvJw'
    }
});


const DealOrNoDeal = (boxColor, neuePuffer) => {
    boxColor == neuePuffer ? output.innerHTML = 'Correct, are you a <a href="https://www.youtube.com/watch?v=W4Rebo3aEkY">ROBOT?</a> 🤖' : output.textContent = 'What is wrong with you? 🤪'
}


colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const boxColor = box.style.backgroundColor
        DealOrNoDeal(boxColor, rgbGuess.textContent)
    })
})

// Funktion zum Erhöhen des Zählers
const increaseCounter = () => {
    let counter = localStorage.getItem('counter') || 0;
    counter = parseInt(counter) + 1;
    localStorage.setItem('counter', counter);
  }
  
  // Funktion zum Anzeigen des Zählers
  const displayCounter = () => {
    let counter = localStorage.getItem('counter') || 0;
    document.querySelector('#counter').textContent = counter;
  }
  
  // Aufruf der Funktionen
  increaseCounter();
  displayCounter();