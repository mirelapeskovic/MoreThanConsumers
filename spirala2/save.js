function openSignIn()
{
    window.location="signInForma.html"
}

function openSignUp()
{
    window.location="signUpForma.html"
}


var listaDana = [];
var listaSedmica = [];
var listaMjeseca = [];

function vrijemeObjave()
{
    var id="";
    var p="";
  /*   var brojNovosti = document.querySelectorAll('.novosti').length;   --Posto ne moze jQuerry*/
    var brojNovosti = 12;
    
  
    
    for( i=1; i<=brojNovosti; i++)
     {
            if(i==1) { id="prva"; p="prvi"; div="jedan"; }
            else if(i==2) { id="druga"; p="drugi"; div="dva"; }
            else if(i==3) { id="treca"; p="treci"; div="tri"; }
            else if(i==4) { id="cetvrta"; p="cetvrti"; div="cetiri"; }
            else if(i==5) { id="peta"; p="peti"; div="pet"; }
            else if(i==6) { id="sesta"; p="sesti"; div="sest"; }
            else if(i==7) { id="sedma"; p="sedmi"; div="sedam"; }
            else if(i==8) { id="osma"; p="osmi"; div="osam"; }
            else if(i==9) { id="deveta"; p="deveti"; div="devet"; }
            else if(i==10) { id="deseta"; p="deseti"; div="deset"; }
            else if(i==11) { id="jedanaesta"; p="jedanaesti"; div="jedanaest"; }
            else { id="dvanaesta"; p="dvanaesti"; div="dvanaest"; }
    
    var el=document.getElementById(p);
    var datumObjave= el.innerHTML;
    
    var d = parseInt(datumObjave.substr(0,2));
    var m = parseInt(datumObjave.substr(3,2));
    var y = parseInt(datumObjave.substr(6,4));
    
    var h = parseInt(datumObjave.substr(11,2));
    var min = parseInt(datumObjave.substr(14,2));
    var sec = parseInt(datumObjave.substr(17,2));
    
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
  
}

function ispisiVrijeme(objavljeno)
{
    
    var d = new Date(2016, 3, 5, 12, 15, 55, 1);
    /*var d = new Date();*/
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
    for (i=0; i<12; i++)
    {
           el=vratiElement(i);
           document.getElementById(el).style.visibility="visible";
    }
 
   
    var broj = window.listaDana.length;
 
    var pomocnaLista = [];
    for (i=0; i<12; i++) pomocnaLista[i]=false;

    for (i=0; i<broj+1; i++)
    {
        var pozicija = vratiPoziciju(window.listaDana[i]);
        pomocnaLista[pozicija]=true;
    }
    
    
    for (i=0; i<12; i++)
    {
        if(pomocnaLista[i]==false)  
            {
                el=vratiElement(i);
                document.getElementById(el).style.visibility="hidden";
            }
     
    }
      
}

function filterSedmica()
{
    for (i=0; i<12; i++)
    {
           el=vratiElement(i);
           document.getElementById(el).style.visibility="visible";
    }
 
    var broj = window.listaSedmica.length;
    var pomocnaLista=[];
    for (i=0; i<12; i++) pomocnaLista[i]=false;

    for (i=0; i<broj+1; i++)
    {
        var pozicija = vratiPoziciju(window.listaSedmica[i]);
        pomocnaLista[pozicija]=true;
    }
    
    
    for (i=0; i<12; i++)
    {
        if(pomocnaLista[i]==false)  
            {
                el=vratiElement(i);
                document.getElementById(el).style.visibility="hidden";
            }
    }
}

function filterMjeseca()
{
    for (i=0; i<12; i++)
    {
           el=vratiElement(i);
           document.getElementById(el).style.visibility="visible";
    }
 
  
    var broj = window.listaMjeseca.length;
    var pomocnaLista=[];
    for (i=0; i<12; i++) pomocnaLista[i]=false;

    for (i=0; i<broj+1; i++)
    {
        var pozicija = vratiPoziciju(window.listaMjeseca[i]);
        pomocnaLista[pozicija]=true;
    }
    
    
    for (i=0; i<12; i++)
    {
        if(pomocnaLista[i]==false)  
            {
                el=vratiElement(i);
                document.getElementById(el).style.visibility="hidden";
            }
    }
}

function prikaziSve()
{
       for (i=0; i<12; i++)
       {
             el=vratiElement(i);
             document.getElementById(el).style.visibility="visible";
       }
}
    
function vratiPoziciju(el)
    {
        if(el=="jedan") return 0;
        if(el=="dva") return 1;
        if(el=="tri") return 2;
        if(el=="cetiri") return 3;
        if(el=="pet") return 4;
        if(el=="sest") return 5;
        if(el=="sedam") return 6;
        if(el=="osam") return 7;
        if(el=="devet") return 8;
        if(el=="deset") return 9;
        if(el=="jedanaest") return 10;
        if(el=="dvanaest") return 11;
       
    }
    
function vratiElement(el)
    {
         if(el==0) return "jedan";
         if(el==1) return "dva";
         if(el==2) return "tri";
         if(el==3) return "cetiri";
         if(el==4) return "pet";
         if(el==5) return "sest";
         if(el==6) return "sedam";
         if(el==7) return "osam";
         if(el==8) return "devet";
         if(el==9) return "deset";
         if(el==10) return "jedanaest";
         if(el==11) return "dvanaest";
    }