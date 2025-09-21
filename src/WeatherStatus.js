export async function getWeatherStatus() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/NewBrunswick,Canada?key=J8C6GRZB8FUL99U8RYQN5GDRA"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("could not retrieve weather data");
    }

    const result = await response.json();
    processWeatherData(result);
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
  let roundedNum = num.toFixed(1);
  console.log(`It's currently ${roundedNum} degrees outside in Fredericton, NB`);
}

