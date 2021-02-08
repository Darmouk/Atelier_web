var drap=0;
function Aff_div()
{            
    var btnoui = document.getElementById("non")
    var btnnon = document.getElementById("oui")
    var d1 = document.getElementById("d1");
    
    if(btnoui.checked)
    {
        d1.style.display="none"
        drap=1;
       
    }
    if(btnnon.checked)
    {
        d1.style.display="block"
        drap=0;
    }
    
}
function valider()
{
    var txt="";
    var nom =document.getElementById("name");
    var password = document.getElementById("password");
    var msg = document.getElementById("msg");
    var rg = new RegExp('^[A-Za-z]');
    if(nom.value=="")
    {
        msg.innerHTML="Le nom est obligatoir !";
        msg.style.backgroundColor="red";
        return;
    }
    if(rg.test(nom.value)==false)
    {
        msg.innerHTML="Le nom ne doit pas contenir de chiffre ou caractères spéciaux";
        msg.style.backgroundColor="red";
        return;
    }
    if(password.value=="")
    {
        msg.innerHTML="Mots de pass est obligatoir !";
        msg.style.backgroundColor="red";
        return;
    }
    if(drap==0)
    {
       if(document.getElementById("villes").value=="select")
       {
        msg.innerHTML="Selectionner la ville !";
        msg.style.backgroundColor="red";
        return;
       }
       txt="<br/>Ville : "+document.getElementById("villes").value;
    }
    msg.innerHTML="Nom : "+nom.value+"<br/>Password : "+password.value+txt
    msg.style.backgroundColor="lightGreen";
    return;
}