function fun(){
    let input=document.querySelector("#input");
    let x=input.value;
    
        document.querySelector("#h1").innerText=(`${x}X1=${x*1}`);
        document.querySelector("#h2").innerText=(`${x}X2=${x*2}`);
        document.querySelector("#h3").innerText=(`${x}X3=${x*3}`);
        document.querySelector("#h4").innerText=(`${x}X4=${x*4}`);
        document.querySelector("#h5").innerText=(`${x}X5=${x*5}`);
        document.querySelector("#h6").innerText=(`${x}X6=${x*6}`);
        document.querySelector("#h7").innerText=(`${x}X7=${x*7}`);
        document.querySelector("#h8").innerText=(`${x}X8=${x*8}`);
        document.querySelector("#h9").innerText=(`${x}X9=${x*9}`);
        document.querySelector("#h10").innerText=(`${x}X10=${x*10}`);
    
}