

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

    } else if ((exLevel === "Complete Beginner" && location === "West Coast") || purpose === "Home") {
      $("#Ruby").show();
      $("#Java").hide();
      $("#CSS").hide();
      $("#default").hide();

    } else if ((exLevel === "Complete Beginner" && location === "MidWest") ||  reason === "It's Fun!") {
      $("#CSS").show();
      $("#Java").hide();
      $("#Ruby").hide();
      $("#default").hide();

    } else {
      $("#default").show();
      $("#Java").hide();
      $("#Ruby").hide();
      $("#CSS").hide();
    }
  });
});
