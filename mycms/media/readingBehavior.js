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


    //green triangle highlighting
    $('.triangleOpen').hover(
        function(){
            $(this).attr("src", "/media/triangleGreen_Open.png");
        },
        function() {
            $(this).attr("src", "/media/triangleTeal_Open.png");
        }
    );

    $('.triangleClosed').hover(
        function(){
            $(this).attr("src", "/media/triangleGreen_Closed.png");
        },
        function() {
            $(this).attr("src", "/media/triangleTeal_Closed.png");
        }
    );

    
    //collapse outlinboxes
    $('.triangleClosed').click(
        function(){

                //switch to triangleOpen
            console.log('parent');
            console.log($(this).parent());
            console.log('in triangleclosed');
                var triangleOpen = $($(this).parent()).children()[1];
            console.log($(triangleOpen));
                $(triangleOpen).css("display", "inline");
                $(this).css("display", "none");

            if ($(this).parent().attr("id")=="entireAbstractBlurb"){
                //open the abstract
                $('#abstractContent').css('display', 'inline');
            }

            if ($(this).parent().attr('class')=="outlineTitle"){        
                var outlineBox = $($(this).parent()).parent();
                console.log('outlineBox');
                console.log(outlineBox);
                var outRest = $(outlineBox).children()[1]; 
                $(outRest).css('display', 'block');
            }

        }
    );

    //collapse outlinboxes
    $('.triangleOpen').click(
        function(){

                //switch to triangleClosed
            console.log('parent');
            console.log($(this).parent());
                var triangleClosed = $($(this).parent()).children()[0];
            console.log('in triangleopen');
            console.log($(triangleClosed));
                $(triangleClosed).css("display", "inline");
                $(this).css("display", "none");

            if ($(this).parent().attr("id")=="entireAbstractBlurb"){
                //open the abstract
                $('#abstractContent').css('display', 'none');
            }

            if ($(this).parent().attr('class')=="outlineTitle"){ 
                var outlineBox = $($(this).parent()).parent();
                console.log('outlineBox');
                console.log(outlineBox);
                var outRest = $(outlineBox).children()[1]; 
                $(outRest).css('display', 'none');
       
            }
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
