//Image Viewer | START
var imageViewerWrapper = $(".image-viewer-wrapper");
var imageViewerCloser = $(".image-viewer-wrapper .image-closer");
var imageFrame = $(".image-viewer-wrapper .image");

var imageToggleInterval = 300;

var isViewerHiding = true;
SetupImageViewer();

function SetupImageViewer() 
{
    imageViewerWrapper.hide();
    imageViewerWrapper.css("opacity", "0");
} 

function SetImageViewer(imageUrl)
{
    imageFrame.attr("src", imageUrl);
    ToggleViewer();
}

function ToggleViewer() 
{
    if (isViewerHiding) 
    {
        imageViewerWrapper.show();
        imageViewerWrapper.animate({opacity: "1"}, imageToggleInterval);
    } else 
    {
        imageViewerWrapper.animate({opacity: "0"}, imageToggleInterval, function()
        {
            imageViewerWrapper.hide();
        });
    }

    isViewerHiding = !isViewerHiding;
}

imageViewerCloser.click(function()
{
    ToggleViewer();
});

//Image Viewer | END

$(document).ready(function()
{
    var homePageUrl = 'https://nauvalme.blogspot.com';
    var blogHomePageUrl = 'https://nauvalme.blogspot.com/index.html';
    //Error | START

    var showAllPostBtn = $(".status-msg-body a:contains('Show all posts')");
    showAllPostBtn.attr("href", blogHomePageUrl);

    //Error | END

    //Share | START

    var shareBtnsWrapper = $('.post-share-buttons.goog-inline-block');
    shareBtnsWrapper.prepend('<p class="share-title float-left text-bold text-small-size" style="padding: 9px 0; margin-right: 10px;">SHARE : </p>');

    var mailColor = '#f14336';
    var blogColor = '#ff5722';
    var twitterColor = '#55aded';
    var facebookColor = '#3b579d';
    var pinterestColor = '#e60023';

    var sbMailBtn = $(".sb-email");
    sbMailBtn.html('<i class="fas fa-envelope"></i>');
    sbMailBtn.css('cssText', 'background: ' + mailColor + ' !important;');

    var sbBlogBtn = $('.sb-blog');
    sbBlogBtn.html('<i class="fab fa-blogger-b"></i>');
    sbBlogBtn.css('cssText', 'background: ' + blogColor + ' !important;');

    var sbTwitterBtn = $('.sb-twitter');
    sbTwitterBtn.html('<i class="fab fa-twitter"></i>');
    sbTwitterBtn.css('cssText', 'background: ' + twitterColor + ' !important;');

    var sbFacebookBtn = $('.sb-facebook');
    sbFacebookBtn.html('<i class="fab fa-facebook-f"></i>');
    sbFacebookBtn.css('cssText', 'background: ' + facebookColor + ' !important;');

    var sbPinterestBtn = $('.sb-pinterest');
    sbPinterestBtn.html('<i class="fab fa-pinterest-p"></i>');
    sbPinterestBtn.css('cssText', 'background: ' + pinterestColor + ' !important;');

    //Share | END

    //Comment | START

    //var commentIframe = $('.comments .comment-replybox-thread iframe').contents();
    //commentIframe.find('head').prepend("<link href='https://drive.google.com/uc?export=view&amp;id=1rEi_0aEoInFLPjYPt1epuUhDtWxl7IyX' rel='stylesheet' type='text/css'/>");

    //Comment | END

    //Blog Pager | START
    
    var blogPagerHomeLink = $(".home-link");
    blogPagerHomeLink.attr("href", blogHomePageUrl);

    var blogPagerPrevLink = $(".blog-pager-newer-link");
    if (blogPagerPrevLink.attr("href") == homePageUrl + "/") 
    {
        blogPagerPrevLink.attr("href", blogHomePageUrl);
    }

    //Blog Pager | END
    
    //Debugging
    //SetImageViewer("https://2.bp.blogspot.com/-r2JhMyeHJy0/XNl6NfWXU-I/AAAAAAAAJKU/XCYfkYOsMQwKsyLoAz-C9NY8AAREVN8ZwCEwYBhgL/s1600/sample.png");

    //Implementation
    var imageToView = $(".widget.Blog .post-outer img");
    var defImgView = $(".image-view");
    
    console.log("len"+defImgView.length);
    for (let i = 0; i < defImgView.length; i++) 
    {
        let x = defImgView[i];
        let imageSource = $(x).attr("src");
        x.addEventListener("click", function(){ SetImageViewer(imageSource); });
    }
    
    for (let i = 0; i < imageToView.length; i++) 
    {
        let x = imageToView[i];
        let imageSource = $(x).attr("src");
        x.addEventListener("click", function(){ SetImageViewer(imageSource); });
    }
});
