

// mobile munu code 
$(document).ready(function () {
 $(".hamberger").click(function () {
        $(".mobile-nav").addClass("open");
        $(".mobile-nav").removeClass("fade");
    });
    $(".times").click(function () {
      $(".mobile-nav").removeClass("open");
      $(".mobile-nav").addClass("fade");
    });
})
