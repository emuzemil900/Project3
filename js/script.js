function init(){
  var el = document.getElementById('map-container');
  var myLocation = new google.maps.LatLng(43.43230, 142.91759);
  var mapOptions = {
  center: myLocation,
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
  mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
  });
  
  var contentString =
    '<h1 id="firstHeading" class="firstHeading">Hokkaido</h1>'
    '<p>Hokkaido is the second largest and northernmost of the four major islands in Japan. It is notable for being a popular stop for winter sports such as skiing and snowboarding.</p>';
    
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(myMap, marker);
      });

}    
google.maps.event.addDomListener(window, 'load', init);
