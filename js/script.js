function init(){
  const el = document.getElementById('map-container');
  const myLocation = new google.maps.LatLng(43.518779, 142.839524);
  const mapOptions = {
  center: myLocation,
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
  mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
  };
  
  const myMap = new google.maps.Map(el, mapOptions);
  
  const marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
  });
  
  const contentString =
    '<h1 id="firstHeading" class="firstHeading">Hokkaido</h1>' + 
    '<p>Hokkaido is the second largest and northernmost of the four major islands in Japan. It is notable for being a popular stop for winter sports such as skiing and snowboarding.</p>';
    
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
      });

}    
google.maps.event.addDomListener(window, 'load', init);
