function initMap() {
  const myLocation = { lat: 43.0618, lng: 141.3545 };
  const map = new google.maps.Map(document.getElementById("map-container"), {
    zoom: 4,
    center: myLocation,
  });

  const marker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "Hello World!",
    icon: "images/icon.png",
  });



function addMarker() {
  const sapporo = { lat: 43.0609, lng: 141.3549 };
  const map = new google.maps.Map(document.getElementById("map-container"), {
    zoom: 4,
    center: sapporo,
  });
  const contentString = '<h1>Sapporo</h1><p>Sapporo is the capital of Hokkaido, the second largest and northernmost of the four major islands of Japan. It is notably a popular stop to watch and play winter sports like skiing and snowboarding.</p>'
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Sapporo",
  });
  const marker = new google.maps.Marker({
    position: sapporo,
    map: map,
    title: "Sapporo",
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

initMap();
