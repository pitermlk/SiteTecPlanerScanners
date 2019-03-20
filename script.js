// SCRIPT PARA ALTERAR COR DE MENU 

$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
        $(".first-container").addClass("first-container2");
      } else {
        $();
      }

      if($(window).scrollTop() < 100) {
        $(".first-container").removeClass("first-container2");
      } else {
        $();
      }

      
    });
  });







  
