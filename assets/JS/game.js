$(document).ready(function(){


// computer random
var computerRandom = computerFinal();
$("#ranScore").text(computerRandom);

function computerFinal(){
  return Math.floor((Math.random()*102) + 19);

}
   


// console.log(computerRandom());

//  Crystal Random
var starterNumber = $("#yourScore")
crystalNumber = 0;


for(var i = 0; i < 4; i++){

    var random = Math.floor((Math.random()* 12) + 1);
    // console.log(random);
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });
    $(".crystals").append(crystal);
}
// Conditional Statements

$(".crystal").on('click', function(){
    var num = parseInt($(this).attr('data-random'));
    crystalNumber += num; 
    starterNumber.text(crystalNumber);
    // console.log(crystalNumber)
   if(crystalNumber === computerRandom){
       wins.text("Wins: " + win++);
       alert("YOU WON!!!");
       resetGame();
   }else if(crystalNumber > computerRandom){
        loss.text("Losses: " + losses++);
        alert("YOU LOST!!");
        resetGame();
   }

});

var wins = $("#winner")
var loss = $("#loser")
var win= 1;
var losses = 1 ;

function resetGame() {
    num = 0;
    crystalNumber = 0;
    computerRandom = 0;

}

});