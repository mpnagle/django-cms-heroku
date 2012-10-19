$(document).ready(function(){   // 
    var outlineMinTop = $('#outline').offset().top; //update if
    //abstract collapsed

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
    
    
    $('.outlineTitle').click(
	function() {
            var outlineBox = $(this).parent();

	    //highlight and display pertaining section in article.
            if (lastClicked != null && $(lastClicked).attr('id') == $(outlineBox).attr('id')){
		return;
            }

	    else if (lastClicked != null){
		var idLast = $(lastClicked).attr('id');
		var artIndexLast = 'art_' + idLast.substring(idLast.indexOf('_')+1, idLast.length);
		highlightNot(idLast, artIndexLast);
	    }
            
            lastClicked = outlineBox;

	    //match with art_x id
	    var id = $(outlineBox).attr('id');
	    var artNum = id.substring(id.indexOf('_')+1, id.length); //number
	    var artId = 'art_' + artNum;

            
	    highlightPlease(id, artId);

	    //scroll art text into view
            var art = $('#' + artId); 


            //make sure art is not null
            if (art.length==0){
                return false;
            }

            $('body').animate({
                scrollTop: art.position().top
            }, 300);

            //anchor outline exception
            if ($('body').scrollTop() <= outlineMinTop &&
               $('#outline').offset().top > outlineMinTop){
                $('#outline').offset({ top: outlineMinTop });
            }

	    
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
            var triangleOpen = $($(this).parent()).children()[1];
            $(triangleOpen).css("display", "inline");
            $(this).css("display", "none");

            if ($(this).parent().attr("id")=="entireAbstractBlurb"){
                //open the abstract
                $('#abstractContent').css('display', 'inline');

                //update outlineMinTop
                outlineMinTop += $('#abstractRest').height();

            }

            if ($(this).parent().attr('id')=="triangles"){        
                var outlineBox = $($(this).parent()).parent();
                var outRest = $(outlineBox).children()[2]; 
                $(outRest).css('display', 'block');
            }

        }
    );

    //collapse outlinboxes
    $('.triangleOpen').click(
        function(){

                //switch to triangleClosed
                var triangleClosed = $($(this).parent()).children()[0];
                $(triangleClosed).css("display", "inline");
                $(this).css("display", "none");

            if ($(this).parent().attr("id")=="entireAbstractBlurb"){
                //update outlineMinTop
                outlineMinTop -= $('#abstractRest').height();

                //close the abstract
                $('#abstractContent').css('display', 'none');

            }

            if ($(this).parent().attr('id')=="triangles"){ 
                var outlineBox = $($(this).parent()).parent();
                var outRest = $(outlineBox).children()[2]; 
                $(outRest).css('display', 'none');
       
            }
        }
    );




    $('.collapse').click(
        function(){
            //swap to expand all link
            $(this).css("display", "none");
            var expand = $($(this).parent()).children()[1];
            $(expand).css("display", "block");

            //collapse all rest of outline boxes
            $('.outlineBox').each(function(i){
                //get outRest
                var outRest = $(this).children()[2];
                $(outRest).css('display', 'none');

                var triangles = $(this).children()[0];
                var triangleOpen = $(triangles).children()[1];
                $(triangleOpen).css("display", "none");
                var triangleClosed = $(triangles).children()[0];
                $(triangleClosed).css("display", "inline");

            });


        }
    );

    $('.expand').click(
        function(){
            //swap to collapse link
            $(this).css("display", "none");
            var collapse = $($(this).parent()).children()[0];
            $(collapse).css("display", "block");

            //expand all outline boxes + flip the triangles
            $('.outlineBox').each(function(i){
                //get outRest
                var outRest = $(this).children()[2];
                $(outRest).css('display', 'block');

                var triangles = $(this).children()[0];
                var triangleOpen = $(triangles).children()[1];
                $(triangleOpen).css("display", "inline");
                var triangleClosed = $(triangles).children()[0];
                $(triangleClosed).css("display", "none");
                
            });

        }
    );


    //make outline persistant.
    $(window).scroll(function() {
        var offsetPreOutline = 20;
        if ($('body').scrollTop() + offsetPreOutline  > $('#outline').offset().top){
            $('#outline').offset({ top: $('body').scrollTop()-offsetPreOutline});
        }
        else{
            if ($('#outline').offset().top != outlineMinTop){
                $('#outline').offset({ top: outlineMinTop });
            }
        }
    });

    
    });                         // ends document.ready
