const uname = document.getElementById("name")
const sname = document.getElementById("sname")
const radio1 = document.getElementById("r1")
const radio2 = document.getElementById("r2")
const radio3 = document.getElementById("r3")
const button = document.getElementById("button")

function buttonAction(){
    if(uname.value !== "" && sname.value !== ""){
        if(radio1.checked){
            window.alert("Hello " + uname.value + " " + sname.value)
        }else if(radio2.checked){
            window.alert("Good morning " + uname.value + " " + sname.value)
        }else if(radio3.checked){
            window.alert("Good evening " + uname.value + " " + sname.value)
        }else{
            window.alert("Wybierz tryb")
        }
    }else{
        window.alert("Podaj dane")
    }
}

button.addEventListener("click",buttonAction)