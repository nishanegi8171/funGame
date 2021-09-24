'use strict';
//trunc function is used for removing decimal part
//Math.random() gives a random number b/w 0 to 1
let secretnumber=Math.trunc(Math.random()*30)+1;
let attempt=15;
let highscore=0;

document.querySelector('.b1').addEventListener('click',function(){

    let number=document.querySelector('.num').value;
    if(!number){
        document.querySelector('.h2').textContent=" No Number!!!";
    }
    else if(number==secretnumber){
         document.querySelector('.h2').textContent="hurray!!!! Correct Number";
         document.querySelector('.secretnumber').textContent=secretnumber;
         document.querySelector('.secretnumber').style.background="greenyellow";
         document.body.style.backgroundImage="url(img/happy.jpg)";
         document.body.style.backgroundSize="100%";
         document.querySelector('.h2').style.color="red";
         if(attempt>highscore){
             highscore=attempt;
            document.querySelector('.highscore').textContent=highscore;
            } 
        }
            
    else if(number<secretnumber){
        if(attempt>1){
            document.querySelector('.h2').textContent="Guess Higher Number";
        attempt--;
        document.querySelector('.attempt').textContent=attempt;
        }
        else{
            document.querySelector('.h2').textContent="You Loss The Game :((((";
            document.querySelector('.attempt').textContent="0";
        } 
    }
    else{
        if(attempt>1){
            document.querySelector('.h2').textContent="Guess Lower Number";
            attempt--;
            document.querySelector('.attempt').textContent=attempt;
        }
        else{
            document.querySelector('.h2').textContent="You Loss The Game :((((";
            document.querySelector('.attempt').textContent="0";
        } 
    }
});

document.querySelector('.again').addEventListener('click',function(){

    attempt=15;
    document.querySelector('.h2').textContent="Start Guessing........";
    document.querySelector('.attempt').textContent="15";
    document.querySelector('.num').value="";
    document.body.style.backgroundImage="";
    document.querySelector('.h2').style.color="black";
    document.querySelector('.secretnumber').style.background="";
    document.querySelector('.secretnumber').textContent="?";
    secretnumber=Math.trunc(Math.random()*30)+1;

});
