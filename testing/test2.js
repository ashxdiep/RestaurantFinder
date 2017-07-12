var testLatLong = {lat: -25.363, lng: 131.044};

var latArray = [-25.363, -24.363, -26.363]
var longArray = [131.044, 131.01, 131.2]


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: testLatLong
  });

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: testLatLong
  });

  for (var i =0; i < 3; i ++){

    //create a marker for each object returned -AW
    var phiLambda = {lat: latArray[i], lng: longArray[i]};

    var marker = new google.maps.Marker({
      position: phiLambda,
      map: map
    });

    markerClick(marker);

  }


} //end of initMap



function markerClick(marker) {
  marker.addListener("click", function() {
    alert("marker!");
    console.log(marker);
  });
}
