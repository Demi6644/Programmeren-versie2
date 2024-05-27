let bob = document.querySelector('#bobHond')
bobHond.src = "img/Bob-proogrammeren.png"
let bobNormal = false
let audio = new Audio("sounds/eating.mp3")
let audio2 = new Audio("sounds/funny.mp3")

const btnvoerBob = document.querySelector("button");
btnvoerBob.addEventListener('click',voerBob);
const btnmaakSchoon = document.querySelector("button1");
btnmaakSchoon.addEventListener('click',maakSchoon);
const btnaaiBob = document.querySelector("button2");
btnaaiBob.addEventListener('click',aaiBob);
const voerNu = document.querySelector('#voerNu')
const schoon = document.querySelector('#schoon')
const aai = document.querySelector('#aai')

function voerBob() {
    console.log("lekker eten!");
    voerNu.textContent = "Nom Nom, Dankuu"
    setTimeout(hideHint, 3000)
    if(bobNormal == true){
        bobHond.src = "img/Bobvoer-proogrammeren-2.png"
        bobNormal = false
        audio.play()
    } else {
        bobHond.src = "img/Bob-proogrammeren.png"
        bobNormal = true
    }
}

if (bobNormal == true){
    bobHond.src = "img/Bobvoer-proogrammeren-2.png"
    bobNormal = false
} else {
    bobHond.src = "img/Bob-proogrammeren.png"
    bobNormal = true
}

function hideHint() {
    voerNu.textContent = ""
    bobHond.src = "img/Bob-proogrammeren.png"
}

showHint()

function maakSchoon() {
    console.log("dankjewel! nu ben ik schoon");
    schoon.textContent = "dankjewel! nu ben ik lekker schoon!"
    setTimeout(hideHint1, 3000)
    if(bobNormal == true){
        bobHond.src = "img/Bob-proogrammeren-3.png"
        bobNormal = false
        audio2.play()
    } else {
        bobHond.src = "img/Bob-proogrammeren.png"
        bobNormal = true
    }
}

if (bobNormal == true){
    bobHond.src = "img/Bob-proogrammeren-3.png"
    bobNormal = false
} else {
    bobHond.src = "img/Bob-proogrammeren.png"
    bobNormal = true
}

function hideHint1() {
    schoon.textContent = ""
    bobHond.src = "img/Bob-proogrammeren.png"

}

showHint()

function aaiBob() {
    console.log("mmmhhhhh");
    aai.textContent = "mmhhhhhmmm"
    setTimeout(hideHint2, 3000)
}

function hideHint2() {
    aai.textContent = ""
}

showHint()

