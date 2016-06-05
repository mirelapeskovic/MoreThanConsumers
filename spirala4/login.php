<?php
// Start the session
session_start();
?>

<!DOCTYPE HTML>
<html>
<head>

</head>

<body>
<?php

header('Content-Type: text/html; charset=utf-8');


    


function Login($username, $password)
{

 //$dbc = new PDO("mysql:dbname=spirala4; host=localhost; charset=utf8", "spirala4", "spirala4");
            define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
            define('DB_PORT',getenv('OPENSHIFT_MYSQL_DB_PORT'));
            define('DB_USER',getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
            define('DB_PASS',getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
            define('DB_NAME',getenv('OPENSHIFT_GEAR_NAME'));

    
            $dbn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT;
            $dbc = new PDO($dbn, DB_USER, DB_PASS);
            $dbc->exec("set names utf8");
          
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
      }
  }
    


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
