function caught_speeding(speed,isBday)
{
    if(isBday)
    {
        speed=speed+5;
    }
    if (speed<=60)
    {
        return 0;
    }
    else if (speed>=61 && speed<=80)
    {
        return 1;
    }
    else
    {
        return 2;
    }
}
console.log(caught_speeding(60,false));