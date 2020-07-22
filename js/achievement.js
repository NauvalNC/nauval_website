var ac = 
[
  {url:"https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/JAPAN_SAKURA_SCIENCE_EXCHANGE_PROGRAM_2018_Certificate.jpg", 
  type: "cer", mode: "land", title: "SAKURA SCIENCE EXCHANGE PROGRAM JAPAN 2018"},
  
  {url:"https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/SINGAPORE_MAGES_INSTITUTE_OF_EXCELLENCE_BASIC_GAMES_PROGRAMMING_Certificate.jpg", 
  type: "cer", mode: "pot", title: "GAME PROGRAMMING MAGES INSTITUTE OF EXCELLENCE SINGAPORE"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/GOLD_MEDALIST_OF_2018_GAME_APPLICATION_OF_CREATIVE_IDEA_BINUS_UNIVERSITY_JAKARTA.jpg", 
  type: "ach", mode: "land", title: "GOLD MEDALIST GAT CREATIVE IDEA 2018 BINUS UNIVERSITY"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/SINGAPORE_MAGES_INSTITUTE_OF_EXCELLENCE_MOBILE_GAME_DEVELOPMENT_Certificate.jpg", 
  type: "cer", mode: "pot", title: "MOBILE GAME DEV MAGES INSTITUTE OF EXCELLENCE SINGAPORE"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/ced1267296e81d6d66af93d9b26a0407db5c0d66/images/1_HIGH_DISTINCTION_YEAR_1_APPLIED_COMPUTER_PROJECT_ANDROID_PROGRAMMING_BINUS_UNIVERSITY_JAKARTA_Front.jpg", 
  type: "cer", mode: "land", title: "HIGH DISTINCTION APPLIED ANDROID PROGRAMMING BINUS UNIVERSITY"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/8cc6d0fab4ab695fef20161f46e4f33848cd8a1b/images/flatpastel.jpg", 
  type: "cer", mode: "land", title: "GAME AND WEB DEV FLATPASTEL ENT. EXCELLENT PREDICATE"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/ced1267296e81d6d66af93d9b26a0407db5c0d66/images/sololearn_cert.png", 
  type: "cer", mode: "land", title: "SOLOLEARN COURSES ON C++, C#, JAVA, SWIFT, JS, jQuery, PHP, AND MORE"},
  
  {url: "https://rawcdn.githack.com/NauvalNC/nauval_website/a433654567f1ef9e81e7dbc5f1b5eb46ea816e54/images/JUARA_1_OF_2018_TECHCOMFEST_PROGRAMMING_COMPETITION_POLITEKNIK_NEGERI_SEMARANG.jpg", 
  type: "ach", mode: "land", title: "FIRST WINNER TECHCOMFEST PROGRAMMING COMPETITION 2018"}
];

var indicator = $("#achievement .container .carousel .carousel-indicators");
var inner = $("#achievement .container .carousel .carousel-inner");
var item = "";

for (var i=0; i < ac.length; i++)
{
  item = "";
  if (i==0)
  {
    indicator.append("<li class='active' data-slide-to='"+i+"' data-target='#carouselExampleIndicators'/>");
    item += "<div class='carousel-item active'>";
  } else 
  {
    indicator.append("<li data-slide-to='"+i+"' data-target='#carouselExampleIndicators'/>");
    item += "<div class='carousel-item'>";
  }
  
  var land = (ac[i].mode == "land") ? true : false;
  
  var type = "";
  if (ac[i].type == "cer") type = "CERTIFICATE";
  else if (ac[i].type == "ach") type = "ACHIEVEMENT";
  
  item += "<div class='row align-items-center'>";
  item += "<div class='col-lg-6 d-lg-block d-none text-center'>";
  item += "<img class='"+(land ? "cert-land" : "cert-pot")+" image-view' src='"+ac[i].url+"'/>";
  item += "</div>";
  
  item += "<div class='col-lg-6 text-center text-lg-left' style='margin: 25px 0px;'>";
  item += "<p class='text-small-size text-bold'>"+type+"</p>";
  item += "<p class='text-large-size d-none d-sm-block text-bold'>"+ac[i].title+"</p>";
  item += "<p class='text-medium-size d-sm-none d-block text-bold'>"+ac[i].title+"</p>";
  item += "<button class='featured-btn-white d-lg-none ach-view-btn text-small-size' style='padding: 5px 10px' name='button' type='button'>VIEW</button>";
  item += "</div>";
    
  item += "</div>";
  
  item += "</div>";
  
  inner.append(item);
}
