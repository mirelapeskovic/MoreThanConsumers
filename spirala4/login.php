<!DOCTYPE HTML>
<html>
<head>

</head>

<body>
<?php

header('Content-Type: text/html; charset=utf-8');


    if(Login())
    {
        header("location:dodajNovost.php");
        alert("moze");
    }
    else
    {
        header("location:signInForma.html");
        alert("ne moze");
    }

function Login() {


    
     if(isset($_POST['Username']) && !empty($_POST['Username']) && isset($_POST['Password']) && !empty($_POST['Pasword']))
     {
         $username = trim($_POST['Username']);
         $password = trim($_POST['Password']);
         
         if(!$this->CheckLoginInTXT($username,$password))
         {
             return false;
         }
     
       
         
         $_SESSION['login_user']= $username; 
         $_SESSION['login_pass']= $password; 
         

 
      
         if(empty($_SESSION[$user]) || empty($_SESSION[$pw]))
         {
            return false;
         }
         
        return true;
     }
}


function CheckLoginInTXT($username, $passwd)
{

$pass_hash = md5($passwd, false);
$u_p = $username . " " . $pass_hash;
 

$file_admin = fopen("admin.txt", "r");
$ispis= "";
    
while(!feof($file_admin)) {
    
   $red = fgets($file_admin);
   if($u_p==$red)
   {
      return true;
   }

   else false;
}
    
fclose($file_admin);
    
}



/*
$Hash_Pw = md5 ( "adminSpirala3!", false  );
echo $Hash_Pw;
hashiran password admina je 1f15adf72cdd9bfd815654705b74cf39
username je admin
*/

?>


</body>

</html>
