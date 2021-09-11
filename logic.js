'use strict';
//trunc function is used for removing decimal part
//Math.random() gives a random number b/w 0 to 1
let secretnumber=Math.trunc(Math.random()*30)+1;


document.querySelector('.b1').addEventListener('click',function(){
    
    let number=document.querySelector('.num').value;
    if(!number){
        document.querySelector('.h2').textContent=" No Number!!!";
    }
    else if(number==secretnumber){
        document.querySelector('.h2').textContent="hurry!!!! Correct Number";
    }
    else if(number<secretnumber){
        document.querySelector('.h2').textContent="Guess Higher Number";
        
    }
    else{
        document.querySelector('.h2').textContent="Guess Lower Number";
        
    }
});
