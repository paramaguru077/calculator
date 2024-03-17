// slecting the necessary element
const element = document.getElementsByTagName('li');
const screen = document.querySelectorAll('p')[0];
const clear = document.getElementsByClassName('clear')[0];
console.log(screen);
console.log(clear);

// looping the list element

for(let i=0;i<element.length;i++){
    if(element[i].innerHTML==='='){
        element[i].addEventListener('click',calculate(i));
    }
    else{
        element[i].addEventListener('click',addToCurrentValue(i));
    }
}



// higher order  function for displaying on screen

function addToCurrentValue(i){
    return function(){
        if(element[i].innerHTML==='x'){
            screen.innerHTML+='*';
        }
        else{
            screen.innerHTML+=element[i].innerHTML;
        }
    }


}

// callback function for calculating answer
function calculate(i){
    return function(){
        screen.innerHTML= eval(screen.innerHTML)
      
 
    }
 
 }

 clear.onclick =function(){
    screen.innerHTML=" ";
 }