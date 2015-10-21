/*

My Custom Popup JS(JQuery)
============

Author:  Art Aksenovs
Updated: October 2015
Notes:	 

*/
$(function() {
	$('#alertMe').click(function(e) {
		e.preventDefault();
		$('#successAlert').slideDown();
	});
});
	
