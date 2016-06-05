<?php
// Start the session
session_start();
?>

<!DOCTYPE HTML>
<html>
    <head>
        <title>Dodaj novost</title>
        <meta charset="utf-8">
        <link type="text/css" rel="stylesheet" href="dodajNovost.css"/>
        <script src="validacijaNovosti.js"></script>
    </head>
    
    <body>
        
        <?PHP
        //   require "core.inc.php";
           date_default_timezone_set("Europe/Sarajevo");
        
           if(!isset($_SESSION['login']))
           {
               header("location:signInForma.php");
           }
            
        
           if(isset($_POST["logout"]))
           {
           
           unset($_SESSION['username']);
           unset($_SESSION['password']);
           unset($_SESSION['login']);
           header('location:signInForma.php');
    
           }
        
        if(isset($_POST['dodaj']))
        {
          // upload slike
        
         $name = $_FILES['slika']['name'];
        // $size = $_FILES['file']['size'];
        // $type = $_FILES['file']['type'];
         $tmp_name = $_FILES['slika']['tmp_name'];
         
    
        
        if(isset($name))
        {
            if(!empty($name))
            {
                $location = 'uploads';
                //$location = '';
               move_uploaded_file($tmp_name, $location."/".$name);
                
                
                
        if(isset($_POST['naslov']) && isset($_POST['tekst']) && !empty($_POST['naslov']) && !empty($_POST['tekst']) && isset($_POST['autor']) && !empty($_POST['autor']))
            {
            
            $naslov = $_POST['naslov'];
            $tekst = $_POST['tekst'];
            $url = htmlEntities($location."/".$name, ENT_QUOTES);
      //      $datum=date("m/d/Y H:i:s");
            $autor = $_POST['autor'];
            $dvokod = $_POST['dvokod'];
            
         
            if(isset($_POST['checkcomm']) && $_POST['checkcomm']=="1")
            {
                $komentar = true;
            }
            
            else $komentar = false;
           
            
            $brojtelefona = $_POST['pozivni'].$_POST['broj'];
            
    

            define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
            define('DB_PORT',getenv('OPENSHIFT_MYSQL_DB_PORT'));
            define('DB_USER',getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
            define('DB_PASS',getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
            define('DB_NAME',getenv('OPENSHIFT_GEAR_NAME'));

    
            $dbn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT;
            $dbc = new PDO($dbn, DB_USER, DB_PASS);
            $dbc->exec("set names utf8");
      
            
          // $dbc = new PDO("mysql:dbname=spirala4; host=localhost; charset=utf8", "spirala4", "spirala4");
            
            $rezultat = $dbc->query("select * from Novost");
            if(!$rezultat)
            {
                $greska = $dbc->errorInfo();
                print "SQL greška: " . $greska[2];
                exit();
            }

    
            
            
            $autori = $dbc->query("select * from Autor");
            
            
                    
            if (!$autori) {
            $error = $dbc->errorInfo();
            print "SQL greška: ".$error[2];
            exit();
            }
            
           
            
            $id = "-1";
            foreach ($autori as $autor_baza)
            {
                if($autor_baza['imeprezime']==$autor)
                {
                $id = $autor_baza['id'];
                break;
                }
            }
     
         
            if ($id == "-1")
            {
                $statement=$dbc->prepare("INSERT INTO Autor (imeprezime) VALUES ('$autor')");
                $statement->execute();
                
                $autori_postojeci = $dbc->query("select * from Autor");
            
                if (!$autori_postojeci) {
                $error = $dbc->errorInfo();
                print "SQL greška: ".$error[2];
                exit();
                }
                 
            
                foreach ($autori_postojeci as $autor_baza)
                {
                    if($autor_baza['imeprezime']==$autor)
                    {
                    $id = $autor_baza['id'];
                    break;
                    }
                }
                
                   
             }
      
            
            $statement=$dbc->prepare("INSERT INTO Novost (naslov, tekst, putanja, autor_id, komentar, dvoslovnikod, brojtelefona) VALUES ('$naslov','$tekst', '$url', '$id', '$komentar', '$dvokod', '$brojtelefona')");

            $statement->execute();
            
            // upis u csv
            
            
        /*    $niz=array($naslov, $tekst, $url, $datum);
			$novost=fopen("Novosti.csv","a") or die("Datoteka se ne može otvoriti");
			fwrite($novost,"\n");
			fputcsv($novost,$niz,";");
			
			fclose($novost);
            
        */
            
            
            
            
            }
            }
            
            else
            {
                echo "Please choose a pic";
            }
        }
        }
        
   
             
       
        ?>
    
        <nav>
            
    
        <div id="left"> <h1 class="nav1"> Dobro došli! </h1> </div>
        <div id="right"><form method="post" action="dodajNovost.php">
            <input id ="logout" type="submit" name ="logout" value="Logout"/>
        </form>
        </div>
            
        </nav>
        
        
        <hr>
        
    
        <div>
        
        <div class="left">
        <h3>Dodaj novost</h3>
        <form enctype="multipart/form-data" method="post" action="dodajNovost.php">
            Dodaj Naslov: <br><br> <textarea id="naslov" name="naslov" type="text"></textarea>
        
            Dodaj Tekst: <br><br> <textarea id="tekst" name="tekst" type="textarea"> </textarea>
            Dodaj Sliku: <br><br> <input id="slika" name="slika" type="file" accept="image/*" onchange="loadFile(event)"/>
            <br> <br>
            Autor: <input id="autor" name="autor" type="text"/> <input type="checkbox" id="checkcomm" name="checkcomm" value="1"/> Omogući komentare
            <br> <br>
            Dodaj dvoslovni kod države :  <input id="dvokod" name="dvokod" type="text" onfocus="getCallingCode()" onblur="codeValidation()"/> <p id="upozorenje"></p>
            <br> 
            Dodaj broj telefona : <br>  <br>
            Pozivni : <input id="pozivni" name="pozivni" type"text" onfocus="getCountryCode()"  onblur="numValidation()"/> Broj : <input id="broj" name="broj" type="text"/>
        
        <br>
        <br>
            
        <div id="akcije">
        <input id="izgled" type="button" value="Izgled" onclick="prikaziNovost()"/>
        <input id="dodaj" name="dodaj" type="submit" value="Dodaj"/>
        </div>
 

        </form>
        </div>
        
        <div class="right">
            <h3 id="prikaz">Izgled novosti</h3>
            
            <div id="preview">
        
            <img id="slika_prikazi"/>
            
            <div id="tekst_prikazi">
            <h1 id="naslov_prikazi"></h1>
            <span id="sadrzaj_prikazi"></span>                          
            </div>
            
            <div class="datum">
            <p></p>
            Objavljeno prije: 
            <br>
            </div>
                
            </div>
        
        </div>
        
        </div>
        
    </body>
    

</html>