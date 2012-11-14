$(document).ready(function() {
    $('body').css('margin', 0);
    /*
      $('#reference').on('scroll', function () {
      $('#article').scrollTop($(this).scrollTop());
      });
    */

    //position bg and border
    var border_width = 10;
    var window_width = $(window).width();
    var whiteWidth = $("#whiteBorder").width();
//    var white_left = (window_width - whiteWidth) / 2;
//    $("#whiteBorder").css("left", white_left);
    var borderPos = $('#whiteBorder').position();



    //set height of white border
//    var minWBHeight = 900;
    var bottomBorder = 80;

/*
    var wholeLeftHeight = $('#amplifyHeading').outerHeight() + $('#abstractTitle').outerHeight() + $('#entireAbstractBlurb').outerHeight()+$('#mapImg').outerHeight()+$('#preOutline').outerHeight()+$('#outline').outerHeight();
  */  

    var wholeRightHeight = $('#amplifyHeading').outerHeight() + $('#articleTitleTopBorder').height() + $('#articleTitle').outerHeight() + $('#article').outerHeight() + bottomBorder;


    var wholeLeftHeight = $('#abstractTitle').height() + $('#mapImg').height() + $('#preOutline').height() + $('#outline').outerHeight();

    minWBHeight = wholeLeftHeight;

    // set white border height
//    if (wholeLeftHeight < 900){
    if (wholeRightHeight < minWBHeight){
    
        $('#whiteBorder').height(minWBHeight + bottomBorder);
    }
    else{
//        $('#whiteBorder').height(wholeLeftHeight+bottomBorder);
        $('#whiteBorder').height(wholeRightHeight+bottomBorder);
    }

    //set height of whole right col to whole article height
//    $('#wholeRightCol').height($('#whiteBorder').height()-$('#amplifyHeading').outerHeight()-$('#articleTitle').outerHeight()-bottomBorder);

//    $('#wholeRightCol').height(wholeRightHeight);
    //set left col to article height. 
    $('#wholeLeftCol').height($(wholeRightHeight));



   

 
    //set sizes of article main title and subtitle
    var mainText = $('#articleMainTitle').text();
    var subText = $('#articleSubTitle').text();
                
    if (mainText.length > subText.length && $('#articleSubTitle').length > 0){
        $('#articleMainTitle').addClass("smallerTitle");
        $('#articleSubTitle').addClass("biggerTitle");
    }
    else{
        $('#articleMainTitle').addClass("biggerTitle");
        $('#articleSubTitle').addClass("smallerTitle");
    }
    
    //set country image name
    var countryName = ($('#countryName').text()).trim(); //eliminate    //white space just in case
    if (countryName.length > 1){
        var source = "/media/countryImages/" + countryName + ".png";
        $('#mapImg').append($('<img />', {'src': source}));
    }


    //setup collapse/expand triangles left of outline boxes
    $('.outlineBox').each(function(i){
        var triangles = $('<div />', {
            'id': 'triangles',
            'style': "display:inline",
        });
                
        $(this).prepend(triangles);
        $(triangles).append($('<img />', {
            'src': "/media/triangleTeal_Closed.png",
            'class': 'triangleClosed',
        }));
        $(triangles).append($('<img />', {
            'src': "/media/triangleTeal_Open.png",
            'class': 'triangleOpen',
            'style': "display:none",
        }));


    });


    //collapse outline & display expand all link
    $('.outlineRest').each(function(index){
        $(this).css('display', 'none');
    });
    var collapseLink = $('#preOutline').children()[0];
    $(collapseLink).css('display', 'none');
    var expandLink = $('#preOutline').children()[1];
    $(expandLink).css('display', 'block');


    // align footnotes in ref col w/ article.
    $('.references').each(function(i){
        var refLeft = $(this).offset().left;
        if (i==0){
            //line up with author heading
            footTop = $('.author-heading').offset().top //should only be one
        }

        else{
            var footMatch = $($('.footNumber')[i-1]);
            var footOffset = (footMatch).offset();
            var footTop = (footMatch).offset().top;

            // color ref number teal
            refHtml = $(this).html();
            //splice until the period
            refNum = refHtml.substring(0, refHtml.indexOf('.')+1);
            refRest = refHtml.substring(refHtml.indexOf('.')+1, refHtml.length);
            var newRefNum = $("<div />", {"class": "refNum", text:refNum });
            $(this).html(refRest);
            $(this).prepend(newRefNum);
        }
        $(this).offset({top:footTop, left:refLeft});


    });


/*
    //set outline boxes to where they appear in the article. 
    $('.outlineBox').each(function(i){
        //get matching art
        var artChunk = $('#art_' + (i+1));

        if (artChunk.length==0){
            return false;
        }



            $(this).offset({ top: artChunk.offset().top, left: $(this).offset().left});
        console.log('top of art id is ' + artChunk.offset().top);
        console.log('new top of outline box is ' + $(this).offset().top);



        
    });
*/



});                             // ends document.isready 
