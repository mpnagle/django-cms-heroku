
$('#article').on('scroll', function () {
    $('#reference').scrollTop($(this).scrollTop());
});


//position bg and border
var border_width = 50;
var window_width = $(window).width();
$('#bg').css("width", window_width);
var whiteWidth = $("#whiteBorder").width();
var white_left = (window_width - whiteWidth -(border_width)) / 2;
$("#whiteBorder").css("left", white_left);

var borderPos = $('#whiteBorder').position();

//position amplify
$('#amplifyHeading').css("top", '0px');
$('#amplifyHeading').css("left", borderPos.left+border_width);

//position innovations
$('#innovations').css("top", '0px');
console.log('innovations height');
console.log($('#innovations').height());
console.log('innovations top');
console.log($('#innovations').position().top);
$('#innovations').css("left", $('#amplifyHeading').position().left + $('#amplifyHeading').outerWidth());

//position issueLinks
$('#issue1').css('top', $('#innovations').position().top + $('#innovations').height());
$('#issue1').css('left', $('#innovations').position().left);
$('#issue2').css('top', $('#innovations').position().top + $('#innovations').height()+$('#issue1').height());
console.log('issue1 height');
console.log($('#issue1').height());
$('#issue2').css('left', $('#innovations').position().left);

//position abstract
$('#abstractTitle').css("top", borderPos.top + border_width);
$('#abstractTitle').css("left", borderPos.left+border_width);
$('#abstractRest').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight());
$('#abstractRest').css("left", borderPos.left+border_width);

//position outline (relative to whiteBorder)
$('#outline').css("top", $('#abstractRest').position().top + $('#abstractRest').outerHeight());
$('#outline').css("left", borderPos.left+border_width);

//position article title
$('#articleTitle').css("top", borderPos.top + border_width);
$('#articleTitle').css('left', $('#outline').position().left + $('#outline').outerWidth());
$('#articleTitle').css('width', whiteWidth - $('#outline').outerWidth() - 2*(border_width)); 

//position article 
$('#article').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight()); //same as abstractRest top
$('#article').css("left", $('#articleTitle').position().left);
$('#article').css("height", $('#whiteBorder').height()-2*(border_width)-27);  

//position reference col
$("#reference").css("top", borderPos.top + border_width);
$('#reference').css("left", $('#article').position().left + $('#article').outerWidth());
$('#reference').css("height", $('#article').outerHeight()-75);
var totalWidth = whiteWidth;
var notReferenceWidth = $('#outline').outerWidth() + $('#article').outerWidth() + 60;

console.log('totalWidth' + totalWidth);
console.log('notRefWidth' + notReferenceWidth);
console.log(whiteWidth);
console.log($('#outline').outerWidth());
console.log($('#article').outerWidth());
$('#reference').css("width", whiteWidth - ($('#outline').outerWidth()+$('#article').outerWidth()+60+2*(border_width)));





//setup outline, initialize w/ padding.
var outlineHeight = 0;
$('.outlineBox').each(function(i, el) {
	var size = $(el).outerHeight();
	outlineHeight += size;
});

if (outlineHeight + (2 * (border_width)) < $('#whiteBorder').height()) {
	$('#outline').css("height", outlineHeight);
	
//	('#outline').css("overflow", "hidden");
	
} else {
	$('#outline').css("height", $('#whiteBorder').height() - 2 * (border_width));
	//collapse all rest texts and only display title.
	collapseOutlineRest();
//	$('#outline').css("overflow", "scroll");
}


//alternate background colors for lines of outline
//hide see more outlineRest's


$('#outline').children().each(
  function(index){
/*
		if (index ==2){
			$(this).css('background-color', 'white');
			$($(this).children()[0]).css('border-bottom', 'none');
		}
		*/
		if (index ==1){
			$($(this).children()[0]).css('border-bottom', 'none');
		}
      var restText = $($(this).children()[1]);
//            restText.addClass("clear");
	$($(this).children()[0]).css('border-bottom', 'none');
	$($(this).children()[1]).css('border-bottom', '2px dashed grey');
	
   

		
});



function collapseOutlineRest(){
	$('#outline').children().each(function(index){
	      var restText = $($(this).children()[1]);
	            restText.addClass("clear");
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


