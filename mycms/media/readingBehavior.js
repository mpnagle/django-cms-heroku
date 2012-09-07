var lastClicked = null; //outlineBox that was last clicked (currently on view)

$('.outlineBox').hover(
  function () {
		$(this).css('background-color', 'C9EAE6');

  }, 
  function () {
	if (lastClicked != null && ($(lastClicked).attr('id') == $(this).attr('id'))){
		$(this).css('background-color', '00CCCC');
	}
	else{
		$(this).css("background-color", '#EDEEE1');
	}
  }
);


function highlightPlease(outId, artId){ //if highlight = false, put it back
	//figure out outBox after current, to update borders
	var outNum = parseInt(outId.substring(outId.indexOf('_')+1, outId.length));
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
	outBox.css('background-color', 'EDEEE1');
	outBoxTitle.css('border-bottom', 'none');
	outBoxRest.css("padding-bottom", '5px');
	outBoxRest.css('border-bottom', '1px solid grey');

	
}


$('.outlineBox').click(
    function() {
		//expand outline if it's not expanded already.
		//highlight and display pertaining section in article.
        console.log('lastClicked');
        console.log(lastClicked);
        console.log('this');
        console.log($(this));
        if (lastClicked == $(this)){
            console.log("exiting click");
            return;
        }
		if (lastClicked != null){
                    console.log("cleaning up lastClicked");
			var idLast = $(lastClicked).attr('id');
			var artIndexLast = 'art_' + idLast.substring(idLast.indexOf('_')+1, idLast.length);
			highlightNot(idLast, artIndexLast);
		}
	
	var restText = $($(this).children()[1]);
	//determine if outline rest is collapsed
	if (restText.height()==0){
		restText.removeClass("clear");//shit is collapsed
	}
	//match with art_x id
	var id = $(this).attr('id');
	var artNum = id.substring(id.indexOf('_')+1, id.length); //number
	var artId = 'art_' + artNum;
	
        
	highlightPlease(id, artId);
	
	
	//scroll art text into view
        
        console.log("art_x is ");
        console.log($('#'+artId));
	var artHeight = $('#'+artId).offset().top;
        console.log("art_x offset.top is ");
        console.log(artHeight); 
	$('#article').scrollTop(artHeight);


//	document.getElementById(artId).scrollIntoView();
	
	lastClicked = $(this);
	
});

var currentlyReading = null; //outlineBox of what is being read

function showCurrentlyReading(matchingArtId){
	var outlineId = '#outline_' + matchingArtId.substring(matchingArtId.indexOf('_')+1, matchingArtId.length);
	$(outlineId).css('background-color', 'FFFFFF');
//	($(outlineId)).css('background-color', 'white');
//	$(outlineId).css('border-bottom', 'none'); for outline title not box
	
	
	if (currentlyReading != null){
		//update what we were reading, to outline bg color
		$(currentlyReading).css('background-color', 'EDEEE1');
//		$(currentlyReading).css('border-bottom', '1px solid black'); //really of outlineTitle
		
	}
	currentlyReading = $(outlineId);
	
}

function detectWhichArticleChunk(){
	var currScroll = document.getElementById('article').scrollTop;

	$('.artPar').each(function(i, el){
		var chunkHeight = document.getElementById($(el).attr('id')).scrollHeight;
		if (Math.abs(chunkHeight-currScroll) <= 70) {
			console.log('detected an outline we should highlight');
			showCurrentlyReading($(el).attr('id'));
		}
		if ($(this).scrollTop()==0){
		}
	});
}
	
	
detectWhichArticleChunk();
$('#article').scroll(
	function() {
	detectWhichArticleChunk();	

});
