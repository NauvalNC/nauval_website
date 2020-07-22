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

for (var i=0; i < ac.length; i++)
{
  console.log("hello"+i);
  
  if (i==0)
  {
    $("#achievement .carousel-indicators" ).append("<li class='active' data-slide-to='"+i+"' data-target='#carouselExampleIndicators'/>");
    continue;
  }
  
  $("#achievement .carousel-indicators" ).append("<li data-slide-to='"+i+"' data-target='#carouselExampleIndicators'/>");
}
