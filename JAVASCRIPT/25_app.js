function indiaclock(){
    let timebox=new Date().toLocaleTimeString('en-us','Asia/Kolkata');
    let datebox=new Date().toLocaleDateString('en-us','Asia/Kolkata');
    let today=new Date();
    let day=today.getDay();
    let daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let daybox=daylist[day];

document.querySelector("#time").innerText=timebox;
document.querySelector("#date").innerText=datebox;
document.querySelector("#day").innerText=daybox;
}

setInterval(indiaclock,1000);






function usaclock(){
    let timebox=new Date().toLocaleString('en-us',{
        timeZone:'America/Los_Angeles',
        timeStyle:"medium",
        hourCycle:"h24"
    });
    // let datebox=new Date().toLocaleDateString('en-us',{
    //     timeZone:'America/Los_Angeles',
    //     timeStyle:"medium",
    //     hourCycle:"h24"
    // });
    // let today=new Date();
    // let day=today.getDay();
    // let daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // let daybox=daylist[day];

document.querySelector("#time1").innerText=timebox;
// document.querySelector("#date1").innerText=datebox;
// document.querySelector("#day1").innerText=daybox;
}

setInterval(usaclock,1000);