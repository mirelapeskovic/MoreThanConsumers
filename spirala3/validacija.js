/* provjerava da li u imenu ima brojeva, nije mi palo ništa drugo na pamet */

function regex(name)
{
    var pattern = /[^0-9]/;
    return pattern.test(name);
}

function validateName()
{
    var name = document.forms["formica"]["firstName"].value;
   
    if(regex(name)==false)
        {
            document.forms["formica"]["firstName"].style.backgroundColor="darkred";
            document.forms["formica"]["firstName"].setAttribute("placeholder", "Without digits!");
            document.forms["formica"]["firstName"].value="";
        }
    else
        {
             document.forms["formica"]["firstName"].style.backgroundColor="white";
        }
}

function validatePassword()
{
     var password = document.forms["formica"]["pw1"].value;
     if (password.length<8) 
    {
       document.forms["formica"]["pw1"].style.backgroundColor="darkred";
       document.forms["formica"]["pw1"].setAttribute("placeholder", "Minimal 8 characters!");
       document.forms["formica"]["pw1"].value="";
    }
    
    else 
    {
        document.forms["formica"]["pw1"].style.backgroundColor="white";
    }
}

function validateRepeated()
{
    
    /* validacija s dva parametra */
    var password = document.forms["formica"]["pw1"].value;
    var repeatedPassword = document.forms["formica"]["pw2"].value;
    
    var equal =  password.localeCompare(repeatedPassword);
    
    if (equal!=0)
    {
         document.forms["formica"]["pw2"].style.backgroundColor="darkred";
         document.forms["formica"]["pw2"].setAttribute("placeholder", "Wrong input!");
         document.forms["formica"]["pw2"].value="";
    }
    
    else 
    {
        document.forms["formica"]["pw2"].style.backgroundColor="white";
    }
}

function validateAge()
{
     var god = document.forms["formica"]["age"].value;
     if(isNaN(god))
     {
         document.forms["formica"]["age"].style.backgroundColor="darkred";
         document.forms["formica"]["age"].setAttribute("placeholder", "Number please!");
         document.forms["formica"]["age"].value="";     
     }
    
    else
    {
        document.forms["formica"]["age"].style.backgroundColor="white";
    }
}