export default function initializeHomepage() {
  const mainContainer = document.querySelector("#mainContainer");
  const subContainer = document.querySelector("#subContainer");

  const weatherInfo = document.createElement("p");
  weatherInfo.setAttribute("id", "weatherInfo");

  subContainer.append(weatherInfo);

}
