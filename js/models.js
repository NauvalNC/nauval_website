$(document).ready(function()
{
  console.log("hello world");
  var models = 
  [
    {src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt:"United States"},
    {src:"https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp", alt:"Nani kore"},
    {src:"https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp", alt:"Nani kore"},
    {src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt:"Nani kore"},
    {src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp", alt:"Nani kore"},
    {src:"https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp", alt:"Nani kore"}
  ];
  var col = 3;
  var row = models.length / col;

  var inner = $("#galllery_cont");
  var item = "";
  var index = 0;
  
  for (var i = 0; i < col; i++) {
    item += "<div class='col-lg-4 col-md-12 mb-4 mb-lg-0'>";
    for (var j = 0; j < row; j++) {
      if (index > models.length - 1) break;
      item += "<img class='w-100 shadow-1-strong rounded mb-4' alt='" + models[index].alt + "' src='" + models[index].src + "'/>";
      index++;
    }
    item += "</div>";
  }
  inner.append(item);
  console.log("hello world 2");
});
