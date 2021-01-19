$(document).ready(function()
{
  var reviews = 
  [
    {buyer:"kayabun", country:"Malaysia", msg: "Lovely, lovely art with an even lovelier seller! Thank you :)", rating: 5},
    {buyer:"kayabun", country:"Malaysia", msg: "Second order. Wonderful as always :)", rating: 5},
    {buyer:"kayabun", country:"Malaysia", msg: "Highly recommended artist. Very patient and pleasant to work with. Thanks :D", rating: 5},
    {buyer:"lottichu", country:"Singapore", msg: "Perfect seller!! got every detail correct and very professional.", rating: 5},
    {buyer:"mokimato", country:"Canada", msg: "Excellent service and amazing to work with! went over and beyond on everything I asked for in a very quick amount of time! I am extremely happy with the final outcome and definitely would recommend :)", rating: 5}
  ];

  var inner = $("#fiverrReviewIndicator .container .carousel .carousel-inner");
  var item = "";

  for (var i=0; i < reviews.length; i++)
  {
    item = "";
    if (i==0)
    {
      item += "<div class='carousel-item active'>";
    } else 
    {
      item += "<div class='carousel-item'>";
    }
    
    item += "<h6 style='font-weight: bold'>" + reviews[i].buyer + "<i>- " + reviews[i].country + "</i></h6>";
    item += "<p>" + reviews[i].msg + "</p>";
    
    item += "<div class='review_rating'>";
    for (var j=0; j < reviews[i].rating; j++)
    {
      item += "<i class='fa fa-star' aria-hidden='true'></i>";
    }
    
    item += "</div>";
    item += "</div>";

    inner.append(item);
  }
});
