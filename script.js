let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  var currentButton = buttons[i];
  currentButton.addEventListener("click", printXorZero);
}
function isNotBlank(currentButton) {
    // console.log(currentButton);
  return currentButton.innerText.trim().length > 0;
}
function isThreeSame(first, second, third) {
  if (isNotBlank(first) && isNotBlank(second) && isNotBlank(third)) {
    return (
      first.innerText == second.innerText && first.innerText == third.innerText
    );
  }
  return false;
}
var flag = true;
var count = 0;
var isGameEnd = false;
function isGameOver() {
  return isThreeSame(buttons[0], buttons[1], buttons[2]) ||
    isThreeSame(buttons[3], buttons[4], buttons[5]) ||
    isThreeSame(buttons[6], buttons[7], buttons[8]) ||
    isThreeSame(buttons[0], buttons[3], buttons[6]) ||
    isThreeSame(buttons[1], buttons[4], buttons[7]) ||
    isThreeSame(buttons[2], buttons[5], buttons[8]) ||
    isThreeSame(buttons[0], buttons[4], buttons[8]) ||
    isThreeSame(buttons[2], buttons[4], buttons[6]);
}
function printXorZero() {
  var currentButton = this;
  if (!isGameEnd&&currentButton.innerText.trim().length == 0) {
    count++;
    var value = flag ? "X" : "0";
    currentButton.innerText = value;
    
    flag = !flag;
    if (count > 4) {
        if (isGameOver()) {
            isGameEnd = true;
            document.getElementById("output").innerText = "Game Over";
            countdown();

        //   alert("Game Over");
        }
      }
  }
  // console.log(value);
}
function reset(){
    clearInterval(interval);
    time = 5;
    isGameEnd = false;
    flag = true;
    count = 0;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
    }
    document.getElementById("output").innerText = "";
}
var time = 5;
var interval;
function countdown(){
  interval = setInterval(()=>{
    document.getElementById("output").innerText = `game over and resume in ${time}`;
    time--;
  },1000);
  setTimeout(reset,6000);
  console.log('After Timeout');
}