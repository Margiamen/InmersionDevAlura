function calcFort(){
    contrasena=document.getElementById("password").value 
    
    cantCard = contrasena.length

    if(cantCard >=0 & cantCard <=4){
        fort="Baja"
        color="red"
    } else if(cantCard >=5 & cantCard<=8){
        fort="Media"
        color="yellow"

    } else{
        fort="Alta"
        color="green"

    }

    document.getElementById("fort").innerHTML=fort
    document.getElementById("fort").style.color=color
}