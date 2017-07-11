var googleAPIkey = "AIzaSyBBEylmL-dj2EJ784FZAvrx677Y3Be19sg";


var googleQuearyURL ="https://developer.nps.gov/api/v0/parks?parkCode=yell";
$("#apiCall").on("click", function() {
  $.ajax({
    url: googleQuearyURL,
    method: "GET",
  })
  .done(function(response) {
    console.log(response);
    $("#codeLanding").html(response);
  });
});
