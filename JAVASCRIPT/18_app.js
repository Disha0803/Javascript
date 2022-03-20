let selectBox=document.querySelector("#selectcity");
selectBox.addEventListener("change",function(){

let selectData=selectBox.value;

let headingData=document.querySelector("#heading2");
headingData.innerText=selectData;
});
