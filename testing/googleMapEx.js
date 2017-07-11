
//initMap function initiates when the Google Map API loads via the "callback" parameter (see googleMapEX.html)
//
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var uluruuu = {lat: -24.363, lng: 130.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: uluru
  });

  var marker1 = new google.maps.Marker({
    position: uluru,
    map: map
  });

  var marker2 = new google.maps.Marker({
    position: uluruuu,
    map: map
  });
}
