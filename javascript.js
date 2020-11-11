$(document).ready(function() {
    $('#search').click(function(){
    $("#game-text").val() == "";
    //get the text value
    var user = $("#game-text").val().trim();  
    today(user);
    
});


// 
function today(user){
    $.ajax({
        method: "GET",
        url: "https://www.cheapshark.com/api/1.0/deals?title="+user
    
    }).then ( function(data) {
        console.log(data);
        $("#today").empty();
    });


};
});
