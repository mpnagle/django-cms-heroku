$('.outlineBox').hover(
  function () {
    $(this).css("color", "red");
  }, 
  function () {
    $(this).css("color", "black");
  }
);

$('.outlineBox').click(
	//expand outline if it's not expanded already.
	//highlight and display pertaining section in article. 
    function() {
	var restText = $($(this).children()[1]);
	//determine if outline rest is collapsed
	if (restText.height()==0){
		console.log("shit is collapsed");
		restText.removeClass("clear");//shit is collapsed
	}
	//match with art_x id
	console.log($(this));
});
// you can use .css("property", "value"); to set things






/*
// $('#OutlineBox).click(  // creating a .each for the OutlineBoxes 


function(index) {
		number = $(this).attr('id') // the number of the paragraph (I set the id to this)
		sidenote = $('li#s'+ number); // a jQuery object connected to the sidenote with the appropriate partner id

		partner_top_offset = $(this).offset().top; // the top of the paragraph I want to position my sidenote next to
		my_left_offset = sidenote.offset().left; // the current left position of the sidenote, which I want to leave unchanged

		sidenote.offset({ top: partner_top_offset, left: my_left_offset }); // do the offset
	}
)
</script>
*/
