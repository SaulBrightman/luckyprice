$(document).ready(function() {

    moment().format("ll")
    let currentDate= moment().format("ll");
    console.log(currentDate) 
    $("#DT").text(currentDate);
    $('#search').click(function(){
    $("#game-text").val() == "";
    //get the text value
    var user = $("#game-text").val().trim();  
    today(user);
    
});
$('#store-list').click(function(){
    $.ajax({
        method:"GET",
        url: "https://www.cheapshark.com/api/1.0/stores"
    }).then(function(data) {
        console.log(data);
    })
    $("#store-text").val() == "";
});

storeCreator = (gameStores) => {

}

today = (user) => {
    $.ajax({
        method: "GET",
        url: "https://www.cheapshark.com/api/1.0/deals?title="+user
    }).then(function(data) {
        console.log(data);
        $("#display").empty();
        $("#retail").empty();
        $("#rating-text").empty();
        $("#rating-count").empty();
        let ratingPercent = data[1].steamRatingPercent;
        let ratingText = data[1].steamRatingText;
        let percentDiv = $('<p>').text( ratingPercent + " % " + ratingText + " - STEAM");
        $("#rating-text").append(percentDiv);
        let ratingCount = data[1].steamRatingCount;
        let countDiv = $('<p>').text("Rated By : " + ratingCount + " Gamers");
        $('#rating-count').append(countDiv);
        var normalPrice = data[1].normalPrice;
        let oldP =$('<p>').text("Retail : " + normalPrice);
        $(oldP).addClass("cut")
        $("#retail").append(oldP);
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
        
        var gameObject= {
            normalPrice: data[1].normalPrice,
                    gameTitle: data[1].title,
                    gamePrice: data[1].salePrice,
                    gameImage: data[1].thumb
                }
            
            
                 localStorage.setItem("storageTi2", JSON.stringify(gameObject ));
                 let storageTi= localStorage.getItem("storageTi2");
                console.log (JSON.parse(storageTi)); 
    });




};
});
