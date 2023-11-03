const inputField = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const resetBtn = document.getElementById('reset-value-btn')
const convertLength = document.getElementById('conv-length')
const convertVolume = document.getElementById('conv-volume')
const convertMass = document.getElementById('conv-mass')
    
convertBtn.addEventListener('click', function() {
       
        let inputNum = inputField.value
       
        let metersToFeet = (inputNum * 3.28084).toFixed(3)
        let feetToMeters = (inputNum / 3.28084).toFixed(3)
        convertLength.textContent = `${inputNum} meters = ${metersToFeet} feet | ${inputNum} feet = ${feetToMeters} meters`
        let litersToGalons = (inputNum * 0.264172).toFixed(3)
        let galonsToLiters = (inputNum / 0.264172).toFixed(3)
        convertVolume.textContent = `${inputNum} liters = ${litersToGalons} gallons | ${inputNum} gallons = ${galonsToLiters} liters` 
        let kilosToPounds = (inputNum * 2.20462).toFixed(3)
        let poundsToKilos = (inputNum / 2.20462).toFixed(3)
        convertMass.textContent = `${inputNum} kilos = ${kilosToPounds} pounds | ${inputNum} pounds = ${poundsToKilos} kilos`
    })

resetBtn.addEventListener('click', function() {
    inputField.value = null
    convertLength.textContent = null
    convertMass.textContent = null
    convertVolume.textContent = null
})