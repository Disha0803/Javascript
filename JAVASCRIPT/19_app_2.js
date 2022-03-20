let rangeX=document.querySelector('#range');
let amountX=document.querySelector('#amount');

addEventListener('input',function(){
        let valueX=rangeX.value;
        amountX.innerText=valueX;
});