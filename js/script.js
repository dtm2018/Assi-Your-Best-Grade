let qNum = 0

let butPrev = document.querySelector("#prev")
let showAnswer = document.querySelector("#showAnswer")
let butNext = document.querySelector("#next")
let imgCont = document.querySelector(".imgCont")

let quests = ["null", "001-110.png", "002-110.png", "003-110.png", "004-110.png "]

butPrev.addEventListener("click", () => {
    imgCont.style.backgroundImage = `url(images/${quests[--qNum]})`
}) 

butNext.addEventListener("click", () => {
    qNum++
    imgCont.style.backgroundImage = `url(images/${quests[qNum]})`
}) 
 
showAnswer.addEventListener("click", () => {
    alert("assi berth, will be add (hide - show)")
})