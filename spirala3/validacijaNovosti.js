var dvoslovni_kod="";
var tel_pozivni="";



// AJAX code to set dvoslovni_kod or tel_pozivni
function getCountryCode() {
    

    var kod_v = encodeURIComponent(document.getElementById('dvokod').value);
    var pozivni_v = encodeURIComponent(document.getElementById('pozivni').value);
    
    if(kod_v=="") 
    {
        document.getElementById('upozorenje').innerHTML= "Dvoslovni kod države je neophodan";
        document.getElementById('upozorenje').style.visibility="visible";
        document.getElementById('upozorenje').style.color="red";
        document.getElementById('dvokod').focus();
    
    }
    
    else {
    var xmlhttp;
    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { // for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {

            document.getElementById('dvokod').innerHTML = "Validating..";
          //  document.getElementById('pozivni').innerHTML = "Validating.."
 
            } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

           
                var xmlresponse = JSON.parse(xmlhttp.responseText);
                dvoslovni_kod = xmlresponse[0].alpha2Code; // nije bitno
                tel_pozivni = xmlresponse[0].callingCodes;
               
                
                
            } else {
                document.getElementById('dvokod').innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
             //   document.getElementById('pozivni').innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
            }
    }
    
    xmlhttp.open("GET", "https://restcountries.eu/rest/v1/alpha?codes="+ kod_v, true);
    xmlhttp.send();
    }
}

/*function getCallingCode() {
    
    alert(brojac_kod);
    if(brojac_kod==0){
   
    var pozivni_v =  document.getElementById('pozivni').value;
    var kod_v =  document.getElementById('dvokod').value;
    
    var xmlhttp;
    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { // for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {

         //   document.getElementById('dvokod').innerHTML = "Validating..";
            document.getElementById('pozivni').innerHTML = "Validating.."

            } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

              //  document.getElementById(field).innerHTML = xmlhttp.responseText;
                
              
                var xmlresponse = JSON.parse(xmlhttp.responseText);
                dvoslovni_kod = xmlresponse[0].alpha2Code; // nije bitno
                tel_pozivni = xmlresponse[0].callingCodes;

              
             
                

            } else {
               // document.getElementById('dvokod').innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
                document.getElementById('pozivni').innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
            }
    }
    
    getCountryCode();
    xmlhttp.open("GET", "https://restcountries.eu/rest/v1/alpha?codes="+ dvoslovni_kod, true);
    xmlhttp.send();
        
    }
    
    brojac_kod=0;
}

*/

function numValidation()
{
  
    var kod = document.getElementById('dvokod');
    var kod_value =  document.getElementById('dvokod').value;
    var poz =  document.getElementById('pozivni');
    var poz_value =  document.getElementById('pozivni').value;
    
   
    if(poz_value!=tel_pozivni && kod_value!="")
        {
            poz.style.backgroundColor="red";
            poz.setAttribute("placeholder", tel_pozivni);
            poz.value="";
        }
    else{
        poz.style.backgroundColor="white";
        poz.placeholder="";
    }

    
}

/*

function codeValidation()
{
   
  
    var kod = document.getElementById('dvokod');
    var kod_value =  document.getElementById('dvokod').value;
    alert(dvoslovni_kod);
    if(brojac_kod==0 && dvoslovni_kod!="")
        {
    if(kod_value!=dvoslovni_kod)
        {
            kod.style.backgroundColor="red";
            kod.setAttribute("placeholder", dvoslovni_kod);
            kod.value="";
        }
    
    else{
        kod.style.backgroundColor="white";
        kod.placeholder="";
    }
         
            
        }
    
    brojac_kod++;
}

*/

  var loadFile = function(event) {
    var output = document.getElementById('slika_prikazi');
    output.src = URL.createObjectURL(event.target.files[0]);
  };

function prikaziNovost()
{
  
    var naslov = document.getElementById('naslov').value;
    var tekst = document.getElementById('tekst').value;
    
    document.getElementById('naslov_prikazi').innerHTML=naslov;
    document.getElementById('sadrzaj_prikazi').innerHTML=tekst;
    
};




