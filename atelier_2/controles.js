//la fonction execute quand on click sur button envoyer
function valider()
{
    
    var rg = new RegExp("^[a-z]+$");
    var rgemail = new RegExp("^([a-zA-Z\.-_]+)@([a-zA-Z_-]+).(com||ma)$");
    var rgAge = new RegExp("^[0-9]+$");
    var d1 = document.querySelector("#d1");
    var nom = document.getElementById("nom");
    var res = document.getElementById("residence");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    d1.style.display="block";
    //controler le nom
    if(nom.value=="")
    {
        d1.innerHTML="Le nom et obligatoire !";
        d1.style.background="red"
        return;
    }
    if(rg.test(nom.value)==false)
    {
        d1.innerHTML="Le nom ne doit pas contenir que des caractères miniscule !";
        d1.style.background="red"
        return;
    }
    //controler le champs de résidance 
    if(res.value=="")
    {
        d1.innerHTML="La résidence et obligatoire !";
        d1.style.background="red"
        return;
    }
    if(rg.test(res.value)==false)
    {
        d1.innerHTML="La résidence ne doit pas contenir que des caractères miniscule !";
        d1.style.background="red"
        return;
    }
    //controler l'email
    if(email.value=="")
    {
        d1.innerHTML="L'email' et obligatoire !";
        d1.style.background="red"
        return;
    }
    if(rgemail.test(email.value)==false)
    {
        d1.innerHTML="L'email et non valide";
        d1.style.background="red"
        return;
    }
        //controler l'age doit etre remlir avec des chiffres et superieur a 18
    if(age.value=="")
    {
        d1.innerHTML="L'age et obligatoire !";
        d1.style.background="red"
        return;
    }
    if(rgAge.test(age.value)==false)
    {
        d1.innerHTML="L'age doit etre un chiffre !";
        d1.style.background="red"
        return;
    }
    if(age.value<=18)
    {
        d1.innerHTML="L'age doit etre superiere a 18 !";
        d1.style.background="red"
        return;
    }
    d1.style.background="#00848C"
    //controler et stocker les valeur des checkbox avec un séparateur ","
    var checks = document.querySelectorAll(".checks");
    var cp=0;
    var lp=[];
    for(var i=0;i<checks.length;i++)
    {
        if(checks[i].checked == true){                               
        cp++;
        lp.push(checks[i].value);
        }  
    }
    if(cp<2)
    {
        d1.innerHTML="Au moins deux langues doit être cocher";
        return;
    } 
    //stocker les informations
    d1.innerHTML="Nom : "+nom.value+"<br/>"+"Résidence : "+res.value+"<br/>"+"E-mail : "+
    email.value+"<br/>"+"Age : "+age.value+"<br/>Langue parlé : "+lp+"<br/><br/>";
    let X = {nom:nom.value,residence:res.value,Email:email.value,Age:age.value,Langue_parle:lp};
    localStorage.setItem('infos',JSON.stringify(X));
    //récupérer les infos stocker 
    var y = localStorage.getItem('infos');
    console.log(y);
    console.log('Informations : ',JSON.parse(y));
    
}
//show data from local storage loading page
function Afflocalstorage()
{  
    if(localStorage.getItem('infos')!==null)
    {        
        var lclstrg_string =localStorage.getItem('infos');
        var lclstrg_obj = JSON.parse(lclstrg_string);
        console.log(lclstrg_string);        
        document.getElementById("d2").innerHTML=
        "Nom : "+lclstrg_obj.nom+" <br/>"+"Résidence : "+lclstrg_obj.residence+
        " <br/>"+"E-mail : "+lclstrg_obj.Email+"<br/>"+"Age : "+lclstrg_obj.Age+"<br/>Langue parlé : "+
        lclstrg_obj.Langue_parle+"<br/><br/>";
    }
}


