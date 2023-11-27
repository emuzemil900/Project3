function initMap(){
  var el = document.getElementById('map-container');
  var myLocation = new google.maps.LatLng(43.0609, 141.3549);
  
  var mapOptions = {
    center: myLocation,
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var map = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: 'images/icon.png'
  });

  var contentString = '<h1>Sapparo</h1><p>Sapporo is the capital of Hokkaido, the second largest and northernmost of Japan's four major islands. It is notably a popular stop for winter sports such as skiing and snowboarding.</p>';

  var infowindow = new google.maps.InfoWindow ({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);
