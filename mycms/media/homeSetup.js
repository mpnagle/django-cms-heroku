$(document).ready(function() {
    $('#homeSlate').height($('#innovIndex').outerHeight()+$('#amplifyHome').outerHeight()+24);
//    $('#amplifySpiel').height($('#homeSlate').height()-$('#amplifyHome').outerHeight());

   $('.homeArtTitle').hover(

       function() { 
           categoryLi = $(this).closest('li.innovCategory');
           categorySpan = categoryLi.children('span');
           categorySpan.css({opacity: 1.0});
           volLi = $(this).closest('li.volHeading');
           volSpan = volLi.children('span');
           volSpan.css({opacity: 1.0});
       },

       function() { 
           categoryLi = $(this).closest('li.innovCategory');
           categorySpan = categoryLi.children('span');
           categorySpan.css({opacity: 0.35});
           volLi = $(this).closest('li.volHeading');
           volSpan = volLi.children('span');
           volSpan.css({opacity: 0.35});
       }
       );

    // function(){
    //     $(this).css({opacity: 0.5});
    //     var currCategory = $(this).closest('.innovCategory');
    //     currCategory.css({opacity: 0.5});
    //     var currIssue = $(this).closest('.volHeading');
    //     $(currIssue).css({opacity: 0.5});
    // },
    // function(){
    //     var currCategory = $(this).closest('.innovCategory');
    //     $(currCategory).css({opacity: 0.5});
    //     var currIssue = $(this).closest('.volHeading');
    //     $(currIssue).css({opacity: 0.5});
    // }
//  );
        

/*
var totalWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();


$('#amplifyHeading').css('left', (screenWidth-totalWidth)/2);


$('#innovations').css('left', $('#amplifyHeading').position().left+$('#amplifyHeading').outerWidth());
*/

});
