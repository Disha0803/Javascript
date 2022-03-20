let pass=document.querySelector("#password");
let cb=document.querySelector("#checkbox");
cb.addEventListener('change',function(){

    // alert('gh')

    let getAttribute=pass.getAttribute('type');
    if(getAttribute=='password'){
        pass.setAttribute('type','text');
    }
    else{
        pass.setAttribute('type','password');
    }
})


