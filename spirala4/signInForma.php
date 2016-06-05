<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet"  type="text/css" href="signInForma.css" />
    
    </head>    
    
    <body>
        
    <?php
        
          if(isset($_POST['Username']) && isset($_POST['Password']))  
          {
              
              $username=$_POST['Username'];
              $password=$_POST['Password'];
              
              
                     define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
                    define('DB_PORT',getenv('OPENSHIFT_MYSQL_DB_PORT'));
                    define('DB_USER',getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
                    define('DB_PASS',getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
                    define('DB_NAME',getenv('OPENSHIFT_GEAR_NAME'));

    
                    $dbn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT;
                    $dbc = new PDO($dbn, DB_USER, DB_PASS);
                    $dbc->exec("set names utf8");
                
                  //  $dbc = new PDO("mysql:dbname=spirala4; host=localhost; charset=utf8", "spirala4", "spirala4");
                    $autori = $dbc->query("select * from Autor");

    
                    if(!$autori)
                        {
                            $greska = $dbc->errorInfo();
                            print "SQL greška: " . $greska[2];
                            exit();
                        }
    
                    $administratori = $dbc->query("select * from Administrator");
    
                    if(!$administratori)
                        {
                            $greska = $dbc->errorInfo();
                            print "SQL greška: " . $greska[2];
                            exit();
                        }
    
                    foreach($autori as $autor)
                        {
                            if($autor['username']==$username && $autor['password']==$password)
                                {
          
                                    $_SESSION['username']= $username; 
                                    $_SESSION['password']= $password; 
                                    $_SESSION['login']=true;
          
                                    header("location:dodajNovost.php");
                                    break;
                                }
                        }
    
                    foreach($administratori as $administrator)
                        {
                            if($administrator['username']==$username && $administrator['password']==$password)
                                {
    
                                    $_SESSION['username']= $username; 
                                    $_SESSION['password']= $password; 
                                    $_SESSION['login']=true;
          
                                    header("location:admin.php");
                                    break;
                                }
                            }
        
                    }
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
                    <button class="navpagesf"><a href="index.php">Room</a></button>
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