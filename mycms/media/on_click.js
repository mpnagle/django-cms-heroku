var lastClicked = null; //outlineBox that was last clicked (currently on view)

$('.outlineBox').hover(
  function () {
		console.log("hovering over LAST CLICKED");
		$(this).css('background-color', 'C9EAE6');
		/*
	if (lastClicked != null && ($(lastClicked).attr('id') == $(this).attr('id'))){
		console.log("hovering over LAST CLICKED");
		$(this).css('background-color', 'C9EAE6');
	}
	else{
    	$(this).css("color", "red");//"99cc00");
	}
	*/
  }, 
  function () {
	if (lastClicked != null && ($(lastClicked).attr('id') == $(this).attr('id'))){
		$(this).css('background-color', '00CCCC');
	}
	else{
		$(this).css("background-color", '#EDEEE1');
//    	$(this).css("color", "black");
	}
  }
);


function highlightPlease(outId, artId){ //if highlight = false, put it back
	//figure out outBox after current, to update borders
	var outNum = parseInt(outId.substring(outId.indexOf('_')+1, outId.length));
	console.log('outNum in highlightPlease');
	console.log(outNum);
	var outBoxPlus = null;
	var outBoxMinus = null;
	if (outNum < $('.outlineBox').size()){
		var outBoxPlusMost = 'outline_' + (outNum+1);
		outBoxPlus = $('#' + outBoxPlusMost);
	}
	if (outNum > 1){
		var outBoxMinusMost = 'outline_' + (outNum-1);
		outBoxPlus = $('#' + outBoxMinusMost);
	}


	var artChunk = $('#' + artId);
	var outBox = $('#' + outId);
	var outBoxTitle = $(outBox.children()[0]);
	var outBoxRest = $(outBox.children()[1]);
	//article, highlight + border bullshit
	artChunk.css("background-color", '00CCCC');
	outBox.css('background-color', '00CCCC');
	outBox.css('color', 'black');
	outBoxTitle.css('border-bottom', 'none');
	outBoxRest.css("padding-bottom", '5px');

	if (outBoxPlus != null){		
		console.log('make the line ok')	;
		outBoxPlus.css('border-top', '1px solid black');
	}

	if (outBoxMinus != null){
		outBoxMinus.css('border-bottom', '1px solid black');
	}


}

function highlightNot(outId, artId){
	var artChunk = $('#' + artId);
	var outBox = $('#' + outId);
	var outBoxTitle = $(outBox.children()[0]);
	var outBoxRest = $(outBox.children()[1]);
	

	//article, highlight + border bullshit
	//TODO was it white before, make sure it still is. ok?
	artChunk.css("background-color", 'white');
	outBox.css('background-color', 'B1BBBA');
	outBoxTitle.css('border-bottom', 'none');
	outBoxRest.css("padding-bottom", '5px');
	outBoxRest.css('border-bottom', '1px solid #efefef');

	
}


$('.outlineBox').click(
    function() {
		//expand outline if it's not expanded already.
		//highlight and display pertaining section in article.
		if (lastClicked != null){
			var idLast = $(lastClicked).attr('id');
			var artIndexLast = 'art_' + idLast.substring(idLast.indexOf('_')+1, idLast.length);
			console.log('about to HIGHLIGHT...NOT');
			highlightNot(idLast, artIndexLast);
		}
	
	var restText = $($(this).children()[1]);
	//determine if outline rest is collapsed
	if (restText.height()==0){
		console.log("shit is collapsed");
		restText.removeClass("clear");//shit is collapsed
	}
	//match with art_x id
	var id = $(this).attr('id');
	var artNum = id.substring(id.indexOf('_')+1, id.length); //number
	console.log(artNum);
	var artId = 'art_' + artNum;
	
	highlightPlease(id, artId);
	
	
	//scroll art text into view
	console.log(document.getElementById(artId));
	document.getElementById(artId).scrollIntoView();
	
	lastClicked = $(this);
	
});

function updateHighlightedOutlineBox(matchingArtId){
	
	var outlineId = '#outline_' + matchingArtId.substring(matchingArtId.indexOf('_')+1, matchingArtId.length);
	
}

function detectWhichArticleChunk(){
	console.log('art_1 scrollHeight is ');
	console.log(document.getElementById('art_1').scrollTop);
	var currScroll = document.getElementById('article').scrollTop;
	$('.artPar').each(function(i, el){

		var chunkHeight = document.getElementById($(el).attr('id'));
		if (chunkHeight == currScroll) {
			updateHighlightedOutlineBox($(el).attr('id'));
		}
//		console.log("curr ScrollTop");
//		console.log($(this).scrollTop())
		if ($(this).scrollTop()==0){
//			console.log($(this).attr('id'));
		}
	});
}
	
	
detectWhichArticleChunk();
$('#article').scroll(
	function() {
	detectWhichArticleChunk();	

});
