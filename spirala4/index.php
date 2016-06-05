<!DOCTYPE>
<html>
<header>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="naslovna.css"/>
    
<script type="text/javascript" src="save.js"></script>

</header>

    <body>
          
            <section id="prviDio">
            <header id="logo">
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
            </header>
        
            
        
           
            </section>
     
            <section id="maincontainer">
            
            <section id="navigation">
       
                <nav id="navbuttons">
                    <button class="navpages"><a href="index.php">Room</a></button>
                    <button class="navpages"><a href="tabela.html">Stories</a></button>
                    <button class="navpages"><a href="contactpage.html">Contact</a></button>
                </nav>
             
            </section>
                
                
            <section id="filter">
       
                <nav id="filterbuttons">
                    <button class="filternews" onclick="filterDana()">Daily News</button>
                    <button class="filternews" onclick="filterSedmica()">Weekly News</button>
                    <button class="filternews" onclick="filterMjeseca()">Monthly News</button>
                    <button class="filternews" onclick="prikaziSve()">Show me all news</button>
                </nav>
             
            </section>
                
        
         <form method="post" action="index.php"> 
            <label id="naslov_sortiranje">Sort:</label>
	           <br>
	               <select id="selekcija" name="selekcija">
		              <option value="datum">Datum</option>
		              <option value="abcd">Abeceda</option>
	               </select>
	         
	       <input id="sort" type="submit" name="sort" value="Sortiraj"/>
           </form>    

            
                
                <?php
                
                
                    function sortirajDatume($prvi, $drugi)
		              {
                      
                         $dateTime1 = new DateTime(str_replace('"', '',$prvi['datum'])); 
			             $dateTime2 = new DateTime(str_replace('"', '',$drugi['datum']));
                        
                    
			             $t1=$dateTime1->format('U'); 
			             $t2=$dateTime2->format('U'); 
			             return $t2-$t1;
		              }  
		      
                    function sortirajNaslove($prvi, $drugi)
		              {

			             $t1=$prvi['naslov'];
			             $t2=$drugi['naslov'];
			             return strcmp($t1,$t2);

		              }
                
            
        
               echo "<section id='mainsection'>";
               
     
       //     echo "<section id='mainsection'> <p id='broj_novosti>".$broj_novosti."</p>";
                
            //    $dbc = new PDO("mysql:dbname=spirala4; host=localhost; charset=utf8", "spirala4", "spirala4");
                
                    define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
                    define('DB_PORT',getenv('OPENSHIFT_MYSQL_DB_PORT'));
                    define('DB_USER',getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
                    define('DB_PASS',getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
                    define('DB_NAME',getenv('OPENSHIFT_GEAR_NAME'));

    
                    $dbn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT;
                    $dbc = new PDO($dbn, DB_USER, DB_PASS);
                    $dbc->exec("set names utf8");
                  //  $dbc = new PDO("mysql:dbname=spirala4; host=localhost; charset=utf8", "spirala4", "spirala4");
                    $novosti = $dbc->query("select * from Novost");

                    if(!$novosti)
                        {
                            $greska = $dbc->errorInfo();
                            print "SQL greška: " . $greska[2];
                            exit();
                        }
                
                    $broj_novosti = $novosti->rowCount();
                
                
                  if(isset($_REQUEST['sort']))
                      {
                            $izbor=$_REQUEST['selekcija'];
			
                            if($izbor=="datum")
			                 {
                                    usort($novosti, 'sortirajDatume');
                             }
                        
                             else
                                {
				                usort($novosti, 'sortirajNaslove');
                            
                                }
			
                     }
                
                
                    echo  "<p id='brojnovosti' visibility='hidden'>Broj novosti: ".$broj_novosti."</p>";
                
          

                    $j=0;
                    foreach($novosti as $novost)
                        {
			
                            $naslov=$novost['naslov'];
                            $tekst=$novost['tekst'];
                            $url=$novost['putanja'];
                 
                
                            $datum_baza=$novost['datum'];
    
                            $date = new DateTime();
                

                            $date->setTimestamp(strtotime($datum_baza));
                            $datum=$date->format('m/d/Y H:i:s');
        
                            //$datum=date("m/d/Y H:i:s", $dt);
                 
                            $id = $j+100;
                            $id_div = $j+110;
                            $j++;
                
                echo
			     "
				    <div id='".$j."' class='novosti'>
		
					
						<img class='slika_novost' src='".$url."' alt='Slika'>
						
			
					   <div class='tekst'>
						<h1> ".$naslov." </h1>
						
						<p>
							".$tekst."
						</p>
                        </div>
                        
                        <div class='datum' id='".$id_div."'>
                             <p id='".$id."'>".$datum."</p>
                             Objavljeno prije: 
                        </div>
                    
						
				        </div>
			
			     ";
		
		
		}
               
      
              echo  "</section>";
                
         
      
                ?>
                               
        <div id="linkovi">
            <ul id="lista">
                <li><a class="link" href="http://www.technewsworld.com/">Tech News World</a></li><br>
                <li><a class="link" href="http://www.bbc.com/news/technology">BBC</a></li><br>
                <li><a class="link" href="http://www.onlineprogrammingbooks.com/information-technology/">Online Books</a></li><br>
                <li><a class="link" href="https://www.pluralsight.com/">Online Tutorials</a></li>
            </ul>
       
                
            <nav id="signs">
        
             <a class="s" href="signInForma.php">Sign In</a>
             <br>
             <br>
             <a class="s" href="signUpForma.html">Sign Up</a>
          
    
      
          </div>
            
                  
             </section>
        
     
<footer>
	<script src="save.js">
   
    </script>

</footer>               
     
    </body>
</html>