$(document).ready(function() {

positionHome();

function positionHome(){
    //position amplify and innovations

    

    var screenWidth = $(window).width();
    console.log('screenWidth');
    console.log(screenWidth);

    //position globe image (width = 550px)
    var mapLeft = (screenWidth*(1/2));

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
