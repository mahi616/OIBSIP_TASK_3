function validateInput() {
    const temperatureInput = document.getElementById('temperature');
    const unitInput = document.getElementById('unit');
    const convertButton = document.querySelector('button');
    const errorMessage = 'Invalid input. Please enter a valid number for temperature.';

    // Check if the temperature input is a valid number
    if (isNaN(temperatureInput.value)) {
        convertButton.disabled = true;
        document.getElementById('result').innerText = errorMessage;
    } else {
        convertButton.disabled = false;
        document.getElementById('result').innerText = '';
    }
}

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unitInput = document.getElementById('unit').value;
    let result;

    if (unitInput === 'celsius') {
        // Convert Celsius to Fahrenheit
        result = (parseFloat(temperatureInput) * 9/5) + 32;
        document.getElementById('result').innerText = `${temperatureInput} °C is equal to ${result.toFixed(2)} °F`;
    } else if (unitInput === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        result = (parseFloat(temperatureInput) - 32) * 5/9;
        document.getElementById('result').innerText = `${temperatureInput} °F is equal to ${result.toFixed(2)} °C`;
    }
}
