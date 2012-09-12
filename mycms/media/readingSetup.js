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
    if (($('#outline').height()+$('#abstractRest').height()+$('#abstractTitle').height()) < 918){
        $('#whiteBorder').height(900 +50+18+$('#amplifyHeading').outerHeight());
    }
    else{
        $('#whiteBorder').height(($('#outline').height()+$('#abstractRest').height()+$('#abstractTitle').height()+80+18 + $('#amplifyHeading').outerHeight()));
    }
    //set height of whole right col
    $('#wholeRightCol').height($('#whiteBorder').height()-$('#articleTitle').height()-50 - $('#amplifyHeading').outerHeight());
    

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

    function collapseOutlineBox(outlineBox){
	var heading = $(outlineBox).children()[0];
	var restText = $(outlineBox).children()[1];
        //	restText.css.addClass("clear");
        //	heading.css('border-bottom', none);
        //	restText.css('border-bottom', '2px dotted grey');
    }

    function expandOutlineBox(outlineBox){
        var heading = $(outlineBox).children()[0];
	var restText = $(outlineBox).children()[1];
	restText.removeClass("clear");
	restText.css("border-bottom", none);
	heading.css('border-bottom',  '1px solid grey');
    }

    function positionOutline(abstractOpen){
        if (abstractOpen){
            $('#outline').css("top", $('#abstractRest').position().top + $('#abstractRest').outerHeight());
            $('#outline').css('left', $('#abstractRest').position().left);
            return;
        }
        else{
            $('#outline').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight());
            
            $('#outline').css('left', $('#abstractTitle').position().left);
        }
    }

});                             // ends document.isready 
