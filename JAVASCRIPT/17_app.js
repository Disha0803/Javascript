let e=document.querySelector("#email");
e.addEventListener("keyup",function(){
    let data=e.value;
    let h=document.querySelector("#h2");
    h.innerText=data*data;
})