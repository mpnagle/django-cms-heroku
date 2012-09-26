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
    var minWBHeight=900;
    var bottomBorder = 30;


    var wholeLeftHeight = $('#amplifyHeading').outerHeight() + $('#abstractTitle').outerHeight() + $('#entireAbstractBlurb').outerHeight()+$('#mapImg').outerHeight()+$('#preOutline').outerHeight()+$('#outline').outerHeight();
    
    console.log('wholeLeftHeight is' + wholeLeftHeight);

    

    // set white border height
    if (wholeLeftHeight < 900){
        
        $('#whiteBorder').height(minWBHeight + bottomBorder);
    }
    else{
        $('#whiteBorder').height(wholeLeftHeight+bottomBorder);
    }

    //set height of whole right col
    $('#wholeRightCol').height($('#whiteBorder').height()-$('#amplifyHeading').outerHeight()-$('#articleTitle').outerHeight()-bottomBorder);

    

    //collapse outline & display expand all link
    $('.outlineRest').each(function(index){
        $(this).css('display', 'none');
    });
    var collapseLink = $('#preOutline').children()[0];
    $(collapseLink).css('display', 'none');
    var expandLink = $('#preOutline').children()[1];
    $(expandLink).css('display', 'block');

    
    //set sizes of article main title and subtitle
    var mainText = $('#articleMainTitle').text();
    var subText = $('#articleSubTitle').text();
    if (mainText.length > subText.length && subText.length != 0){
        $('#articleMainTitle').addClass("smallerTitle");
        $('#articleSubTitle').addClass("biggerTitle");
    }
    else{
        $('#articleMainTitle').addClass("biggerTitle");
        $('#articleSubTitle').addClass("smallerTitle");
    }


/*
(($('#outline').height()+$('#abstractRest').height()+$('#abstractTitle').height()) < 918){
        $('#whiteBorder').height(minWBHeight +bottomBorder+18+$('#amplifyHeading').outerHeight() + $('#mapImg').outerHeight() );
    }
    else{
        $('#whiteBorder').height(($('#outline').outerHeight()+$('#abstractRest').outerHeight()+$('#abstractTitle').outerHeight() + 18 +$('#amplifyHeading').outerHeight() + $('#mapImg').outerHeight()));
    }
    //set height of whole right col
    $('#wholeRightCol').height($('#whiteBorder').height()+18-$('#articleTitle').outerHeight()-bottomBorder - $('#amplifyHeading').outerHeight());
    */

    //position outline  (at setup abstract is expanded)
//    positionOutline(true);



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


});                             // ends document.isready 
