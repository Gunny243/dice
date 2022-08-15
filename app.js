let players = document.querySelectorAll(".player");
let buttons = document.querySelectorAll(".letsRoll");
let score = document.querySelectorAll("span");
let winButton = document.querySelector(".win");
let output = document.querySelector(".output");
// console.log(players);

for(let t of buttons){
    t.addEventListener("click", roll)
}

function roll(e){
    let user_id = e.target.id-1
    buttons[user_id].disabled = true;
    let chances = [1,2,3,4,5,6]
    let random = parseInt(Math.random()*choices.length)
    let dice_result = choices[random]
    // console.log(dice_result)
    score[user_id].innerText = dice_result
}

winButton.addEventListener("click", winner)

function winner(){
    let big = 0
    for(let t of score){
        let s = t.innerText
        if(s>big){
            big = s
        }
    }
    let winnerList = []
    for(i = 0; i<score.length; i++){
        if(score[i].innerText == big){
            winnerList.push[i]
        }
    }
    let winnerNames = ""
    for(i = 0; i<winnerList.length-1; i++){
        winnerNames = winnerNames + players[winnerList[i]].value + " "
    }

    output.innerText = `winner are ${winnerNames}`
}