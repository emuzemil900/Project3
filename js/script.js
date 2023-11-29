function initMap() {
  const myLocation = { lat: 43.0609, lng: 141.3549 };
  const map = new google.maps.Map(document.getElementById("map-container"), {
    zoom: 4,
    center: myLocation,
  });

  const marker = new google.maps.Marker({
    position: myLocation,
    map,
    title: "Hello World!",
    icon: "images/icon.png",
  });
}
window.initMap = initMap;

function initMap() {
  const sapporo = { lat: 43.0609, lng: 141.3549 };
  const map = new google.maps.Map(document.getElementById("map-container"), {
    zoom: 4,
    center: sapporo,
  });
  const contentString = '<h1>Sapporo</h1><p>Sapporo is the capital of Hokkaido, the second largest and northernmost of Japan's four major islands. It is notably a popular stop to watch and play winter sports like skiing and snowboarding.</p>'
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Saporro",
  });
  const marker = new google.maps.Marker({
    position: saporro,
    map,
    title: "Saporro",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

initMap();
