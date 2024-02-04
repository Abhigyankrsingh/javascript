const textBox = document.getElementById("textBox");
const Tofarhen = document.getElementById("Tofarhen");
const ToCelsius = document.getElementById("ToCelsius");
const result = document.getElementById("result");

function convert() {
    let temp = parseFloat(textBox.value);

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (Tofarhen.checked) {
        // Convert Celsius to Fahrenheit
        result.textContent = (temp * 9/5) + 32 + " °F";
    } else if (ToCelsius.checked) {
        // Convert Fahrenheit to Celsius
        result.textContent = ((temp - 32) * 5/9).toFixed(2) + " °C";
    } else {
        result.textContent = "Select a unit";
    }
}
