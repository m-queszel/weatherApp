export async function getWeatherStatus(city, province) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${province},Canada?key=J8C6GRZB8FUL99U8RYQN5GDRA`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Could not retrieve weather data for ${province}, ${city}`);
      return;
    }

    const result = await response.json();
    return processWeatherData(result);
  }
  catch (error) {
    console.error(error.message);
  }
}

function fahrenToCelsius(fahren) {
  return (fahren - 32) * 5 / 9;
}

function processWeatherData(jsonInfo) {
  let num = fahrenToCelsius(jsonInfo.currentConditions.temp);
  const roundedNum = num.toFixed(1);
  return roundedNum;
}
