function openPage(evt,pageName){
    var i,tablink,tabcontent;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++){
         tabcontent[i].style.display = "none";
     }
     tablink = document.getElementsByClassName("tablink");
     for(i =0; i < tablink.length; i++){
         tablink[i].className = tablink[i].className.replace("active","")
     }
     document.getElementById(pageName).style.display = "block";
     evt.currentTarget.className += "active";
}
document.getElementById("defaultOpen").click();