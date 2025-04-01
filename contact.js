var opennav=document.getElementById("opennav")
var navmenu=document.getElementById("navmenu")
var closenav=document.getElementById("closenav")


opennav.addEventListener("click",function(){
    navmenu.style.right=0
})

closenav.addEventListener("click",function(){
    navmenu.style.right="-50%"
})