<?PHP
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
         //  require "core.inc.php";
           date_default_timezone_set("Europe/Sarajevo");
        
           if(!isset($_SESSION['login']))
           {
               header("location:signInForma.php");
           }
            
        
           if(isset($_POST['logout']))
           {
    
           unset($_SESSION['username']);
           unset($_SESSION['password']);
           unset($_SESSION['login']);
           header("location:signInForma.php");
    
           }
        
        ?>
    
        <nav>
            
    
        <div id="left"> <h1 class="nav1"> Dobro došli! </h1> </div>
        <div id="right"><form method="post" action="admin.php">
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