$(document).ready(function(){

var reStart = function(){
    $(".crystals").empty();
    $("#yourScore").empty();

    var image = ["assets/images/diamond-image.jpg",
                 "assets/images/emerald_green.jpg" ,
                "assets/images/ruby-oval-red.jpg",
                "assets/images/yellowjewel.jpg"]



// computer random
computerRandom = Math.floor((Math.random()*120) + 19);
    while (computerRandom > 120){
        computerRandom = Math.floor((Math.random()*120) + 19);
    }
 $("#ranScore").text(computerRandom);
// console.log(computerRandom());

//  Crystal Random

for(var i = 0; i < 4; i++){

    var randomCrystalNum = Math.floor((Math.random()* 12) + 1);
    // console.log(random);
       
        var crystal = $("<img>");
            crystal.attr({
                "class": 'crystal',
                "numberRandom": randomCrystalNum,
                "src": image[i],
        });
        
    
    $(".crystals").append(crystal);
}
}
// Conditional Statements
reStart();
$(document).on('click',".crystal", function(){
    var addCrystalRandom = parseInt($(this).attr('numberRandom'));
    playerScore += addCrystalRandom; 
    $("#yourScore").text(playerScore);
    // console.log(playerScore)
   if(playerScore === computerRandom){
       wins.text("Wins: " + ++win);
       playerScore = 0;
       alert("YOU WON!!!");
       reStart();
      
   }else if(playerScore > computerRandom){
        loss.text("Losses: " + ++losses);
        playerScore = 0;
        alert("YOU LOST!!");
        reStart();
       
   }

});


var playerScore = 0;

var wins = $("#winner")
var loss = $("#loser")
var win = 0;
var losses = 0;
});     