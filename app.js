function validate(){
    var usr = document.getElementById("user").value.trim()
    var emal = document.getElementById("email").value.trim()
    var pas = document.getElementById("pass").value.trim()
    var repas = document.getElementById("repass").value.trim()

// console.log(usr)

if(usr == null || usr == ""){
    document.getElementById("p1").innerHTML="** Required User_Name"
    return false
}


if(emal == null || emal == ""){
    document.getElementById("p2").innerHTML="** Required Email"
    return false
}
if(pas.length <8 || pas.length == ""){
    document.getElementById("p3").innerHTML="** Password length must be 8"
    return false
}
if(repas !=pas || repas=="" ){
    document.getElementById("p4").innerHTML="Password not match"
    return false
}


if(usr!=""  && emal!="" && pas === true && repas ==true){
    
 
    
    }

    
    else{

        document.getElementById("p1").innerHTML=""
        document.getElementById("p2").innerHTML=""
        document.getElementById("p3").innerHTML=""
        document.getElementById("p4").innerHTML=""
        alert("submitted")
    }
    
    }











// else if(usr ===true){
//     document.getElementById("p1").innerHTML=""
    
// }

// else if(emal ===true){
//     document.getElementById("p2").innerHTML=""
    
// }
// else if(pas ===true){
//     document.getElementById("p3").innerHTML=""
    
// }
// else if(repas ===true){
//     document.getElementById("p4").innerHTML=""
    
// }
// else{
//     alert("submitted")
// }
// else if(usr == true && emal==true && pas==true && repas==true)
// {
    
//     document.getElementById("p1").innerHTML=""
//     document.getElementById("p2").innerHTML=""
//         document.getElementById("p3").innerHTML=""
//         document.getElementById("p4").innerHTML=""
//         return false
// }
// else{
//     alert("submited")
// }
// }

// 



function show(e){
    var ip = document.getElementById("pass")
    
    if(e.className === "fas fa-lock"){
        e.className="fa fa-unlock"
        ip.type = "text"

    }
    else{
        e.className="fas fa-lock"
        ip.type = "password"
    }
}
function show1(e){
    var ip1 = document.getElementById("repass")
    
    if(e.className === "fas fa-lock"){
        e.className="fa fa-unlock"
        ip1.type = "text"

    }
    else{
        e.className="fas fa-lock"
        ip1.type = "password"
    }
}

function prodModal(price , name , img ,desc){
    var modalImg = document.getElementById("modalImg")
    var modalPrice = document.getElementById("modalPrice")
    var modalName = document.getElementById("modalName")
    var modalDs = document.getElementById("modalDs")


    modalImg.src = img
    modalName.innerHTML = name
    modalPrice.innerHTML = price
    modalDs.innerHTML = desc
}


function neww(){
    window.location.href = "trendind.html";
}
function home(){
    window.location.href = "index.html";
}
function skin(){
    window.location.href = "skin.html";
}
function brt(){
    window.location.href = "breathe.html";
}
function abt(){
    window.location.href = "about.html";
}
function con(){
    window.location.href = "contact.html";
}