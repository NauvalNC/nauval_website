$(document).ready(function()
{
  const url = "https://drive.google.com/uc?export=view&id=";
  var models = 
  [
    {src:"1KYmAO-5wMSinh7MY76n3AdI0CtzxgMaI"},
    {src:"1GWVjWaBMKGr8trP6qhOdnHzzFk1b-5h0"},
    {src:"1Lfj_K1E0YUp5uLWS9ZGLiL21EaaXiUb2"},
    {src:"1ZiRCpOv8Qz8Y-ua4hWHI6z4e9tBZ7QJO"},
    {src:"1yIi6O_oAnhAeTq-lHBGTCoWkNNgVgRWi"},
    {src:"1fA9jn2VyqC3oFlUK0jbxsxWZb24mtObT"},
    {src:"184TwuCV5rP_ulGCNzn8lwgQq1MejSR3J"},
    {src:"1yIi6O_oAnhAeTq-lHBGTCoWkNNgVgRWi"},
    {src:"1kTqZQDKuPS_xMED1o6jEFFwoB9DeGILK"},
    {src:"1MNcAmLzECY6OAGnPWtbWdWB4NyCMdMVg"}
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
      item += "<img class='w-100 shadow-1-strong rounded mb-4' src='" + url + models[index].src + "'/>";
      index++;
    }
    item += "</div>";
  }
  inner.append(item);
});
