$(document).ready(() => {
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "80%",
    }
  );

  $(".js--scroll-to-plan").click(function () {
    $([document.documentElement, document.body]).animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-start").click(function () {
    $([document.documentElement, document.body]).animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(".js--wp-1").waypoint(
    function () {
      $(".js--wp-1").addClass("animate__animated animate__fadeInRight");
    },
    { offset: "50%" }
  );

  $(".js--wp-2").waypoint(
    function () {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );

  $(".js--wp-3").waypoint(
    function () {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-4").waypoint(
    function () {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    { offset: "50%" }
  );

  $(".js--mobile-nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--mobile-nav-icon ion-icon");

    nav.slideToggle(200);
    if (icon.attr("name") === "menu-outline") {
      icon.attr("name", "close-outline");
    } else {
      icon.attr("name", "menu-outline");
    }
  });
});

$(function () {
  $("a[href*=\\#]:not([href=\\#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);

      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );

        return false;
      }
    }
  });
});
