// var apiKey = ;
//HI!

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

      //get the lat and long coordinates
      lat = response.restaurants[i].restaurant.location.latitude;
      console.log("lat: " + lat);
      long = response.restaurants[i].restaurant.location.longitude;
      console.log("long: " + long);

      //put it on the map

    //
  }
  });
