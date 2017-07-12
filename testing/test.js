// var apiKey = ;
//HI!

//var for zomato API
var zoAPI = "394d1e7d79d05683913b696732d33f83";

//cuisine search for locations
var search = "tacos";

//variables for longitude and longitude
var lat = 0;
var long = 0;

//array for list of restaurants
var listR = [];

//variables for name of restaurant, website url, address, currency, rating
// and cuisine type
var name ="";
var website = "";
var address = "";
var rating = 0;
var cuisine = "";
var currency = "";

//getting the response for zomato locations API
var locationURL ="https://developers.zomato.com/api/v2.1/search?q=" + search + "&count=15&radius=25%20mi";
// res_id variable for reviews ajax
var resID = "";

var markerHolder = {};

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
    // var marker = new google.maps.Marker({
    //   position: phiLambda,
    //   map: pageMap
    // });

    markerHolder['marker' + i] = new google.maps.Marker({
      position:phiLambda,
      map: pageMap
    });

    //put it on the map


    // get the variables for name, website, address, rating, curency, cuisine
    name = response.restaurants[i].restaurant.name;
    website = response.restaurants[i].restaurant.url;
    address = response.restaurants[i].restaurant.location.address;
    rating = parseInt(response.restaurants[i].restaurant.user_rating.aggregate_rating);
    cuisine = response.restaurants[i].restaurant.cuisines;
    currency = response.restaurants[i].restaurant.currency;
    resID = response.restaurants[i].restaurant.id;

    //push the name of restaurant to list of restaurants
    listR.push(resID);

    //make a div which appends to restaurants nearby
    makeDivforNearbyR(name, website, address, rating, cuisine, currency);
  }
});

//function for making div to append to restaurants nearby
function makeDivforNearbyR(name, website, address, rating, cuisine, currency){

  //make a new div
  var newdiv = $("<div class = 'option'> </div>");

  //append number of stars for rating
  var divforStars = drawStars(rating);

  //append the name and currency next to it (name is clickable)
  $(newdiv).append(currency);
  var rname = $("<p id = 'name'></p>");
  //set data-name to name
  $(rname).attr("data-name", resID);
  $(rname).html(name);
  $(newdiv).append(rname);

  //append website url (clickable)
  $(newdiv).append("<p id = 'website'> Website: " + website + "</p>");

  //append address
  $(newdiv).append("<p> Address: " + address + "</p>");

  //Clickable Directions
  $(newdiv).append("<p id = 'directions'>Directions</p>");

  //Cuisine type
  $(newdiv).append("<p> Cuisines: " + cuisine + "</p>");

  //Append to html

}

//whenever the name of place is clicked
document.on("click","#name", function(){

  //retrieve dataname value from whats clicked (This is the resID)
  var restaurantName = $(this).attr("data-name");

  //get ajax response of reviews for that restaurantName

  //variable for reviewsURL
  var reviewsURL = "https://developers.zomato.com/api/v2.1/reviews?res_id=" + resID + "&count=15";

  $.ajax({
    url: reviewsURL,
    method: "GET",
    headers:{
      "user-key":zoAPI
    }
  })
  //after getting the response
  .done(function(response) {

  });
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
