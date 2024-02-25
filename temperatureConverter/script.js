document.getElementById('convertBtn').addEventListener('click', function() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    const convertedTemperature = convertTemperature(inputTemperature, unit);

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature} °${unit === 'Celsius' ? 'F' : 'C'}`;

    const paragraph = generateWeatherParagraph(convertedTemperature);
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = paragraph;
    document.getElementById('result').appendChild(paragraphElement);
  });
  
  function convertTemperature(temperature, unit) {
    if (unit === 'Celsius') {
      return (temperature * 9 / 5) + 32;
    } else {
      return (temperature - 32) * 5 / 9;
    }
  }
  
  function generateWeatherParagraph(temperature) {
    let paragraph;
    if (temperature < 0) {
      paragraph = "It's freezing cold outside! Bundle up in warm clothes.";
    } else if (temperature < 15) {
      paragraph = "The weather is chilly. Consider wearing a jacket or sweater.";
    } else if (temperature < 25) {
      paragraph = "It's a pleasant temperature. Enjoy the outdoors!";
    } else if (temperature < 30) {
      paragraph = "The weather is getting warm. Stay hydrated and wear sunscreen.";
    } else {
      paragraph = "It's hot outside! Seek shade and stay cool.";
    }
    return paragraph;
  }
  