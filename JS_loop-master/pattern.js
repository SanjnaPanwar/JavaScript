for(m=1; m <= 5; m++)
{
    for(n=1; n<=m; n++)
    {
        console.log(n,end="");
        if(n == m)
            continue;
        else
            console.log("",end="");
    }
    console.log('<br />');
}
