// Google Maps API callback function
function initMap() {
    // Coordinates for the initial map center
    const myLocation = { lat: 43.518779, lng: 142.839524 };

    // Create a new Google Map
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 15,
        center: myLocation,
    });

    // HTML content for the InfoWindow
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="first heading" class="first heading">Hokkaido</h1>' +
        '<div id="body content">' +
        "<p>Hokkaido is the second largest and northernmost of the four major islands in Japan. It is notable for being a popular stop for winter sports such as skiing and snowboarding</p>" +
        "</div>" + "</div>";

    // Create an InfoWindow with the specified content
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Chicago",
    });

    // Create a marker and set its properties
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Chicago",
    });

    // Add a click event listener to the marker to open the InfoWindow
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map: map,
        });
    });

    // Add a Traffic Layer to the map
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}

// Make the initMap function available globally
window.initMap = initMap;
