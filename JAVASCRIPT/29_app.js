let regbox=document.querySelector("#registration-form");
regbox.addEventListener('submit',function(event){
    event.preventDefault();
    if (validateMyForm()){
        alert('Successfullly data submitted')
    }
});
let validateMyForm=()=>{
    checkUserName();
    checkEmail();
    checkMobile();
    checkPassword();
    checkConfirmPassword();
};

let checkUserName=()=>{
    let userInputBox=document.querySelector('#username');
    let userMsgBox=document.querySelector('#username-msg');

    let regularExp=/^[a-zA-Z\-]+$/;
    if(regularExp.test(userInputBox.value)){
        successValidate(userInputBox,userMsgBox);
    }
    else
    {
        invalidValidate(userInputBox,userMsgBox);
    }
};

let checkEmail=()=>{
    let userInputBox=document.querySelector('#email');
    let userMsgBox=document.querySelector('#email-msg');

    let regularExp= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regularExp.test(userInputBox.value)){
        successValidate(userInputBox,userMsgBox);
    }
    else
    {
        invalidValidate(userInputBox,userMsgBox);
    }
};

let checkMobile=()=>{
    let userInputBox=document.querySelector('#mobile');
    let userMsgBox=document.querySelector('#mobile-msg');

    let regularExp= /^[789]\d{9}$/;
    if(regularExp.test(userInputBox.value)){
        successValidate(userInputBox,userMsgBox);
    }
    else
    {
        invalidValidate(userInputBox,userMsgBox);
    }
};

let checkPassword=()=>{
    let userInputBox=document.querySelector('#password');
    let userMsgBox=document.querySelector('#password-msg');
    var x=userInputBox.value;

    let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regularExp.test(userInputBox.value)){
        successValidate(userInputBox,userMsgBox);
    }
    else
    {
        invalidValidate(userInputBox,userMsgBox);
    }
};

let checkConfirmPassword=()=>{
    let userInputBox=document.querySelector('#c-password');
    let userMsgBox=document.querySelector('#c-password-msg');
    

    let regularExp= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regularExp.test(userInputBox.value)){
        successValidate(userInputBox,userMsgBox);
    }
    else
    {
        invalidValidate(userInputBox,userMsgBox);
    }
};

let successValidate=(userInputBox,userMsgBox)=>{
    userInputBox.classList.add('form-valid');
    userInputBox.classList.remove('form-invalid');
    userMsgBox.classList.add('text-success');
    userMsgBox.classList.remove('text-fail');

    userMsgBox.innerText="Everything fine";
};

let invalidValidate=(userInputBox,userMsgBox)=>{
    userInputBox.classList.remove('form-valid');
    userInputBox.classList.add('form-invalid');
    userMsgBox.classList.remove('text-success');
    userMsgBox.classList.add('text-fail');

    userMsgBox.innerText=`Please Enter Valid ${userInputBox.placeholder}`;
};

let usernameBox=document.querySelector("#username");

usernameBox.addEventListener('keyup',function(){
        checkUserName();
});


let emailBox=document.querySelector("#email");

emailBox.addEventListener('keyup',function(){
        checkEmail();
});



let mobileBox=document.querySelector("#mobile");

mobileBox.addEventListener('keyup',function(){
        checkMobile();
});


let passwordBox=document.querySelector("#password");

passwordBox.addEventListener('keyup',function(){
        checkPassword();
});


let cPasswordBox=document.querySelector("#c-password");

cPasswordBox.addEventListener('keyup',function(){
        checkConfirmPassword();
});


