function Rock(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="It's a Draw!";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="You lose!";
		}			
		else{
			document.getElementById("Result").innerHTML="You Win!";
		}
}
		
function Paper(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==1){
			document.getElementById("Result").innerHTML="You Win!";
		}			
		else if (randomNum==2){
			document.getElementById("Result").innerHTML="It's a Draw!";
		}			
		else{
			document.getElementById("Result").innerHTML="You Lose!";
		}
}	
		
function Scissors(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="You Lose!";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="You Win!";
		}			
		else{
			document.getElementById("Result").innerHTML="It's a Draw!";
		}
}