

//position amplify and innovations
var screenWidth = $(window).width();
console.log('screenWidth');
console.log(screenWidth);
var totalWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();
console.log('totalWidth amplify + innovations');
console.log(totalWidth);
$('#amplifyHeading').css('left', (screenWidth-totalWidth)/2);
$('#innovations').css('left', $('#amplifyHeading').position().left+$('#amplifyHeading').outerWidth());

/*
<div id=africa>
    <canvas data-processing-sources="africaFinal.pde"></canvas>
</div>
*/
