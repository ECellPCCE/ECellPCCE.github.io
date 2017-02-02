(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  if(Cookies.get('visitedEvents') == '1') {
    $(".new").remove();
  }
});
