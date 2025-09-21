export function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    doSomething(console.log(position.coords.latitude, position.coords.longitude));
  });
}
