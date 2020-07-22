var ac = 
[
  {url:"https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/JAPAN_SAKURA_SCIENCE_EXCHANGE_PROGRAM_2018_Certificate.jpg", 
  type: "cer", mode: "land", title: "SAKURA SCIENCE EXCHANGE PROGRAM JAPAN 2018"},
  
  {url:"https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/SINGAPORE_MAGES_INSTITUTE_OF_EXCELLENCE_BASIC_GAMES_PROGRAMMING_Certificate.jpg", 
  type: "cer", mode: "pot", title: "GAME PROGRAMMING MAGES SINGAPORE"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/SINGAPORE_MAGES_INSTITUTE_OF_EXCELLENCE_MOBILE_GAME_DEVELOPMENT_Certificate.jpg", 
  type: "cer", mode: "pot", title: "MOBILE GAME DEV MAGES SINGAPORE"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/GOLD_MEDALIST_OF_2018_GAME_APPLICATION_OF_CREATIVE_IDEA_BINUS_UNIVERSITY_JAKARTA.jpg", 
  type: "ach", mode: "land", title: "GOLD MEDALIST GAT CREATIVE IDEA 2018 BINUS UNIV"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/JUARA_1_OF_2018_TECHCOMFEST_PROGRAMMING_COMPETITION_POLITEKNIK_NEGERI_SEMARANG.jpg", 
  type: "ach", mode: "land", title: "FIRST WINNER TECHCOMFEST PROGRAMMING COMPETITION 2018"}
];

var indicator = $("#achievement .container .carousel .carousel-indicators");
var inner = $("#achievement .container .carousel .carousel-inner");

for (var i=0; i < ac.length; i++)
{
  if (i==0)
  {
    indicator.append("<li class='active' data-slide-to='"+i+"' data-target='#carouselExampleIndicators'/>");
    inner.append("<div class='carousel-item active'>");
  } else 
  {
    indicator.append("<li data-slide-to='"+i+"' data-target='#carouselExampleIndicators'/>");
    inner.append("<div class='carousel-item'>");
  }
  
  var land = (ac[i].mode == "land") ? true : false;
  
  var type = "";
  if (ac[i].type == "cer") type = "CERTIFICATE";
  else if (ac[i].type == "ac") type = "ACHIEVEMENT";
  
  inner.append("
  <div class='row align-items-center'>
    <div class='col-lg-6 d-lg-block d-none text-center'>
      <img class='cert-land' src='https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/JAPAN_SAKURA_SCIENCE_EXCHANGE_PROGRAM_2018_Certificate.jpg'/>
    </div>
    <div class='col-lg-6 text-center text-lg-left' style='margin: 25px 0px;'>
      <p class='text-small-size text-bold'>CERTIFICATION</p>
      <p class='text-large-size text-bold'>SAKURA SCIENCE EXCHANGE PROGRAM JAPAN 2018</p>
    </div>
  </div>
  ");
  
  inner.append("</div>");
}
