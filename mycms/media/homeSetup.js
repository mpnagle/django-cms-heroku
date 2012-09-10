$(document).ready(function() {

positionHome();

function positionHome(){
    //position amplify and innovations
    $('#amplifyHeading').css('padding-left', '50px');
    $('#innovationsWholeDiv').css('left', $('#amplifyHeading').position().left + $('#amplifyHeading').outerWidth());
    $('#innovationsWholeDiv').css('top', $('#amplifyHeading').position().top);

    

    var screenWidth = $(window).width();
    console.log('screenWidth');
    console.log(screenWidth);

    //position globe image (width = 550px)
    var mapLeft = (screenWidth*(1/2));


    console.log('setting Globe Position to ' +mapLeft);
    $('#map').css('top', '200');
    $('#map').css('left', mapLeft);

    console.log('map is');
    console.log($('#map'));
}

$(window).resize(function(){
    positionHome();
});

 
/*
var totalWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();
console.log('totalWidth amplify + innovations');
console.log(totalWidth);

$('#amplifyHeading').css('left', (screenWidth-totalWidth)/2);


$('#innovations').css('left', $('#amplifyHeading').position().left+$('#amplifyHeading').outerWidth());
*/

});
