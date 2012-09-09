

//position amplify and innovations
var screenWidth = $(window).width();
console.log('screenWidth');
console.log(screenWidth);

//position globe image (width = 550px)
var mapLeft = (screenWidth/3)-550;


console.log('setting Globe Position to ' +mapLeft);
$('#map').css('top', '200');
$('#map').css('left', mapLeft);

console.log('map is');
console.log($('#map'));
 
/*
var totalWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();
console.log('totalWidth amplify + innovations');
console.log(totalWidth);

$('#amplifyHeading').css('left', (screenWidth-totalWidth)/2);


$('#innovations').css('left', $('#amplifyHeading').position().left+$('#amplifyHeading').outerWidth());
*/
