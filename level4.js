var shadowOn=true;
var gameOn=false;
			function gameOver(){
				if(gameOn==false){
					return;
				}
				alert('hello');
				 parent.document.getElementById("gameMessages").style.background="black";
				 window.setInterval(function() {toggleShadow()},100);
			} 
			function toggleShadow(){
				if(shadowOn==true){
					shadowOn=false;
					parent.document.getElementById("gameOver").style.textShadow="0px 0px red";
					parent.document.getElementById('gameOver').style.background="blue";
					parent.document.getElementById('Body1').style.background="yellow";


				}
				else{
					shadowOn=true;
					parent.document.getElementById('gameOver').style.textShadow="5px 4px red";
					parent.document.getElementById('gameOver').style.background="yellow";
					parent.document.getElementById('Body1').style.background="blue";

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