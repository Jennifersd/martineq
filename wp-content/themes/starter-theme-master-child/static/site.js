jQuery(document).ready(function(){

var estado = 0;
// jQuery(".nav-main ul li a").click(function() {
// 	jQuery("#hamburger").toggleClass('open');

// jQuery("#bg-menu-mobile").delay(300).animate({
//       top: 0,
//       right: "-100%"
//     }, {
//       duration: 650,
//       easing: "easeInOutStrong"
//     });

// });



jQuery("#hamburger").click(function() {

  jQuery(this).toggleClass('open');

  var delay_time = 0;

  if (estado === 0) {
    jQuery("#bg-menu-mobile").animate({
      top: 0,
      right: 0
    }, {
      duration: 520,
      easing: "easeInOutStrong"
    });

    /*
    jQuery("ul").delay(50).animate({
      top:"50px", 
      left:"40px"
    }, { duration:640, easing:"easeInOutStrong" });
    */

    jQuery(".nav-main li").each(function() {

    	jQuery(".nav-main ul").delay(delay_time).animate({
        "left": "0px",
      }, {
        duration: 720,
        easing: "easeInOutStrong"
      });
      jQuery(this).delay(delay_time).animate({
        "left": "40px",
        opacity: 1
      }, {
        duration: 720,
        easing: "easeInOutStrong"
      });
      delay_time += 25;
    });
    estado = 1;
  } else {
    // 
    jQuery("#bg-menu-mobile").delay(300).animate({
      top: 0,
      right: "-100%"
    }, {
      duration: 650,
      easing: "easeInOutStrong"
    });

    /*
    jQuery("ul").animate({
      top:"50px", 
      left:"100%"
    }, { duration:450, easing:"easeInOutStrong" });
    */

    jQuery(".nav-main li").each(function() {
      jQuery(this).delay(delay_time).animate({
        "left": "100%",
        opacity: 0
      }, {
        duration: 720,
        easing: "easeInOutStrong"
      });
      delay_time += 20;
    });
    estado = 0;
  }

});

});