/*
$('#article').on('scroll', function () {
    $('#reference').scrollTop($(this).scrollTop());
});
*/

//position bg and border
var border_width = 10;
var window_width = $(window).width();
$('#bg').css("width", window_width);
var whiteWidth = $("#whiteBorder").width();
var white_left = (window_width - whiteWidth) / 2;
$("#whiteBorder").css("left", white_left);

//position outline (relative to whiteBorder)
var borderPos = $('#whiteBorder').position();
$('#outline').css("top", borderPos.top + border_width);
$('#outline').css("left", borderPos.left);

//position article title
$('#articleTitle').css("top", borderPos.top + border_width);
$('#articleTitle').css('left', $('#outline').position().left + $('#outline').outerWidth());

//position article 
$('#article').css("top", $('#articleTitle').position().top + $('#articleTitle').outerHeight());
$('#article').css("left", $('#articleTitle').position().left);
$('#article').css("height", $('#whiteBorder').height()-2*(border_width)-27);

//position reference col
$("#reference").css("top", borderPos.top + border_width);
$('#reference').css("left", $('#article').position().left + $('#article').outerWidth());
$('#reference').css("height", $('#article').outerHeight()-75);
$('#reference').css("width", '300px');


//setup outline, initialize w/ padding.
var outlineHeight = 0;
$('.outlineBox').each(function(i, el) {
	var size = $(el).outerHeight();
	outlineHeight += size;
});

console.log("outlineHeight");
console.log(outlineHeight);
if (outlineHeight + (2 * (border_width)) < $('#whiteBorder').height()) {
	console.log("setting to outlineHeight");
	$('#outline').css("height", outlineHeight);
	
//	('#outline').css("overflow", "hidden");
	
} else {
	console.log("setting to white border height");
	$('#outline').css("height", $('#whiteBorder').height() - 2 * (border_width));
	//collapse all rest texts and only display title.
	collapseOutlineRest();
//	$('#outline').css("overflow", "scroll");
}


//alternate background colors for lines of outline
//hide see more outlineRest's
console.log(outlineHeight);
console.log($('#outline').height());


$('#outline').children().each(
  function(index){
		if (index ==2){
			$(this).css('background-color', 'white');
			$($(this).children()[0]).css('border-bottom', 'none');
		}
		if (index ==1){
			$($(this).children()[0]).css('border-bottom', 'none');
		}
      var restText = $($(this).children()[1]);
//            restText.addClass("clear");
	$($(this).children()[0]).css('border-bottom', 'none');
	$($(this).children()[1]).css('border-bottom', '1px solid black');
	
   

		
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
    console.log("I think the Artical is shorter than the reference column.");
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


