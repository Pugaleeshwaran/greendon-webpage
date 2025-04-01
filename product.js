var opennav=document.getElementById("opennav")
var navmenu=document.getElementById("navmenu")
var closenav=document.getElementById("closenav")


opennav.addEventListener("click",function(){
    navmenu.style.right=0
})

closenav.addEventListener("click",function(){
    navmenu.style.right="-50%"
})

// --------------searchbar-option-------------

var search=document.getElementById("search")
var container=document.getElementById("container")
var productlist=container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    entervalue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i=i+1){
        if(productlist[i].textContent.toUpperCase().indexOf(entervalue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})