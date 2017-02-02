(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  if(Cookies.get('visitedEvents') == '1') {
    $("#events-badge").removeClass("scale-in");
    $("#events-badge").addClass("scale-out");
    $("#events-badge").delay(5000).remove();
  }
});
