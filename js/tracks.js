$(document).ready(function() {
  $("form#track").submit(function() {
    var name = $("input#person").val();
    var experienceLevel = $("select#experience").val();
    var location = $("select#location").val();
    var purpose = $("input:radio[name=purpose]:checked").val();
    var reason = $("input:radio[name=reason]:checked").val();
    $(#name).text(name);
  })
})
