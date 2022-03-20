let ibox=document.querySelector("#input");
let bt=document.querySelector("#btn");
let res=document.querySelector("#result");
bt.addEventListener("click",function(){
    let w=ibox.value;
    let r="";
    for(let i=w.length-1;i>=0;i--){
       r+=w[i]; 
    }
    if(w==r)
    res.innerText="Yes, it is a Palindrome";
    else
    res.innerText="No, it is not a Palindrome";
})