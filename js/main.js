$(document).ready(function() {
   $(".bxSlider").bxSlider(); 

    $("#first-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#service").offset().  top     }, 2000);
        });
    
    $("#second-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#our-stuff").offset().  top     }, 2000);
        });
    
    $("#third-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#blog").offset().  top     }, 2000);
        });
    
    $("#fourth-anchor").click(function() {
        $('html, body').animate({
            scrollTop: $("#customers").offset().  top     }, 2000);
        });
});