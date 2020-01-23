$(document).keypress(function(event){
  var text=event.key;
  playSound(text);
});

$("button").click(function(){
  var valueText=this.value;
  playSound(valueText);
});
function playSound(key)
{
  switch(key)
  {
    case "q":
    var crash=new Audio('sounds/crash.mp3');
    crash.play();
    break;
    case "w":
    var kick=new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;
    case "e":
    var snare=new Audio('sounds/snare.mp3');
    snare.play();
    break;
    case "r":
    var tom1=new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case "t":
    var tom2=new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case "y":
    var tom3=new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case "u":
    var tom4=new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
  }

}
