let textareabox=document.querySelector("#textarea");
let charbox=document.querySelector("#char");
textareabox.addEventListener('keyup',function(){
    let length=textareabox.value.length;
    charbox.innerText=50-length;
});

// let textareaBox=document.querySelector("#textarea");
// let charBox=document.querySelector("#char");

// textareaBox.addEventListener('keyup',function(){
// let length=textareaBox.value.length;
// charBox.innerText=length;
// });
