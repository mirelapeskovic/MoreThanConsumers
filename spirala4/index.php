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
                    <button class="navpages"><a href="naslovna.php">Room</a></button>
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
                
        
         <form method="post" action="naslovna.php"> 
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
                $vijest=fopen("Novosti.csv",'r')or die("Datoteka se ne može otvoriti");
                $i=0;
                $vijesti;
		        while(!feof($vijest))
		          {
                    
			         $sadrzaj[$i]=fgets($vijest);
			     
                    if(strlen($sadrzaj[$i])>10)
                    {
                         $temp=$sadrzaj[$i];
				         $linija=explode(";",$temp);
			         
                    }
                    
                    else continue;
                    
	             if (!isset($linija[0]) || !isset($linija[1]) || !isset($linija[2]) || !isset($linija[3])
				||$linija[0]=="" ||$linija[1]=="" ||$linija[2]=="" ||$linija[3]=="") {
				    
                     $linija[0] = null;
                     $linija[1] = null;
                     $linija[2] = null;
                     $linija[3] = null;
                     
                 }
			
			     $niz=Array("naslov"=>$linija[0], 
					   "tekst"=>$linija[1],
					   "url"=>$linija[2],
					   "datum"=>$linija[3]);
                    
              
                    
			     $vijesti[$i]=$niz;
			     $i++;
                    
                 $broj_novosti = $i;
			
		      }
                
                if(isset($_REQUEST['sort']))
		          {
                        $izbor=$_REQUEST['selekcija'];
			
			             if($izbor=="datum")
			                 {
				                usort($vijesti, 'sortirajDatume');
			                 }
                        
                         else
			                 {
				                usort($vijesti, 'sortirajNaslove');
			                 }
			
		          }
		
                
       //     echo "<section id='mainsection'> <p id='broj_novosti>".$broj_novosti."</p>";
                
            echo  "<p id='brojnovosti' visibility='hidden'>Broj novosti: ".$broj_novosti."</p>";
                
              
             for($j=0; $j<count($vijesti); $j++)
		      {
			
			     $naslov=$vijesti[$j]['naslov'];
			     $tekst=$vijesti[$j]['tekst'];
			     $url=$vijesti[$j]['url'];
			     $datum=$vijesti[$j]['datum'];
                 
                 $id = $j+100;
                 $id_div = $j+110;
                
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