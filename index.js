const button = document.querySelector(".button");
const hexCodeText = document.querySelector(".hexCode");
const box = document.querySelector(".box");
let hexCode;

function getRandomNum(num=10){
    return Math.floor(Math.random()*num)
}

function getRandomLetter(){
    const lettrsRange = ["A","B","C","D","E","F"];

    //0~5의 숫자를 랜덤으로 얻기.
    const randomNumUnderSix = getRandomNum(6)
    return lettrsRange[randomNumUnderSix];
}

function getNewHexCode(){
    let hexCode="";
    for(let i = 0; i < 6; i++){
        let random = getRandomNum();
        //무작위로 hexcode에 숫자를 넣을지 문자를 넣을지 결정.
        let eachCode = (random%2 === 0) ? getRandomLetter() : getRandomNum();
        hexCode += eachCode;
    }
    return hexCode;
}

function handleClick(){
    let hexCode = getNewHexCode();
    hexCodeText.innerHTML = ` #${hexCode}`;
    box.style.backgroundColor = `#${hexCode}`

}


function init(){
    button.addEventListener("click", handleClick);
}

init();