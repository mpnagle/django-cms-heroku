$(document).ready(function() {

    /*
      $('#reference').on('scroll', function () {
      $('#article').scrollTop($(this).scrollTop());
      });
    */

    //position bg and border
    var border_width = 10;
    var window_width = $(window).width();
    var whiteWidth = $("#whiteBorder").width();
    var white_left = (window_width - whiteWidth) / 2;
    $("#whiteBorder").css("left", white_left);
    var borderPos = $('#whiteBorder').position();

    //position amplify           
    $('#amplifyHeading').css('left', $('#whiteBorder').position().left);
    $('#amplifyHeading').css('top', $('#whiteBorder').position().top);

    $('#innovationsWholeDiv').css('left', $('#amplifyHeading').position().left + $('#amplifyHeading').width());
    $('#innovationsWholeDiv').css('top', $('#amplifyHeading').position().top);



    console.log('whole right col left')
    console.log($('#wholeRightCol').position().left);
    console.log('article title left');
    console.log($('#articleTitle').position().left);
    $('#articleTitle').css('padding-right', ($('#articleTitle').position().left-$('#wholeRightCol').position().left));

//    var ampInnovWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();
  //  $('#amplifyHeading').css("left", white_left);
    




    //position article and abstract title
//    $('#articleTitle').css("top", borderPos.top + border_width);
    console.log('abstractTitle height');
    console.log($('#abstractTitle').height());
//    $('#abstractTitle').css("top", borderPos.top + border_width);
//    $('#abstractTitle').css("left", borderPos.left+border_width);
//    $('#abstractTitle').css("height", $('#articleTitle').outerHeight());
    console.log('article title height');
    console.log($('#articleTitle').height());
//    $('#articleTitle').css('left', $('#abstractTitle').position().left + $('#abstractTitle').outerWidth());





    //position innovations left based on article title






    //position abstract and article

    //position whoelLeft
    $('#wholeLeftCol').css('left', $('#abstractRest').position().left);
    $('#wholeLeftCol').css('top', $('#abstractRest').position().top);


    //position outline  (at setup abstract is expanded)
    positionOutline(true);

    //position article beneath abstracTitle (so that it doesn't matter
    //whether abstract is expanded or not
    //**also set ywholeRightCol div
    // $('#article').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight()); 
    // $('#article').css("left", $('#articleTitle').position().left);

/*

    $('#wholeRightCol').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight()); 
    $('#wholeRightCol').css("left", $('#articleTitle').position().left);
*.
    





    $('#wholeRightCol').height($('#whiteBorder').height()-($('#wholeRightCol').position().top - borderPos.top) - border_width- 20); //20=padding top + bottom for article

    $('wholeRightCol').height($('#whiteBorder').height()-$('#articleTitle').outerHeight()-2*(border_width));






    //position issueLinks
    $('#allIssueLinks').css('top', borderPos.top);
    $('#allIssueLinks').css('left', $('#article').position().left);
    $('#allIssueLinks').width($('#whiteBorder').width()-($('#article').position().left-borderPos.left));
    $('#allIssueLinks').height($('#abstractTitle').outerHeight() + border_width);


    //setup outline, initialize w/ padding.
    var outlineHeight = 0;
    $('.outlineBox').each(function(i, el) {
	var size = $(el).outerHeight();
	outlineHeight += size;
    });


    if (outlineHeight + (2 * (border_width)) >= $('#whiteBorder').height()) {
	//collapse all rest texts and only display title.
	$('#outline').children().each(function(index){
	    collapseOutlineBox($(this));
	});

    }

    //create white space in smaller div (art or ref), so that scrollHeight is "equal"
    var totalArtHeight = document.getElementById("article").scrollHeight;
    var totalRefHeight = document.getElementById("reference").scrollHeight;
    if (totalArtHeight > totalRefHeight){
        document.getElementById("refWhiteSpace").style.height = 
	    (totalArtHeight - totalRefHeight) + 'px';
    }

    else if (totalRefHeight < totalArtHeight){
        console.log(" ERROR? I think the Artical is shorter than the reference column.");
        document.getElementById("artWhiteSpace").style.height = 
	    (totalRefHeight - totalArtHeight) + 'px';
    }


    //SET currentCategory and currentArticle id's for hover nav. 



    //align reference column footnotes with where they appear in article text
    //this shit is broken right now because django doesn't play nice w/
    //html5 and custom data attributes are an html5 thing
    /*
      $('[data-foot="article"]').each(
      function(index){
      console.log("reference spacing script running");
      var curr_data_ref = $('[data-foot="ref"]').eq(index);
      art_offset_top = $(this).offset().top;
      ref_left_offset = curr_data_ref.offset().left;
      ref_left_offset = curr_data_ref.offset().left;
      curr_data_ref.offset({top:art_offset_top, left:ref_left_offset});
      });
    */

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
            console.log(refText);
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
