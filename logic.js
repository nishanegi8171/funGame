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
        document.querySelector('.h2').textContent="hurry!!!! Correct Number";
         document.querySelector('.secretnumber').textContent=secretnumber;
         document.querySelector('.secretnumber').style.background="greenyellow";
       document.querySelector('.highscore').textContent=attempt;
       document.body.style.backgroundImage="url(img/happy.jpg)";
       document.body.style.backgroundSize="100%";
       document.querySelector('.h2').style.color="red";
       
    }
    else if(number<secretnumber){
        document.querySelector('.h2').textContent="Guess Higher Number";
        attempt--;
        document.querySelector('.attempt').textContent=attempt;
        
    }
    else{
        document.querySelector('.h2').textContent="Guess Lower Number";
        attempt--;
        document.querySelector('.attempt').textContent=attempt;
        
    }
});

document.querySelector('.again').addEventListener('click',function(){

    document.querySelector('.h2').textContent.bold="Start Guessing........";
    document.querySelector('.attempt').value=15;

});
