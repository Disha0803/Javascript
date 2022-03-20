let l=document.querySelector("#loc");
let  copy=document.querySelector("#click");
let copiedtext=document.querySelector("#ct")
l.innerText=location.href;
l.select()
copy.addEventListener("click",function(){
    document.execCommand("copy");
    
})



