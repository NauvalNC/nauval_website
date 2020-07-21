$(document).ready(function()
{
  //Side-Nav | START

  var sideNavWidth = 250;
  var sideNavPadding = 10;
  var sideNavBtn = $("#hamburger-btn");
  var sideNavBackBtn = $("#side-nav-back");
  var sideNavPanel = $(".side-nav");
  var sideNavBackground = $(".side-nav-background");
  var isSideNavOpen = true;
  var sideNavInterval = 300;

  SetupSideNav();
  SideNav();

  sideNavBtn.click(function()
  {
    SideNav();
  });

  sideNavBackBtn.click(function()
  {
    SideNav();
  });

  function SetupSideNav()
  {
    sideNavPanel.css("width", sideNavWidth + "px");
    sideNavPanel.css("padding", sideNavPadding + "px");
  }

  function SideNav()
  {
    isSideNavOpen = !isSideNavOpen;

    if (isSideNavOpen)
    {
      sideNavPanel.show();
      sideNavPanel.animate({width: sideNavWidth + "px", padding: sideNavPadding + "px"}, sideNavInterval);

      sideNavBackground.show();
      sideNavBackground.animate({opacity: 0.7}, sideNavInterval);
    } else
    {
      sideNavPanel.animate({width: "0", padding: "0"}, sideNavInterval, function()
      {
        sideNavPanel.hide();
      });

      sideNavBackground.animate({opacity: 0}, sideNavInterval, function()
      {
        sideNavBackground.hide();
      });
    }
  }

  //Side-Nav | END
});
