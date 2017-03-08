var menuIsHidden = true;
var width = $(window).width();
var height = $(window).height();

$(document).ready(function(){
   $("#menu").hide();
   $("#pageTitle").hide().fadeIn(500);
   $("#menuIcon").click(function() {
      //$("#menu").toggle(500, "swing");
      if(menuIsHidden) {
        $("#menu").show(500, "swing");
        //$('.iconHeader a'.css('color', "white");
        menuIsHidden = false;
      }else{
        $("#menu").hide(500, "swing");
        menuIsHidden = true;
      }
   });
   $("#list").click(function() {
      $("#menu").hide();
   });
});

$(document).mouseup(function (e) {
    var container = $("#menu");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
         $("menu").unbind( 'click', clickDocument );
    }
});

/*$(function () {
    $(window.on('resize', function () {
      $('.slide'.css('height', $(this).height() + "px");
    });
    $(window).trigger('resize');
});*/
