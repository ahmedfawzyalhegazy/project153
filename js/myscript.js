/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    // the button to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){  
        $("html, body").animate({ scrollTop: 0}, 2000);
    });
    
    
});