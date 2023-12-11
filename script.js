'use strict'
let scores=document.querySelector('#score');
let Lower=document.querySelector('.btn-low');
let add=document.querySelector('.btn-add');
let reset=document.querySelector('.btn-reset');
//to increment the value of th counter
let score=0;
add.addEventListener('click',function(){
    score++;
  
    scores.textContent=score;
  
 
    if(score>0){
        document.getElementById('score').style.color="green";
    }
    else if(score<0){
        document.getElementById('score').style.color="red";
    }
    else if(score==0){
        document.getElementById('score').style.color="black";
    }
    
});
//to decrement the value of the counter
Lower.addEventListener('click',function(){
    score--;
    scores.textContent=score;
        //    document.getElementById('score').style.color="red";

    if(score>0){
        document.getElementById('score').style.color="green";
    }
    else if(score<0){
        document.getElementById('score').style.color="red";
    }
    else if(score==0){
        document.getElementById('score').style.color="black";
    }

});
//to reset the value of the counter
reset.addEventListener('click',function(){
    score=0;
    scores.textContent=score;//we do this because we neeed to print this on html
   document.getElementById('score').style.color="black";
});

















