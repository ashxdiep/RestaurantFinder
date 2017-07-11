// var apiKey = ;
//HI!

var VAqueryURL ="https://developer.nps.gov/api/v0/parks?parkCode=yell";
$("#apiCall").on("click", function() {
  $.ajax({
    url: VAqueryURL,
    method: "GET",
    headers:{
      Authorization: "E8FE49A8-5724-4DE5-B997-F6D79162EDDC"
    },
    datatype: "jsonp"
    // crossorigin:true
  })
  .done(function(response) {
    console.log(response);
  });
});
