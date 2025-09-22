import { getWeatherStatus } from "./WeatherStatus";
export default function buttonHandler() {

  const cityName = document.querySelector("#city");
  const provinceName = document.querySelector("#province");
  const submitBtn = document.querySelector("#submit");
  const weatherInfo = document.querySelector("#weatherInfo");
  const loading = document.querySelector(".loader");

  submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const city = cityName.value;
    const province = provinceName.value;

    loading.style.display = "inline-block";

    const temp = await getWeatherStatus(city, province);

    loading.style.display = "none";

    weatherInfo.innerHTML = `It's currently ${temp}\u00B0C in ${city}, ${province}`;
  })
}
