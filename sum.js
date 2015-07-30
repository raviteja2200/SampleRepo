var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var addSum = document.getElementById('addition');
var option = document.getElementById('option');
option.addEventListener('input');
console.log(option);

if(option === "+"){
	numOne.addEventListener('input',add);
	numTwo.addEventListener('input',add);
}else if(option === "-"){
	numOne.addEventListener('input',sub);
	numTwo.addEventListener('input',sub);
}else if(option === "*"){
	numOne.addEventListener('input',mul);
	numTwo.addEventListener('input',mul);
}else if(option === "/"){
	numOne.addEventListener('input',div);
	numTwo.addEventListener('input',div);
}else{
	numOne.addEventListener('input',add);
	numTwo.addEventListener('input',add);
}

numOne.addEventListener('input',add);
numTwo.addEventListener('input',add);

function add(){
	var one=parseFloat(numOne.value)|| 0;
	var two=parseFloat(numTwo.value)|| 0;
	
	addSum.innerHTML = "your sum is: "+ (one+two); 
}
function sub(){
	var one=parseFloat(numOne.value)|| 0;
	var two=parseFloat(numTwo.value)|| 0;
	
	addSum.innerHTML = "your difference is: "+ (one-two); 
}
function mul(){
	var one=parseFloat(numOne.value)|| 0;
	var two=parseFloat(numTwo.value)|| 0;
	
	addSum.innerHTML = "your answer times is: "+ (one*two); 
}
function div(){
	var one=parseFloat(numOne.value)|| 0;
	var two=parseFloat(numTwo.value)|| 0;
	
	addSum.innerHTML = "your divsion is: "+ (one/two); 
}