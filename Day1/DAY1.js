function register()
{
    let x=document.getElementById("user").value 
    let m=document.getElementById("pwd").value 
    let n=document.getElementById("cpwd").value 
    if(confirm("sure ?"))
    {
        if(m==n)
        {
            alert("Password matched !")
        }
        else{
            alter("Not matched")
        }
    }
    else{
        alter("failed")
    }

    alert("Registered ! "+x);
}
