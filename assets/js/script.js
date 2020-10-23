// select the list and add line through effect 
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delet a task 
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//add new todo list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todo + " </li>");
    }
});
