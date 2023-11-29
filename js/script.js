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
  var contentString = '<h1>Sapparo</h1><p>Sapporo is the capital of Hokkaido, the second largest and northernmost of Japan's four major islands. It is notably a popular stop to watch and play winter sports like skiing and snowboarding.</p>';

  var infowindow = new google.maps.InfoWindow ({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
