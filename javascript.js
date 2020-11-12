$(document).ready(function() {
    $('#search').click(function(){
    $("#game-text").val() == "";
    //get the text value
    var user = $("#game-text").val().trim();  
    today(user);
    
});
$('#list').click(function(){
    $.ajax({
        method:"GET",
        url: "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=75"
    }).then(function(data) {
        console.log(data);
    })
});
today = (user) => {
    $.ajax({
        method: "GET",
        url: "https://www.cheapshark.com/api/1.0/deals?title="+user
    }).then(function(data) {
        console.log(data);
        $("#display").empty();
        let gameTitle = data[1].title;
        let pOne = $('<p>').text("Title : " + gameTitle);
        $("#display").append(pOne);
        $("#price").empty();
        let gamePrice = data[1].salePrice;
        let pTwo = $('<p>').text("Price : " + gamePrice);
        $("#price").append(pTwo);
        $("#image").empty();
        let gameImage = data[1].thumb;
        let pThree = $('<img>').attr('src', gameImage);
        $('#image').append(pThree);
    });


};
});
