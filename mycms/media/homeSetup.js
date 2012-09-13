$(document).ready(function() {
    $('#homeSlate').height($('#innovIndex').outerHeight()+$('#amplifyHome').outerHeight()+$('.volHeading').height());
    $('#amplifySpiel').height($('#homeSlate').height()-$('#amplifyHome').outerHeight());

    $('.homeArtTitle').each(function(i){
        console.log('about to fade in');
        $(this).fadeIn('slow');

    });
 
/*
var totalWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();


$('#amplifyHeading').css('left', (screenWidth-totalWidth)/2);


$('#innovations').css('left', $('#amplifyHeading').position().left+$('#amplifyHeading').outerWidth());
*/

});
