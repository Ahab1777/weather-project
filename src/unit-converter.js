

export default function convertTemperature(temperatureUnit) {
    const temperatureNode = document.querySelectorAll(".temperature-number")
    //check if fahrenheit, else if it is celsius convert from fahrenheit to celsius
    temperatureNode.forEach(element => {
        const temperatureValue = parseFloat(element.firstChild.nodeValue);
        console.log('current temp is', temperatureValue);
        //if element's data-unit does not match the unit passed in, convert the temperature
        if (temperatureUnit === "fahrenheit") {
            element.dataset.unit = "fahrenheit";
            //convert celsius to fahrenheit
            const convertedTemperature = ((temperatureValue * 9 / 5) + 32);    element.firstChild.nodeValue = convertedTemperature.toFixed(1);
        } else if (temperatureUnit === "celsius") {
            element.dataset.unit = "celsius";
            //convert fahrenheit to celsius
            const convertedTemperature = (temperatureValue - 32) * 5 / 9;
            element.firstChild.nodeValue = convertedTemperature.toFixed(1);
        } else {
            console.error("Invalid unit");
            return;
        }

        console.log('converted temp is', element.firstChild.nodeValue);

        const unit = element.querySelector(".temperature-unit");
        unit.textContent = element.dataset.unit === "celsius" ? "°C" : "°F";

    });


}