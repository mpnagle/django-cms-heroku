
$('#reference').on('scroll', function () {
    $('#article').scrollTop($(this).scrollTop());
});


//position bg and border
var border_width = 10;
var window_width = $(window).width();
var whiteWidth = $("#whiteBorder").width();
var white_left = (window_width - whiteWidth) / 2;
$("#whiteBorder").css("left", white_left);
var borderPos = $('#whiteBorder').position();

//position amplify
$('#amplifyHeading').css("top", '60px');
var ampInnovWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();
$('#amplifyHeading').css("left", white_left);
console.log('amplify TOP');
console.log($('#amplifyHeading').position().top);

//position innovations

$('#innovations').css("left", $('#amplifyHeading').width()+$('#amplifyHeading').position().left);
$('#innovations').css('top', $('#amplifyHeading').position().top-40);


//position issueLinks
$('#issue1').css('top', $('#innovations').position().top + $('#innovations').height());
$('#issue1').css('left', $('#innovations').position().left);
$('#issue2').css('top', $('#innovations').position().top + $('#innovations').height()+$('#issue1').height());
console.log('issue1 height');
console.log($('#issue1').height());
$('#issue2').css('left', $('#innovations').position().left);

//position article and abstract title
$('#articleTitle').css("top", borderPos.top + border_width);
$('#abstract').css('top', borderPos.top + border_width);
$('#abstractTitle').css("top", borderPos.top + border_width);
$('#abstractTitle').css("left", borderPos.left+border_width + 35);//35=article padding-left
$('#abstractTitle').css("height", $('#articleTitle').outerHeight());
$('#articleTitle').css('left', $('#abstractTitle').position().left + $('#abstractTitle').outerWidth());

//position abstract and article
$('#abstractRest').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight());
$('#abstractRest').css("left", $('#abstractTitle').position().left);

//position outline  (at setup abstract is expanded)
positionOutline(true);
console.log("outline.outerwidth");
console.log($('#outline').outerWidth());

//position article beneath abstracTitle (so that it doesn't matter
//whether abstract is expanded or not
$('#article').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight()); 
$('#article').css("left", $('#articleTitle').position().left);

$('#article').height($('#whiteBorder').height()-($('#article').position().top - borderPos.top) - border_width- 20); //20=padding top + bottom for article

//position reference col next to article
$("#reference").css("top", $('#article').position().top);
$('#reference').css("left", $('#article').position().left + $('#article').outerWidth());
$('#reference').css("height", $('#article').height());
console.log('refLeft-borderLeft');
console.log(($('#reference').position().left-borderPos.left));
console.log('whiteBorder width()');
console.log($('#whiteBorder').width());
console.log('reference css padding thi ng');
console.log($('#reference').css('padding-left'));
var refWidth = $('#whiteBorder').width() - ($('#reference').position().left-borderPos.left) - border_width - 60; //60 = padding for left and right
console.log('refWidth = ');
console.log(refWidth);
$('#reference').width(refWidth);

//set outline height (with abstract open)
$('#outline').height($('#article').height()-($('#abstractRest').outerHeight()));





//setup outline, initialize w/ padding.
var outlineHeight = 0;
$('.outlineBox').each(function(i, el) {
	var size = $(el).outerHeight();
	outlineHeight += size;
});

$('#outline').css("overflow", "hidden");
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



//align reference column footnotes with where they appear in article text
$('[data-foot="article"]').each(
    function(index){
	var curr_data_ref = $('[data-foot="ref"]').eq(index);
	art_offset_top = $(this).offset().top;
	ref_left_offset = curr_data_ref.offset().left;
	ref_left_offset = curr_data_ref.offset().left;
	curr_data_ref.offset({top:art_offset_top, left:ref_left_offset});
}
)


function collapseOutlineBox(outlineBox){
	var heading = $(outlineBox).children()[0];
	var restText = $(outlineBox).children()[1];
	restText.addClass("clear");
	heading.css('border-bottom', none);
	restText.css('border-bottom', '2px dotted grey');
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
