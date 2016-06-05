function openSignIn()
{
    window.location="signInForma.php"
}

function openSignUp()
{
    window.location="signUpForma.html"
}



var listaDana = [];
var listaSedmica = [];
var listaMjeseca = [];

//function vrijemeObjave()
//{
    var id="";
    var p="";
  /*   var brojNovosti = document.querySelectorAll('.novosti').length;   --Posto ne moze jQuerry*/
 
    
   var el_broj_novosti = document.getElementById("brojnovosti");
   var string_broj_novosti = el_broj_novosti.innerHTML.toString();
   var brojNovosti =parseInt(string_broj_novosti.substr(14));

    for( i=0; i<brojNovosti; i++)
     {
         
         p = i+100;
         id = i+110;
         div=i; 
  
         
    var el=document.getElementById(p.toString());
        
    var datumObjave= el.innerHTML;
         
    if(datumObjave.length==19){
         var m = parseInt(datumObjave.substr(0,2));
         var d = parseInt(datumObjave.substr(3,2));
         var y = parseInt(datumObjave.substr(6,4));
   
         var h = parseInt(datumObjave.substr(11,2));
         var min = parseInt(datumObjave.substr(14,2));
         var sec = parseInt(datumObjave.substr(17,2));
     
    }
    
    if(datumObjave.length==18)
    {
           var m = parseInt(datumObjave.substr(0,1));
            var d = parseInt(datumObjave.substr(2,2));
            var y = parseInt(datumObjave.substr(5,4));
   
            var h = parseInt(datumObjave.substr(10,2));
            var min = parseInt(datumObjave.substr(13,2));
            var sec = parseInt(datumObjave.substr(16,2));

    }
    
    var datumObjave =
    {
        dani:d,
        mjeseci:m,
        godine:y,
        sati:h,
        minute:min,
        sekunde:sec,
        element:id,
        paragraf:p,
        novost:div
    };
        
    ispisiVrijeme(datumObjave);
        
    
     }
  
//}

