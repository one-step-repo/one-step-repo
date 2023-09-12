$(function () {
  $(".video-action-btn").click(function () {
    var $container = $(this).closest(".video-info-body");
    var $dropdown = $container.find(".action-dropdown-container");

    $dropdown.toggle();
  });

  $(".video-bookmark-btn").click(function () {
    var $icons = $(this).find("svg");

    $icons.toggleClass("active");
  });
});
