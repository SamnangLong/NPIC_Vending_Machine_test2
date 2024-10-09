// Function to reset all buttons to default color
function resetButtonColors_soap() {
    var buttons = document.querySelectorAll('.button_lg_soap');
    buttons.forEach(button => {
        button.style.backgroundColor = 'cornsilk';  // Reset background color to cornsilk
    });
}
// Function to change the clicked button's color and update the text box
function button_soap(buttonNumber) {
    resetButtonColors_soap(); // Reset other buttons' color
    var ButtonRead = document.getElementById('button_soap' + buttonNumber);
    ButtonRead.style.backgroundColor = 'green';  // Change clicked button's background color to green
}


// Function to reset all buttons to default color
function resetButtonColors_perfume() {
    var buttons = document.querySelectorAll('.button_lg_perfume');
    buttons.forEach(button => {
        button.style.backgroundColor = 'cornsilk';  // Reset background color to cornsilk
    });
}
// Function to change the clicked button's color and update the text box
function button_perfume(buttonNumber) {
    resetButtonColors_perfume(); // Reset other buttons' color
    var ButtonRead = document.getElementById('button_perfume' + buttonNumber);
    ButtonRead.style.backgroundColor = 'green';  // Change clicked button's background color to green
}