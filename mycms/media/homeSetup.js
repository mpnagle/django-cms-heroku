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
           issueTitle = $(this).closest('.issueTitle');
           issueTitle.css({opacity: 1.0});
       },

       function() { 
           categoryLi = $(this).closest('li.innovCategory');
           categorySpan = categoryLi.children('span');
           categorySpan.css({opacity: 0.35});
           volLi = $(this).closest('li.volHeading');
           volSpan = volLi.children('span');
           volSpan.css({opacity: 0.35});
           issueTitle = $(this).closest('issueTitle');
           issueTitle.css({opacity: 0.35});

       }
       );

    $('.homeArtTitle').click(
        function(){
            //go to the link
            var currLink = $(this).children()[1];
            window.location = currLink;
        }
    );

});
