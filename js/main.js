//GLOBAL VARIABLES
let count = 0

//Function that adds inputted value to the current value
const adding = () => {
    let amountToAdd = parseInt(document.getElementById('inputField').value)
    count += amountToAdd
    updateDisplay()
}

//Function that subtracts inputted value from the current value
const subtracting = () => {
    let amountToSubtract = parseInt(document.getElementById('inputField').value)
    count -= amountToSubtract
    updateDisplay()
}

//Function to update the display
const updateDisplay = () => {
    let countDisplay = document.getElementById('countDisplay')
    countDisplay.innerText = count
    
    //Color change
    if (count < 0) {
        countDisplay.style.color = 'red'
    } else {
        countDisplay.style.color = 'black'
    }
}


window.addEventListener('DOMContentLoaded', () => {

    //On load, make the input field 1
    document.getElementById('inputField').value = 1

    //Add event listeners to the buttons
    document.getElementById('add').addEventListener('click', adding)
    document.getElementById('subtract').addEventListener('click', subtracting)
})
