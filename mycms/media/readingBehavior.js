$(document).ready(function(){   // 
    var lastClicked = null; //outlineBox that was last clicked (currently on view)

    $('.outlineBox').hover(
	function () {
            console.log("in outlinebox, about to color teal.");
	    $(this).css('background-color', 'C9EAE6');
	}, 
	function () {
	    if (lastClicked != null && ($(lastClicked).attr('id') == $(this).attr('id'))){
		$(this).css('background-color', '00CCCC');
	    }
	    else{
		$(this).css("background-color", '#F5F9E7');
	    }
	}
    );

    ///outId = out_x (outline box that matches with artChunk) artId = art_x
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
	
	//article, highlight
	artChunk.css("background-color", '00CCCC');
	
        //update outline: highlight + border bullshit
	outBox.css('background-color', '00CCCC');
	outBoxTitle.css('border-bottom', 'none');
    }
    
    function highlightNot(outId, artId){
	var artChunk = $('#' + artId);
	var outBox = $('#' + outId);
	var outBoxTitle = $(outBox.children()[0]);
	var outBoxRest = $(outBox.children()[1]);
	
	
	//article, highlight + border bullshit
	//TODO was it white before, make sure it still is. ok?
	artChunk.css("background-color", 'white');
	outBox.css('background-color', 'F5F9E7');

	
	outBoxTitle.css('border-bottom', '1px solid grey');
    }                           
    
    
    $('.outlineBox').click(
	function() {
	    //expand outline if it's not expanded already.
	    //highlight and display pertaining section in article.
            if ($(lastClicked).attr('id') == $(this).attr('id')){
		return;
            }
	    if (lastClicked != null){
		var idLast = $(lastClicked).attr('id');
		var artIndexLast = 'art_' + idLast.substring(idLast.indexOf('_')+1, idLast.length);
		highlightNot(idLast, artIndexLast);
	    }
            var outRest = $($(this).children()[1]); //title then rest
            if (outRest.css('display')=='none'){
                console.log('curr outbox is collapsed');
                //expand that shit
                outRest.css('display', 'block');
            }

	    //match with art_x id
	    var id = $(this).attr('id');
	    var artNum = id.substring(id.indexOf('_')+1, id.length); //number
	    var artId = 'art_' + artNum;
            
	    highlightPlease(id, artId);

	    //scroll art text into view
            var art = $('#' + artId); 
            
            if ((art.position().top + art.height() < $('#wholeRightCol').scrollTop() ) ||
                ((art.position().top > ($('#wholeRightCol').scrollTop()+$('#wholeRightCol').height())))){
                var toScroll = $('#' + artId).position().top;
                $('#wholeRightCol').animate({
                    scrollTop: toScroll//$('#wholeRightCol').scrollTop(toScroll);
                    }, 3000);

           }
	    lastClicked = $(this);
	    
	});

  

	    

    //collapse and expand hoverrrrr
    //TODO highligh triangle in green
    $('.collapse').hover(
        function() {
            $(this).css('color', '#99CC00');
        },
        function(){
            $(this).css('color', '#009DAE');
        }
    );
    $('.expand').hover(
        function() {
            $(this).css('color', '#99CC00');
        },
        function(){
            $(this).css('color', '#009DAE');
        }
    );

    $('.collapse').click(
        function(){
            if($(this).parent().attr('id')=="preOutline"){
                $('.outlineRest').each(function(index){
                    $(this).css('display', 'none');
                });
                //swap to expand all
                $(this).css('display', 'none');
                var expandThis = $('.expand')[1];
                $(expandThis).css('display', 'block');
            }
            else if ($(this).parent().attr('id')=="entireAbstractBlurb"){
                $('#abstractRest').css('display', 'none');
                //swap to collapse
                $(this).css('display', 'none');
                var expandThis = $('.expand')[0];
                $(expandThis).css('display', 'block');
            }
        }
    );

    $('.expand').click(
        function(){
            if($(this).parent().attr('id')=="preOutline"){
                $('.outlineRest').each(function(index){
                    $(this).css('display', 'block');
                });
                //swap to collapse all
                $(this).css('display', 'none');
                var collapseThis = $('.collapse')[1];
                $(collapseThis).css('display', 'block');
            }
            else if ($(this).parent().attr('id')=="entireAbstractBlurb"){
                $('#abstractRest').css('display', 'block');
                //swap to collapse
                $(this).css('display', 'none');
                var collapseThis = $('.collapse')[0];
                $(collapseThis).css('display', 'block');
            }

        }
    );

    

    

    });                         // ends document.ready
