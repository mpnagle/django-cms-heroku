
$('#innovations').hover(
  function () {
    console.log("in hover in navigation0");
    console.log("in hover in navigation1");
	$('#allIssueLinks').css("display", "block");
  }, 
  function () {
    console.log("in hover in navigation2");
	$('#allIssueLinks').css("display", "none");
	}
);
