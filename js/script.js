function initMap() {
  const myLocation = { lat: 43.0609, lng: 141.3549 };
  const map = new google.maps.Map(document.getElementById("map-container"), {
    zoom: 4,
    center: myLocation,
  });

  new google.maps.Marker({
    position: myLocation,
    map,
    title: "Hello World!",
  });
}
window.initMap = initMap;
