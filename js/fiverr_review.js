$(document).ready(function()
{
  var reviews = 
  [
    {buyer:"kayabun", country:"Malaysia", msg: "Lovely, lovely art with an even lovelier seller! Thank you :)", rating: 5},
    {buyer:"kayabun", country:"Malaysia", msg: "Second order. Wonderful as always :)", rating: 5},
    {buyer:"kayabun", country:"Malaysia", msg: "Highly recommended artist. Very patient and pleasant to work with. Thanks :D", rating: 5},
    {buyer:"lottichu", country:"Singapore", msg: "Perfect seller!! got every detail correct and very professional.", rating: 5},
    {buyer:"mokimato", country:"Canada", msg: "Excellent service and amazing to work with! went over and beyond on everything I asked for in a very quick amount of time! I am extremely happy with the final outcome and definitely would recommend :)", rating: 5},
    {buyer:"charmingneku", country:"United States", msg: "Perfect! We got everything we needed :) Will hire again for future projects.", rating: 5},
    {buyer:"davonpeoples", country:"United States", msg: "Great quality service!!!", rating: 5},
    {buyer:"pontikue", country:"Netherlands", msg: "Great service. Excellent anime style models with high quality textures!", rating: 5},
    {buyer:"lottichu", country:"Singapore", msg: "Seller is always perfect in his responses! Happy to commission more!", rating: 5},
    {buyer:"pontikue", country:"Cyprus", msg: "Beautiful 3d models with high quality texture maps! 👍", rating: 5},
    {buyer:"creative_ed", country:"Portugal", msg: "Where should I start? I have ordered many times from fiverr now and working with Nauvalnever was hands down the best experience I have ever had. Very professional, great communication and an amazing workflow and energy. I will definitely come back for more, and you should too.", rating: 5},
    {buyer:"pontikue", country:"Cyprus", msg: "Well made 3d models with good poly counts. He agreed to my requests to add more details.", rating: 5},
    {buyer:"pontikue", country:"Cyprus", msg: "I needed an extra outfit for one of my characters, and nauvalnever delivered quickly and with the expected quality. 👍", rating: 5},
    {buyer:"mokimato", country:"Canada", msg: "Always great working with Nauvalnever! speedy delivery, amazing art, 10/10!", rating: 5},
    {buyer:"benjamincoll875", country:"Japan", msg: "Words can not even begin to describe how blown away I am by this seller. The results are beyond what I could have hoped for. The seller was on point, kept me up to date on the process and was polite and courteous every step of the way.", rating: 5},
    {buyer:"benjamincoll875", country:"Japan", msg: "I'm blown away with how well this seller was able to convert this 2d chibi into a cute low poly model. Fiver stars plus one.", rating: 5},
    {buyer:"pontikue", country:"Cyprus", msg: "Character model looks almost exactly like the concept art I provided! I'm super happy with it 😄", rating: 5},
    {buyer:"panuchka", country:"Finland", msg: "This seller is a real deal. If you wish to have professional quality models, awesome communication and speedy delivery, look no further! Will definitely order again.", rating: 5},
    {buyer:"chrisevansdev", country:"United States", msg: "Did excellent work! We were modernizing an older character and he did a great job giving it a new cartoon feel while still preserving the original style. I highly recommend!", rating: 5},
  ];

  var inner = $("#fiverrReviewIndicator .carousel-inner");
  var item = "";

  for (var i=reviews.length - 1; i >= 0 ; i--)
  {
    item = "";
    if (i==0)
    {
      item += "<div class='carousel-item active'>";
    } else 
    {
      item += "<div class='carousel-item'>";
    }
    
    item += "<h6 style='font-weight: bold'>" + reviews[i].buyer + "<i> - " + reviews[i].country + "</i>" + "<img src='https://www.countryflags.io/" + "be" + "/shiny/32.png'>" + "</h6>";
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
