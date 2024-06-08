const num0 = document.getElementById("num0")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")

const clr = document.getElementById("clear")
const arrow = document.getElementById("arrow")
const divi = document.getElementById("divide")
const multi = document.getElementById("multi")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const dot = document.getElementById("dot")
const equals = document.getElementById("equals")

const screen = document.getElementById("screen")

const inputedStuff = []
const listaNumerow = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9]
const listaZnaczkow = [divi,multi,minus,plus,dot]


let ifLastActionWasEquals = 0;

for (const e of listaNumerow) {
    e.addEventListener("click",()=>dodajNumDoTab(e.innerText))
}

function updateScreen(){
    screen.innerText = inputedStuff.join("")
}

function dodajNumDoTab(x){
    if(ifLastActionWasEquals){
        ifLastActionWasEquals = 0
        allClear()
    }
    inputedStuff.push(x)
    updateScreen()
}
const znaki = ['x','÷','-','+','.']
function dodajZnaczek(x){
    const xz = inputedStuff[inputedStuff.length-1]
    if(inputedStuff.length){
        if(znaki.includes(xz) && inputedStuff.length > 1){
            inputedStuff[inputedStuff.length-1] = x
        }else if(xz === "-" && x === "-" || xz === "-" || ifLastActionWasEquals && x === "."){}
        else {
            inputedStuff.push(x)
        }
    }else if(x === "-"){
        inputedStuff.push(x)
    }
    updateScreen()
}

function allClear(){
    while(inputedStuff.length > 0){
        inputedStuff.pop()
    }
    updateScreen()
}
clr.addEventListener("click",allClear)

// One item clear
arrow.addEventListener("click",()=>{
    inputedStuff.pop()
    updateScreen()
})

for (const e of listaZnaczkow) {
    e.addEventListener("click",()=>dodajZnaczek(e.innerText))
}
const liczby = ['0','1','2','3','4','5','6','7','8','9']
function calculate(){
    if(inputedStuff.length !== 0 && liczby.includes(inputedStuff[inputedStuff.length-1])){
        let i = 0
        while(i < inputedStuff.length-1){
            if(!znaki.includes(inputedStuff[i]) && !znaki.includes(inputedStuff[i+1])){
                inputedStuff.splice(i,2, inputedStuff[i]+inputedStuff[i+1])
                console.log(inputedStuff)
            }else{
                i++
            }
            
        }
    }
}

equals.addEventListener("click",calculate)