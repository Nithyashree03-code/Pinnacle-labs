var popupoverlay = document.querySelector(".popup-overlay")
var popupbox= document.querySelector(".popup-box")
var addpopupbutton= document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancel = document.getElementById("cancel")
cancel.addEventListener("click",function(){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function orderplaced(){
    alert("your order is placed.... Thank you🥰Enjoy your food...🥳")
}
