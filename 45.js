
const value = document.querySelector('#val');
const add = document.querySelector('#increment');
const sub = document.querySelector('#decrement');

let counter = 0;

add.addEventListener('click',(e)=>{
    
    counter += 1;
    value.textContent = `  ${counter}` 
});

sub.addEventListener('click',(e)=>{
    
    counter -= 1;
    value.textContent = `    ${counter}` 
});





