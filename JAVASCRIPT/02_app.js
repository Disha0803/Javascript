// var n=prompt('Enter a name');
// while(n!='priyanka')
// {
//     n=prompt('Enter a name');
// }
// alert("Welcome");

// var num=1
// while(num<=100)
// {
//     if(num%3==0 && num%6==0 && num%9==0)
//     console.log(num);
//     num++;
// }

var un=prompt("Enter username");
var pass=prompt("Enter your password");
var cun=prompt("Confirm username");
var cpass=prompt("Confirm your password");
while(cun!=un)
{
    
    alert("Try again")
    if(cpass!=pass)
    {
        alert("Wrong Password!!!");
        cpass=prompt("Confirm your password");
    }
    else
    {
        alert("Wrong credentials!!!");
        cun=prompt("Confirm username");
        cpass=prompt("Confirm your password");
    }
    
}
while(cpass!=pass)
{
    
    alert("Try again")
    if(cun!=un)
    {
        alert("Wrong credentials!!!");
        cun=prompt("Confirm username");
        cpass=prompt("Confirm your password");
    }
    else
    {
        alert("Wrong Password!!!");
        cpass=prompt("Confirm your password");
    }
    
}
alert("Successfully Logged In");