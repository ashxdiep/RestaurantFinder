//var for zomato API
var zoAPI = "394d1e7d79d05683913b696732d33f83";
var search = "tacos";
var lat = 0;
var long = 0;
var locationURL ="https://developers.zomato.com/api/v2.1/search?q=" + search + "&count=15&radius=25%20mi";

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
