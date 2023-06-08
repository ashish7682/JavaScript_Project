var decreaseBtn=document.getElementById('btn-decrease');
var resetBtn=document.getElementById('btn-reset');
var increaseBtn=document.getElementById('btn-increase');

var numberDiv=document.getElementById('number');

function increase()
{
    numberDiv.innerHTML=Number(numberDiv.innerHTML)+1;

}

function reset()
{
    numberDiv.innerHTML=0;
}
function decrease()
{
    numberDiv.innerHTML=Number(numberDiv.innerHTML)-1;
}
increaseBtn.addEventListener('click',increase);
decreaseBtn.addEventListener('click',decrease);
resetBtn.addEventListener('click',reset);
