var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var computer = document.querySelector('.Computer');
var Player = document.querySelector('.Player');
var winner = document.querySelector('.winner');
var pCount=0, cCount=0;
function play(playerChoice){
	if(playerChoice=="rock"){
		//alert("rock");
		Player.innerText = "Player: rock";
	}else if(playerChoice=="paper"){
		//alert("paper");
		Player.innerText = "Player: paper";
	}else if(playerChoice=="scissors"){
		//alert("scissors");
		Player.innerText = "Player: scissors";
	}
	var random = Math.floor( Math.random()*3+1);
	console.log(random);
	var computerChoice;
	if(random==1){
		computerChoice="rock";
		computer.innerText = "computer: rock";
	}else if(random==2){
		computerChoice="paper";
		computer.innerText = "computer: paper";
	}else if(random==3){
		computerChoice="scissors";
		computer.innerText = "computer: scissors";
		
	}
	if((playerChoice=="paper" && computerChoice=="rock")||(playerChoice=="rock" && computerChoice=="scissors")||(playerChoice=="scissors" && computerChoice=="paper")){
		winner.innerText="Winner: player";
		pCount++;
		pPoint.innerText="Player:"+pCount;
	}else if(playerChoice==computerChoice){
		winner.innerText="Winner: Tie!"
	}else{
		cCount++;
		cPoint.innerText="Computer:"+cCount;
		winner.innerText="Winner: computer"
	}
}
encodeURI