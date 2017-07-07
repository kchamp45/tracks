

$(document).ready(function() {
  $("form#tracks").submit(function(event) {
    event.preventDefault();
    var name = $("input#person").val();
    var exLevel = $("#experience").val();
    var location = $("#location").val();
    var purpose = $("input:radio[name=purpose]:checked").val();
    var reason = $("input:radio[name=reason]:checked").val();
    $("#thisName").text(name);

    if (exLevel === "Some computer knowledge" && location === "East Coast") {
      $("#Java").show();
      $("#Ruby").hide();
      $("#CSS").hide();
      $("#default").hide();

    } else if (purpose === "Business" || purpose === "Home") {
      $("#Java").hide();
      $("#Ruby").show();
      $("#CSS").hide();
      $("#default").hide();

    } else if (exLevel === "Complete Beginner" && location === "West Coast" && purpose === "home" && reason === "It's Fun!") {
      $("#Java").hide();
      $("#Ruby").hide();
      $("#CSS").show();
      $("#default").hide();

    } else {
      $("#Java").hide();
      $("#Ruby").hide();
      $("#CSS").hide();
      $("#default").show();

    }
  });
});
