// select the list and add line through effect 
$("li").click(function(){
    $(this).toggleClass("completed");
});

//delet a task 
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
