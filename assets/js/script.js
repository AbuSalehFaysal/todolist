// select the list and add line through effect
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//delet a task
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});
//add new todo list
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    var todo = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todo + " </li>"
    );
  }
});

//plus icon toggle
$(".fa-plus-circle").click(function () {
  $("input[type='text']").fadeToggle(10);
});
