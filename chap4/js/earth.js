$(document).ready(function () {
  let $earth = $("#earth");
  $("#btnStart").click(function () {
    $earth.animate(
      {
        left: "400px",
      },
      5000
    );
  });
});
