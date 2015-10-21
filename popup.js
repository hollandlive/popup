/*

My Custom Popup JS(JQuery)
============

Author:  Art Aksenovs
Updated: October 2015
Notes:	 

*/
$(document).ready( function() {
    
        // When site loaded, load the Popupbox First
        loadPopupBox();
    
        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
        
        $('#container').click( function() {
            unloadPopupBox();
        });

        function unloadPopupBox() {    // This function fading out the Popupbox
            $('#popupBox').fadeOut("slow");
            $("#container").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }    
        
        function loadPopupBox() {    // Loading the Popupbox
            $('#popupBox').fadeIn("slow");
            $("#container").css({ // this is just for style
                "opacity": "0.3"  
            });         
        }        
    });
