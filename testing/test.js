


//var for zomato API
var zoAPI = "394d1e7d79d05683913b696732d33f83";

//cuisine search for locations
var search = "tacos";

//variables for longitude and longitude
var lat = 0;
var long = 0;

//getting the response for zomato locations API
var locationURL ="https://developers.zomato.com/api/v2.1/search?q=" + search + "&count=15&radius=25%20mi";

  $.ajax({
    url: locationURL,
    method: "GET",
    headers:{
      "user-key":zoAPI
    }
  })
  //after getting the response
  .done(function(response) {
    console.log(response);

    //for each of the objects returned
    for (var i =0; i < 15; i ++){

      //get the lat and long coordinates -AW
      lat = response.restaurants[i].restaurant.location.latitude;
      console.log("lat: " + lat);
      long = response.restaurants[i].restaurant.location.longitude;
      console.log("long: " + long);

      //create a marker for each object returned -AW
      var phiLambda = {lat: lat, lng: long};
      var marker = new google.maps.Marker({
        position: phiLambda,
        map: pageMap
      });

      //put it on the map

    }
  });



//fucntion to put blank map on page upon load -AW
function initMap() {
  //show map with no pins -AW
  var pageMap = new google.maps.Map(document.getElementById("mapWrapper"),{
    zoom: 8 //don't forget the ',' after zoom -AW
    //center: user's current location -AW
  });
  //map will of user's current location - AW
}

//listen for marker click
$("#mapWrapper").on("click", )
