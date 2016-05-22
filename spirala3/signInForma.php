<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet"  type="text/css" href="signInForma.css" />
    
    </head>    
    
    <body>
        
    <?php
        
    require "core.inc.php";
        
    if(isset($_POST['Username']) && !empty($_POST['Username']) && isset($_POST['Password']) && !empty($_POST['Password']))
        
    {
         if(Login($_POST['Username'], $_POST['Password']))
             header("location:dodajNovost.php");
         else
             header("location:signInForma.php");
     
    
    }
        
  

     function Login($username, $password) {
//if(isset($_POST['Username']) && !empty($_POST['Username']) && isset($_POST['Password']) && !empty($_POST['Password']))
  
   
         
         if(!CheckLoginInTXT($username,$password))
         {
           
             return false;
         }
     
         session_start();
         
         $_SESSION['login_user']= $username; 
         $_SESSION['login_pass']= $password; 
         $_SESSION['id'] = 1;
         

       
        return true;
          
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

   return false;
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

        
        <div class="backgroundf">
            <img id="backgroundpicf" src="http://il1.picdn.net/shutterstock/videos/6707308/thumb/1.jpg" alt="some cool pic"/>
         </div>
        
      
        
          <div id="mainlogo">
    
        
          <div id="logo11">1</div>
          <div id="logo10">1</div>
          <div id="logo9">1</div>
          <div id="logo8">1</div>
      
          <div id="logo1">0</div>
        
          <div id="logo3">1</div>        
          <div id="logo4">1</div>   
          <div id="logo5">1</div>  
          <div id="logo6">1</div>

          </div>
        
      
        <section id="navigationf">
       
                <nav id="navbuttonsf">
                    <button class="navpagesf"><a href="naslovna.php">Room</a></button>
                    <button class="navpagesf"><a href="tabela.html">Stories</a></button>
                    <button class="navpagesf"><a href="contactpage.html">Contact</a></button>
                </nav>
             
        </section>
        
        <div id="signinform">
            <form method="post" action="#" accept-charset='UTF-8'>
                <div class="fieldset"> 
                <fieldset>
                <legend> Sign in with your account </legend>
                <p> <label class="field"  for="Username">Username:</label><input type="text" name="Username"</p>
                <p> <label class="field"  for="Password">Password:</label><input type="password" name="Password"</p>
                <p> <input id="submit" type="submit" value="Sign In"</p>
                </fieldset>
                </div>
            </form>
        </div>
   
    </body>

</html>