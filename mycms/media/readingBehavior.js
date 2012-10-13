$(document).ready(function(){   // 
    var lastClicked = null; //outlineBox that was last clicked (currently on view)

    $('.outlineBox').hover(
	function () {
	    $(this).css('background-color', '#C9EAE6');
	}, 
	function () {
	    if (lastClicked != null && ($(lastClicked).attr('id') == $(this).attr('id'))){
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
        artChunk.css('padding-left', '10px');
        artChunk.css('border-left', "solid 5px #00CCCC");
        $('#article').css('color', 'grey');
        $('#reference').css('color', 'grey');
        artChunk.css('color', 'black');
	
        //update outline: highlight + border bullshit
        outBox.css('border-right', "solid 5px #00CCCC");
        outBox.css("background-color", 'C9EAE6');
    
    }
    
    function highlightNot(outId, artId){
	var artChunk = $('#' + artId);
	var outBox = $('#' + outId);
	var outBoxTitle = $(outBox.children()[0]);
	var outBoxRest = $(outBox.children()[1]);
	
	
	//article, highlight
        artChunk.css('padding-left', '0px');
        artChunk.css('border-left', "none");
        $('#article').css('color', 'black');
        $('#reference').css('color', 'black');
        artChunk.css('color', 'grey');
	
        //update outline: highlight + border bullshit
        outBox.css('border-right', "none");
	outBox.css('background-color', 'F5F9E7');
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
            
            console.log('top of outlineBox is ' + $(this).offset().top);
            console.log('top of outlineTitle is ' + $($(this).children()[0]).offset().top);



            //expand that shit
            var outRest = $($(this).children()[1]); //title then rest
            if (outRest.css('display')=='none'){
                outRest.css('display', 'block');
            }

          console.log('top of outlineBox is ' + $(this).offset().top);
            console.log('top of outlineTitle is ' + $($(this).children()[0]).offset().top);
            
	    //match with art_x id
	    var id = $(this).attr('id');
	    var artNum = id.substring(id.indexOf('_')+1, id.length); //number
	    var artId = 'art_' + artNum;

            
	    highlightPlease(id, artId);

	    //scroll art text into view
            var art = $('#' + artId); 


            //make sure art is not null
            if (art.length==0){
                return false;
            }

                

            
            if ((art.position().top + art.height() < $('#wholeRightCol').scrollTop() ) ||
                ((art.position().top > ($('#wholeRightCol').scrollTop()+$('#wholeRightCol').height())))){
                var toScroll = $('#' + artId).position().top;

                $(window).animate({
                    scrollTop: toScroll
                    }, 3000);
  }
	    lastClicked = $(this);
	    
	});


    //collapse and expand hoverrrrr
    $('.collapse').hover(
        function() {
            $(this).css('color', '#99CC00');
            var triangleSrc = "/media/triangleUp_active.png";
            var currTriangle = $(this).children()[0];
            $(currTriangle).attr("src", triangleSrc);
        },
        function(){
            $(this).css('color', '#009DAE');
            var triangleSrc = "/media/triangleUp_inactive.png";
            var currTriangle = $(this).children()[0];
            $(currTriangle).attr("src", triangleSrc);
        }


    );
    $('.expand').hover(
        function() {
            $(this).css('color', '#99CC00');
            var triangleSrc = "/media/triangleDown_active.png";
            var currTriangle = $(this).children()[0];
            $(currTriangle).attr("src", triangleSrc);

        },
        function(){
            $(this).css('color', '#009DAE');
            var triangleSrc = "/media/triangleDown_inactive.png";
            var currTriangle = $(this).children()[0];
            $(currTriangle).attr("src", triangleSrc);
        }

    );

    $('.collapse').click(
        function(){
            //if clicked collapse/expand link
            if($(this).parent().attr('id')=="preOutline"){
                $('.outlineRest').each(function(index){

                    //put empty whitespace div in its place
/*
                    var spaceHeight = $(this).outerHeight();
                    var spaceFiller = $('<div style="background-color:red; height:' + spaceHeight + 'px; display:block"></div>');
                    console.log('spaceFIller is ' + $(spaceFiller));
                    console.log(spaceFiller);
                    console.log('parent is' );
                    console.log($(this).parent());
  */                  
                    $(this).css('display', 'none');
                    var parent = $(this).parent();
                    console.log('parent is ' + parent);
                    console.log('first child is ' + parent.children()[0]);
//                    spaceFiller.insertAfter((parent).children()[0]);
                    parent.append(spaceFiller);
                    console.log('all my children');
                    console.log($($(this).parent()).children());
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
