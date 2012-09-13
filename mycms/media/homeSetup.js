$(document).ready(function() {
    $('#homeSlate').height($('#innovIndex').outerHeight()+$('#amplifyHome').outerHeight()+$('.volHeading').height());
    $('#amplifySpiel').height($('#homeSlate').height()-$('#amplifyHome').outerHeight());

    $('.homeArtTitle').hover(
        function(){            
            console.log('about to fade in');
            $(this).css({opacity:1.0});
        },
        function(){
            console.log('about to fade out');
            $(this).css({opacity:0.5});
        }
        );

 
/*
var totalWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();


$('#amplifyHeading').css('left', (screenWidth-totalWidth)/2);


$('#innovations').css('left', $('#amplifyHeading').position().left+$('#amplifyHeading').outerWidth());
*/

});
