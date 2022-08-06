// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $('#site-search').on('input', function(){
    var text = $(this).val();
		$('.portfolio-card').show();    
		$('.portfolio-card:not(:contains(' + text + '))').hide();
	});
});