var randomNumber1=Math.floor(Math.random()*6)+1;//gettting tandom no from 1-6
var new_img="images\\Dice"+randomNumber1+".png";//using concatenation to generate any dice img from Dice1.png->to Dice2.png
document.querySelectorAll("img")[0].setAttribute("src",new_img);//now querySelectorALL returns a LIST,so tapping
//into the first element and modifying the contents of the src attribute.

var randomNumber2=Math.floor(Math.random()*6)+1;
var new_img="images\\Dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",new_img);

//comparing and giving the output by changing the h1 element content.
if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="💖PLAYER 1 WON!!!\n";
    document.querySelector("body").classList.add("dice1");//if player1 won,a diff background will be shown
    document.querySelector("h1").classList.add("player1");//if player1 won,the head banner will be DIFFERENT
}
else {
 document.querySelector("h1").innerHTML="💖PLAYER 2   WON!!!\n";
 document.querySelector("body").classList.add("dice2");//if player2 won,a diff background will be shown
 document.querySelector("h1").classList.add("player2");//if player2 won,the head banner will be DIFFERENT
}