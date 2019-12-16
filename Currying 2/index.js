
    //grabbing the dom ids:
const convertKelvin = document.querySelector('#convertKelvin')
const results = document.querySelector('#results')
const kelvinNumber = document.getElementById('kelvinNumber')

convertKelvin.onclick = () => {
    console.log('test')
    //convertKelvinReg(300)
    const currier = convertKelvinCurried(kelvinNumber.value)()
    currier
}

// non curried function
const convertKelvinReg = (kelvin, formula) => {
formula = (Math.round((kelvin - 273.15) * 9 / 5) + 32)
return results.innerHTML = formula
}

//curried function
const convertKelvinCurried = (kelvin) => (formula) => {
formula = (Math.round((kelvin - 273.15) * 9 / 5) + 32)
return results.innerHTML = formula
}


// Additional Currying Notes:
// a function can take multiple parameters - modifies it
// to take one parameter at a time.
//If it's run multiple times we only run the second part

//KELVIN TO FAHRENHEIT CONVERSION:

// F = ((k - 273.15) * 9 / 5) + 32

