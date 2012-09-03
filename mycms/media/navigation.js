
$('#innovations').hover(
  function () {
      console.log("in hover in navigation0");
      console.log("in hover in navigation1");
      $(this).removeClass('clear');
      $(this).addClass('issueLinks');

  }, 
  function () {
    console.log("in hover in navigation2");
      $(this).removeClass('issueLinks');
      $this).addClass('clear');
}
);

