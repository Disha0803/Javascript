alert('If you want to know my secret play this quiz');
var ans=prompt("Wanna play...y/n");
var f=0,m=0,p=0;
while(ans=='y')
{
f=0,m=0,p=0;
var food=prompt('My fav food')
if (food=='chicken'||food=='chocolate'||food=='coffee')
f=1;
var movie=prompt('My fav movie')
if (movie=='ddlj'||movie=='razzi'||movie=='chichore')
m=1;
var place=prompt('My fav place')
if (place=='bbsr'||place=='bls'||place=='bam')
p=1;
if(f==1 && m==1 && p==1)
alert("My secret is nothing");
else
{
    alert("Sorry!!! Try again");
}
ans=prompt("Wanna play again...y/n");
}
