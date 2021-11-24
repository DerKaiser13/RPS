let attempt = 0;
let win = false;
let previousCompPick="none";

function play(clicked_id){
    attempt+=1;
    var userPick = clicked_id;	
    var compPick = pick();
    previousCompPick = compPick;
    var result = compare(userPick,compPick);
    if(attempt<3){
        if(win==false){
            document.getElementById("demo").innerHTML+="<br>"+attempt+": The computer chose "+compPick+". "+result;
        }
        else if(win==true){
            document.getElementById("demo").innerHTML+="<br>"+attempt+": The computer chose "+compPick+". "+result;
            attempt=3;
        }
        
    }
    else if(attempt==3){
        if(win==false){
            document.getElementById("demo").innerHTML+="<br>"+attempt+": You chose "+userPick+". The computer chose "+compPick+". "+result;
        }
        else if(win==true){
            document.getElementById("demo").innerHTML+="<br>"+attempt+": You chose "+userPick+". The computer chose "+compPick+". "+result;
        }
    }
}

function pick(){
	var compPick = Math.random();
	if(compPick<0.34){
		compPick="rock";
	}
	else if(compPick<0.67){ 
		compPick="paper";
	}
	else{
		compPick="scissors";
	}
    console.log("Comp Pick = "+compPick + ", Previous Comp Pick = "+previousCompPick);
    if(compPick != previousCompPick){
        return compPick;
    }
    else{
        return pick();
    }
}

function compare(userPick,compPick){
	var result="You lose!";
	if(userPick==compPick){
		result="You draw!";
	}
	else if((userPick=="rock" && compPick=="scissors") || (userPick=="paper" && compPick=="rock") || (userPick=="scissors" && compPick=="paper")){
		result="You win!";
        win=true;
	}
	return result;
}