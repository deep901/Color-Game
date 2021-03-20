var box 		= document.querySelectorAll(".box");
	h1 			= document.querySelector("h1"),
	h3 			= document.querySelector("h3"),
	disp 		= document.querySelector("#disp"),
	newColors   = document.querySelector("#newColors"),
	easy 		= document.querySelector("#easy"),
	hard 		= document.querySelector("#hard"),
	head		= document.querySelector(".head"),
	numBox		= box.length

var colors1 = [];
var colors2 = [];
var colors3 = [];
var colors4 = [];
var colors5 = [];
var colors6 = [];
var colors  = [
	// "rgb(40,45,35)",
	// "rgb(60,90,70)",
	// "rgb(80,135,105)",
	// "rgb(100,180,170)",
	// "rgb(120,180,175)",
	// "rgb(140,180,170)"
];


// generateColors(box.length);

randcol1(1);
randcol2(1);
randcol3(1);
randcol4(1);
randcol5(1);
randcol6(1);

for(i=0; i<colors1.length; i++){
	colors.push(colors1[i], colors2[i], colors3[i], colors4[i], colors5[i], colors6[i]);
}
while(i<colors.length){
	console.log(colors[i]);
	i++;
}

h1.textContent = colors[Math.floor(Math.random()*box.length)];


// FILLING GENERATED COLORS TO THE BOXES
for(i=0; i<colors.length; i++){
	box[i].style.backgroundColor = colors[i];
	box[i].style.display = "block";
}

hard.classList.add("level");

// HANDELING CLICKING ON THE BOXES
for(i=0; i<box.length; i++){
	box[i].addEventListener("click", function(){
	if(this.style.backgroundColor === h1.textContent){
		for(i=0; i<box.length; i++){
		box[i].style.backgroundColor = h1.textContent;
		head.style.backgroundColor = h1.textContent;
		disp.style.color = "green";
		disp.textContent = "Success!";
		newColors.textContent = "Play Again?";
	}
	} else{
		this.style.backgroundColor = "transparent";
		disp.style.color = "red";
		disp.textContent = "Try Again";
	}
});
}




// GENERATING NEW COLORS
newColors.addEventListener("click", function(){
	
	colors = []
	generateColors(numBox);
	h1.textContent = colors[Math.floor(Math.random()*numBox)];

	for(i=0; i<box.length; i++){
	box[i].style.backgroundColor = colors[i];
	disp.style.color = "orange";
	disp.textContent = "Are you ready?";
	newColors.textContent = "New Colors";
}head.style.backgroundColor = "teal";
});

// GENERATING AND PUSHING COLORS TO COLORS ARRAY
// function generateColors(num){
// 	for(i=0; i<num; i++){
// 	var r = Math.floor(Math.random()*256);
// 	var g = Math.floor(Math.random()*256);
// 	var b = Math.floor(Math.random()*256);
// 	var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
// 	colors.push(randomColor);	
// }
// }

function randcol1(num){
	for(i=0; i<num; i++){
		var randomColor = "rgb(" + red1() + ", " + green1() + ", "  + blue1() + ")";
		colors1.push(randomColor);
	}
}

function randcol2(num){
	for(i=0; i<num; i++){
		var randomColor = "rgb(" + red2() + ", " + green2() + ", "  + blue2() + ")";
		colors2.push(randomColor);
	}
}

function randcol3(num){
	for(i=0; i<num; i++){
		var randomColor = "rgb(" + red3() + ", " + green3() + ", "  + blue3() + ")";
		colors3.push(randomColor);
	}
}function randcol4(num){
	for(i=0; i<num; i++){
		var randomColor = "rgb(" + red4() + ", " + green4() + ", "  + blue4() + ")";
		colors4.push(randomColor);
	}
}

function randcol5(num){
	for(i=0; i<num; i++){
		var randomColor = "rgb(" + red5() + ", " + green5() + ", "  + blue5() + ")";
		colors5.push(randomColor);
	}
}

function randcol6(num){
	for(i=0; i<num; i++){
		var randomColor = "rgb(" + red6() + ", " + green6() + ", "  + blue6() + ")";
		colors6.push(randomColor);
	}
}




function red1(){
	return Math.floor(Math.random()*41) + 0;
}
function green1(){
	return Math.floor(Math.random()*41) + 0;
}
function blue1(){
	return Math.floor(Math.random()*41) + 0;
}


function red2(){
	return Math.floor(Math.random()*41) + 40;
}
function green2(){
	return Math.floor(Math.random()*41) + 40;
}
function blue2(){
	return Math.floor(Math.random()*41) + 40;
}


function red3(){
	return Math.floor(Math.random()*81) + 40;;
}
function green3(){
	return Math.floor(Math.random()*81) + 40;;
}
function blue3(){
	return Math.floor(Math.random()*81) + 40;
}


function red4(){
	return Math.floor(Math.random()*121) + 40;;
}
function green4(){
	return Math.floor(Math.random()*121) + 40;;
}
function blue4(){
	return Math.floor(Math.random()*121) + 40;
}


function red5(){
	return Math.floor(Math.random()*161) + 40;;
}
function green5(){
	return Math.floor(Math.random()*161) + 40;;
}
function blue5(){
	return Math.floor(Math.random()*161) + 40;
}


function red6(){
	return Math.floor(Math.random()*201) + 55;;
}
function green6(){
	return Math.floor(Math.random()*201) + 55;;
}
function blue6(){
	return Math.floor(Math.random()*201) + 55;
}





























// // EASY BUTTON
// easy.addEventListener("click", function(){
// 	newColors.textContent = "New Colors";
// 	easy.classList.add("level");
// 	hard.classList.remove("level");
// 	numBox = box.length/2;
// 	colors = []
// 	generateColors(numBox);
// 	h1.textContent = colors[Math.floor(Math.random()*numBox)];
	
// 	for(i=0; i<box.length; i++){
// 		if(colors[i]){
// 			box[i].style.backgroundColor = colors[i];
// 		} else{
// 			box[i].style.display = "none";
// 		}
// 	}
// 		disp.style.color = "orange";
// 		disp.textContent = "Are you ready?";
// 		head.style.backgroundColor = "teal";
// });

// // HARD BUTTON
// hard.addEventListener("click", function(){
// 	newColors.textContent = "New Colors";
// 	easy.classList.remove("level");
// 	hard.classList.add("level");
// 	numBox = box.length;
// 	colors = []
// 	generateColors(numBox);
// 	h1.textContent = colors[Math.floor(Math.random()*numBox)];

// 	for(i=0; i<box.length; i++){
// 		if(colors[i]){
// 			box[i].style.backgroundColor = colors[i];
// 			box[i].style.display = "block";
// 		}
// 	}
// 		disp.style.color = "orange";
// 		disp.textContent = "Are you ready?";
// 		head.style.backgroundColor = "teal";
// });
