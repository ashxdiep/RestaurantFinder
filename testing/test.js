// var apiKey = ;
//HI!

//var for zomato API
var zoAPI = "394d1e7d79d05683913b696732d33f83";

//cuisine search for locations


var search = "tacos";


//variables for longitude and longitude
var lat = 0;
var long = 0;

//array for list of restaurants, and list of reviews
var listR = [];
var listP = [];

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
    $("#hello").append(newdiv);
  }

  //whenever the name of place is clicked
  $(document).on("click", "#name", function(){

  //retrieve dataname value from whats clicked (This is the resID)
  var restaurantName = $(this).attr("data-name");

  //get ajax response of reviews for that restaurantName


    //variable for reviewsURL
    var reviewsURL = "https://developers.zomato.com/api/v2.1/reviews?res_id=" + resID + "&count=20";

    $.ajax({
      url: reviewsURL,
      method: "GET",
      headers:{
        "user-key":zoAPI
      }
    })
    //after getting the response
    .done(function(response) {
      console.log(response);

      //for each of the reviews
      for (var r = 0; r < 20; r ++){

      //get thumbnail, name, rating, data, and description
      reviewer = response.user_reviews[r].review.user.name;
      console.log("Person: " + reviewer);
      reviewDate = response.user_reviews[r].review.review_time_friendly;
      console.log("Date: " + reviewDate);
      $(thumbnail).attr("src", response.user_reviews[r].review.user.profile_image);
      reviewRating = response.user_reviews[r].review.rating;
      console.log("Rating: " + reviewRating);
      rdescription = response.user_reviews[r].review.review_text;
      console.log(rdescription);

      //push the name into the listp (just in case)
      listP.push(reviewer);

      //call function for making div for reviews
      makeDivforReviewers(reviewer, reviewDate, reviewRating, rdescription);
    }
  });



});
//function for converting ratings into stars
function drawStars(rating){

    //make a div for stars
    var stars = $("<div>");

    //if rating less than one, append one stars
    if (rating < 1) {
      $(stars).append("<img src = 'stars.png'>");
      return stars;
    }
    //else if less than 2 , append 2 stars
    else if (rating <=2 ){
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      return stars;
    }
    //else if less than 3, append 3 stars
    else if (rating <= 3  ){
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      return stars;
    }
    //else if less than 4, append 4 stars
    else if (rating <= 4  ){
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      return stars;
    }
    //else, append 5 stars
    else{
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      $(stars).append("<img src = 'stars.png'>");
      return stars;
    }
  }

//function to make div for each person's ratings
function makeDivforReviewers(reviewer, reviewDate, reviewRating, rdescription){

  //make a new div
  var div2 = $("<div class = 'ratingdiv'> </div>");

  //make a paragraph element and append the thumbnail and name into it
  var ava = $("<p id = 'avatar'></p>");
  $(ava).append(thumbnail);
  $(ava).append(reviewer);

  //append paragraph element into the div2
  $(div2).append(ava);

  //make the rating into stars and append it into div2
  var div2forstars = drawStars(reviewRating);
  $(div2).append(div2forstars);

  //append description into div2
  $(div2).append(rdescription);

  //append date into div2
  $(div2).append(reviewDate);

  //append div2 to document
  $("#lol").append(div2);
}
