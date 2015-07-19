 	var blink=true;
	function firstCall() {
		setInterval(function(){blinkTitle()},300);
	}
	 function blinkTitle() {
	 	if(blink==true){
	 		blink=false;
	 		document.getElementById('gameTitle').style.color="Red";
	 	}
	 	else{
	 		blink=true;
	 		document.getElementById('gameTitle').style.color="Blue";
		
	 	}
	 	function parentCall(){
	 		alert('blahblahblahh');
	 		document.getElementById('gameMessages').innerHTML='BLOCK';
	 	}
	 }
	 var shadowOn=true;
	var gameOn=false;
			function gameOver(){

				if(gameOn==false){
					return;
				}
				gameOn=false;
				alert('hello');
				parent.parentCall();
				 window.parent.document.getElementById("gameMessages").style.display="block";
				 window.setInterval(function() {toggleShadow()},100);
			} 
			function toggleShadow(){
				if(shadowOn==true){
					shadowOn=false;
					document.getElementById("L5R1").style.textShadow="0px 0px red";
					document.getElementById('gameMessages').style.background="blue";


				}
				else{
					shadowOn=true;
					document.getElementById('gameMessages').style.textShadow="5px 4px red";
					document.getElementById('gameMessages').style.background="yellow";

				}
			}
			function finishLevel(){
				if(gameOn==false){
					return;
				}
				gameOn=false;
				alert("You Won!!");
			}
			function startLevel(){
				gameOn=true;
			}