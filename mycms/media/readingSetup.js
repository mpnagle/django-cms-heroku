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

    console.log('height of preoutline div div');
    console.log($('#preOutline').outerHeight());
    console.log('outline height' + $('#outline').outerHeight());
    console.log('entire abstract blurb height' + $('#entireAbstractBlurb').outerHeight());
    console.log('map img height' + $('#mapImg').outerHeight());

    var wholeLeftHeight = $('#amplifyHeading').outerHeight() + $('#abstractTitle').outerHeight() + $('#entireAbstractBlurb').outerHeight()+$('#mapImg').outerHeight()+$('#preOutline').outerHeight()+$('#outline').outerHeight();
    

    // set white border height
    if (wholeLeftHeight < 900){
        
        $('#whiteBorder').height(minWBHeight + bottomBorder);
    }
    else{
        $('#whiteBorder').height(wholeLeftHeight+bottomBorder);
    }

    //set height of whole right col
    $('#wholeRightCol').height($('#whiteBorder').height()-$('#amplifyHeading').outerHeight()-$('#articleTitle').outerHeight()-bottomBorder);
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

            // color ref number lime green
            refText = $(this).text();
            //splice until the period
            refNum = refText.substring(0, refText.indexOf('.')+1);
            refRest = refText.substring(refText.indexOf('.')+1, refText.length);
            var newRefNum = $("<div />", {"class": "refNum", text:refNum });
            $(this).text(refRest);
            $(this).prepend(newRefNum);
        }
        $(this).offset({top:footTop, left:refLeft});


    });


});                             // ends document.isready 