function ispisiVrijeme(objavljeno)
{
 
  
   // var d = new Date(2016, 8, 5, 12, 15, 55, 1);
    var d = new Date();
    var dan = parseInt(d.getDate());
    var mjesec = parseInt(d.getMonth())+1;
    var godina = parseInt(d.getFullYear());
    
    var sat = parseInt(d.getHours());
    var minuta = parseInt(d.getMinutes());
    var sekunda = parseInt(d.getSeconds()); 
    
    var datum = new Date(objavljeno.godine, objavljeno.mjeseci-1, objavljeno.dani);
    
    var danUSedmiciTrenutni = d.getDay();
    var danUSedmiciObjavljeni = datum.getDay();
    if (danUSedmiciObjavljeni==0) danUSedmiciObjavljeni=7;
    if (danUSedmiciTrenutni==0) danUSedmiciTrenutni=7;
    var razlika = danUSedmiciTrenutni-danUSedmiciObjavljeni;

    var danUMjesecuTrenutni = d.getDate();
    var danUMjesecuObjavljeni = datum.getDate();
    var razlikaDana = danUMjesecuTrenutni-danUMjesecuObjavljeni;
  
    var brojDana = vratiBrojDana(objavljeno.dani, dan);
    var brojMjeseci = vratiBrojMjeseci(objavljeno.mjeseci, mjesec);
    var brojGodina = vratiBrojGodina(objavljeno.godine, godina);
    var brojSati = vratiBrojSati(objavljeno.sati, sat);
    var brojMinuta = vratiBrojMinuta(objavljeno.minute, minuta);
    var brojSekundi = vratiBrojSekundi(objavljeno.sekunde, sekunda);
    

    

            
            if (brojDana==0 & brojMjeseci==0 & brojGodina==0 & brojSati==0 & brojMinuta==0)
            {
                document.getElementById(objavljeno.element).innerHTML= "Novost je objavljena prije par sekundi";   
                window.listaDana.push(objavljeno.novost);
                
               if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
               if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);
                
            }
            
            else if ( brojDana==0 & brojMjeseci==0 & brojGodina==0 & brojMinuta!=0)
                {
                    if(brojSati==0) 
                        {
                            document.getElementById(objavljeno.element).innerHTML= "Novost je objavljena prije "+ brojMinuta +  " minut" +  provjeraIspisaMinuta(brojMinuta);
                            window.listaDana.push(objavljeno.novost);
                            if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
                            if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);
                        }
                    
                    else if (brojSati>0) {
                                   
                    
                        if(objavljeno.minute>minuta & objavljeno.sati+1==sat)
                            {
                                var ispis=60-objavljeno.minute+minuta;
                                document.getElementById(objavljeno.element).innerHTML= "Novost je objavljena prije " + ispis + " minut" +
                                provjeraIspisaMinuta(ispis);
                                
                                window.listaDana.push(objavljeno.novost);
                                if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
                                if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);
                            }
                        else
                            {   
                                document.getElementById(objavljeno.element).innerHTML="Novost je objavljena prije " + brojSati + " sat" + 
                                    provjeraIspisaSati(brojSati);
                                
                                window.listaDana.push(objavljeno.novost);
                               if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
                               if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);
                            }
                    }
                }
            
              else if (brojMjeseci==0 & brojGodina==0)
                  {
                      var ispis = 24 + brojSati;
                      if(objavljeno.dani+1==dan & ispis<=24)
                          {
                             
                               document.getElementById(objavljeno.element).innerHTML="Novost je objavljena prije " + ispis + " sat" + 
                               provjeraIspisaSati(ispis);
                              
                              window.listaDana.push(objavljeno.novost);
                              if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
                              if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);

                          }
                      
                      else 
                          {
                               document.getElementById(objavljeno.element).innerHTML="Novost je objavljena prije " + brojDana + " dan" + 
                               provjeraIspisaDana(brojDana);
                              
                              if(brojDana<=7 && brojDana!=1)  
                              {
                                  if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
                                 if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);
                              }
                              if(brojDana==1) 
                              {
                                  window.listaDana.push(objavljeno.novost);
                                  if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
                                  if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);
                              }
                          }
                  }
            
              else if (brojGodina==0)
              {
                  
                  var brDanaObjavljenog = new Date(datum.getFullYear(), datum.getMonth()-1, 0).getDate();
                  
                  document.getElementById(objavljeno.element).innerHTML=brDanaObjavljenog;
                 
                  var brDanaTrenutnog = new Date(datum.getFullYear(), datum.getMonth()-1,0).getDate();
                  var ispis = brDanaObjavljenog - objavljeno.dani + dan;
                  
                  /* napomena: zaokružila sam broj dana tako da ako je bilo 11 dana to će ispisati kao dvije sedmice*/
                  var ispisi=ispis/7;
                  var ispisi = Math.round(ispisi);
                  
                  if(objavljeno.mjeseci+1==mjesec & ispis<=brDanaTrenutnog & ispis>=7)
                  {
                      document.getElementById(objavljeno.element).innerHTML="Novost je objavljena prije " + ispisi + " sedmic" + 
                      provjeraIspisaSedmica(ispisi);
                      if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);
                  }
                  
                  else if(objavljeno.mjeseci+1==mjesec & ispis<=brDanaTrenutnog & ispis<7)
                  {
                        document.getElementById(objavljeno.element).innerHTML="Novost je objavljena prije " + ispis + " dan" + 
                        provjeraIspisaDana(ispis);  
                       if(razlika>=0) window.listaSedmica.push(objavljeno.novost);
                       if(razlikaDana>=0) window.listaMjeseca.push(objavljeno.novost);

                  }
                  
                  else 
                  {
                         document.getElementById(objavljeno.element).innerHTML="Novost je objavljena datuma: "+ objavljeno.dani + 
                             "/" + objavljeno.mjeseci + "/" + objavljeno.godine;
                  }
                  
              }
    
            else 
            {
                    document.getElementById(objavljeno.element).innerHTML="Novost je objavljena datuma: "+ objavljeno.dani + 
                             "/" + objavljeno.mjeseci + "/" + objavljeno.godine;
            }
    
                return listaDana;
        }

function provjeraIspisaSedmica(ukupno)
{
    var brojUString = ukupno.toString();
    var posljednjaCifra = brojUString.substr(brojUString.length-1,1);
    if(ukupno>=10 & ukupno<=20) return "a";
    else if(posljednjaCifra==1 & ukupno!=11) return "u";
    else if((posljednjaCifra==2 || posljednjaCifra==3 || posljednjaCifra==4) & (ukupno!=12 & ukupno!=13 & ukupno!=14)) return "e";
    else return "a";
}
function provjeraIspisaDana(ukupno)
{
    var brojUString = ukupno.toString();
    var posljednjaCifra = brojUString.substr(brojUString.length-1,1);
    if(posljednjaCifra==1 & ukupno!=11) return "";
    else return "a";
}

