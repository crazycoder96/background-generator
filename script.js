var p1bt = document.querySelector("#p1");
var p2bt = document.querySelector("#p2");
var res = document.querySelector("#res");
var p1Score =0;
var p2Score = 0;
var gameOver =false ;
var winningScore =5;
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");

res.addEventListener("click" , function(){
	p1Score=0;
	p2Score =0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver =false ;
});
p1bt.addEventListener("click" , function(){
		if(!gameOver)
		{
	p1Score++;
	if(p1Score == winningScore)
	{
		alert("Game Over ");
		gameOver =true;
	}
	p1Display.textContent = p1Score;
		}
});
p2bt.addEventListener("click" , function(){
	if(!gameOver)
	{
	p2Score++;
	if(p2Score == winningScore)
	{
		alert("gameOver");
			gameOver = true;
	}
	p2Display.textContent = p2Score;

}
});