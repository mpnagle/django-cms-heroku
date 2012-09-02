var lastClicked = null; //outlineBox that was last clicked (currently on view)

$('.outlineBox').hover(
  function () {
    $(this).css("color", "red");//"99cc00");
  }, 
  function () {
    $(this).css("color", "black");
  }
);


$('.outlineBox').hover(
  function () {
    $(this).css("color", "red");//"99cc00");
  }, 
  function () {
    $(this).css("color", "black");
  }
);

function highlightPlease(outId, artId){ //if highlight = false, put it back
	//figure out outBox after current, to update borders
	outNum = parseInt(outId[outId.length-1]);
	var outBoxPlus = null;
	var outBoxMinus = null;
	if (outNum < $('.outlineBox').size()){
		var outBoxPlusMost = outId.substring(0, outId.length-1) + (outNum+1);
		outBoxPlus = $('#' + outBoxPlusMost);
	}
	if (outNum > 1){
		var outBoxMinusMost = outId.substring(0, outId.length-1) + (outNum-1);
		outBoxPlus = $('#' + outBoxMinusMost);
	}


	var artChunk = $('#' + artId);
	var outBox = $('#' + outId);
	var outBoxTitle = $(outBox.children()[0]);
	var outBoxRest = $(outBox.children()[1]);
	//article, highlight + border bullshit
	artChunk.css("background-color", '00CCCC');
	outBox.css('background-color', '00CCCC');
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
	outBox.css('background-color', 'E6E3DC');
	outBoxTitle.css('border-bottom', 'none');
	outBoxRest.css("padding-bottom", '5px');
	outBoxRest.css('border-bottom', '1px solid #efefef');

	
}


$('.outlineBox').click(
    function() {
		//expand outline if it's not expanded already.
		//highlight and display pertaining section in article.
		if (lastClicked != null){
			var id = $(lastClicked).attr('id');
			var artIndex = 'art_' + id[id.length-1];
			console.log('about to HIGHLIGHT...NOT');
			highlightNot(id, artIndex);
		}
	
	var restText = $($(this).children()[1]);
	//determine if outline rest is collapsed
	if (restText.height()==0){
		console.log("shit is collapsed");
		restText.removeClass("clear");//shit is collapsed
	}
	//match with art_x id
	var id = $(this).attr('id');
	var artIndex = 'art_' + id[id.length-1];
	
	highlightPlease(id, artIndex);
	
	
	//scroll art text into view
	console.log(document.getElementById(artIndex));
	document.getElementById(artIndex).scrollIntoView();
	
	lastClicked = $(this);
	
	});


	