function provjeraIspisaSati(ukupno)
{
    var brojUString = ukupno.toString();
    var posljednjaCifra = brojUString.substr(brojUString.length-1,1);
    if((ukupno>=10 & ukupno<=20) || (posljednjaCifra<10 & posljednjaCifra>4)) return "i";
    else if(posljednjaCifra==1 & ukupno!=11) return "";
    else if((posljednjaCifra==2 || posljednjaCifra==3 || posljednjaCifra==4) & (ukupno!=12 & ukupno!=13 & ukupno!=14)) return "a";
    else return "i";
}
function provjeraIspisaMinuta(ukupno)
{
    var brojUString = ukupno.toString();
    var posljednjaCifra = brojUString.substr(brojUString.length-1,1);
    if(ukupno>=10 & ukupno<=20) return "a";
    else if(posljednjaCifra==1 & ukupno!=11) return "u";
    else if((posljednjaCifra==2 || posljednjaCifra==3 || posljednjaCifra==4) & (ukupno!=12 & ukupno!=13 & ukupno!=14)) return "e";
    else return "a";
}

function vratiBrojDana(d1, d2)
{
    var brojDana = d2-d1;
    return brojDana;
}

function vratiBrojMjeseci(m1, m2)
{
    var brojMjeseci = m2-m1;
    return brojMjeseci;
}

function vratiBrojGodina(y1,y2)
{
    var brojGodina = y2-y1;
    return brojGodina;
}

function vratiBrojSati(h1,h2)
{
    var brojSati = h2-h1;
    return brojSati;
}

function vratiBrojMinuta(min1,min2)
{
    var brojMinuta = min2-min1;
    return brojMinuta;
}

function vratiBrojSekundi(sec1, sec2)
{
    var brojSekundi = sec2-sec1;
    return brojSekundi;
}



/* --------------------------------------------------------------------------------------------------------------------------------------*/

/* Zadatak2, filter */


function filterDana()
{
    for (i=0; i<brojNovosti; i++)
    {
           document.getElementById(i).style.visibility="visible";
    }
 
   
    var broj = window.listaDana.length;
   
 
    var pomocnaLista = [];
    for (i=0; i<brojNovosti; i++) pomocnaLista[i]=false;
    
    for (i=0; i<broj; i++)
    {
        var pozicija = vratiPoziciju(window.listaDana[i]);
        pomocnaLista[pozicija]=true;
    }
    
    
    for (i=0; i<brojNovosti; i++)
    {
        if(pomocnaLista[i]==false)  
            {
                document.getElementById(i).style.visibility="hidden";
            }
     
    }
      
}

function filterSedmica()
{
    for (i=0; i<brojNovosti; i++)
    {
          
           document.getElementById(i).style.visibility="visible";
    }
 
    var broj = window.listaSedmica.length;
    var pomocnaLista=[];
    for (i=0; i<brojNovosti; i++) pomocnaLista[i]=false;

    for (i=0; i<broj; i++)
    {
        var pozicija = vratiPoziciju(window.listaSedmica[i]);
        pomocnaLista[pozicija]=true;
    }
    
    
    for (i=0; i<brojNovosti; i++)
    {
        if(pomocnaLista[i]==false)  
            {
               
                document.getElementById(i).style.visibility="hidden";
            }
    }
}

function filterMjeseca()
{
    for (i=0; i<brojNovosti; i++)
    {
           document.getElementById(i).style.visibility="visible";
    }
 
  
    var broj = window.listaMjeseca.length;
    var pomocnaLista=[];
    for (i=0; i<brojNovosti; i++) pomocnaLista[i]=false;

   
    for (i=0; i<broj; i++)
    {
        var pozicija = (window.listaMjeseca[i]);
      
        pomocnaLista[pozicija]=true;
    }
    
    
    for (i=0; i<brojNovosti; i++)
    {
        if(pomocnaLista[i]==false)  
            {
                document.getElementById(i).style.visibility="hidden";
            }
    }
}

function prikaziSve()
{
       for (i=0; i<brojNovosti; i++)
       {
            // el=vratiElement(i);
             document.getElementById(i).style.visibility="visible";
       }
}
    
function vratiPoziciju(el)
    {
        
        return el;
      
    }
    
function vratiElement(el)
    {
         return el-=110;
    }