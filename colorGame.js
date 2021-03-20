var box 		= document.querySelectorAll(".box");
	h1 			= document.querySelector("h1"),
	disp 		= document.querySelector("#disp"),
	newColors   = document.querySelector("#newColors"),
	level0 		= document.querySelector("#level0"),
	level1 		= document.querySelector("#level1"),
	head		= document.querySelector(".head"),
	logo		= document.querySelector(".logo"),
	colors11	= [],
	colors12	= [],
	colors13	= [],
	bucket		= [],
	colors		= []

logo.style.display = "none";
generateColors00(6);

// FILLING GENERATED COLORS TO THE BOXES
for(i=0; i<colors.length; i++){
	box[i].style.backgroundColor = colors[i];
	box[i].style.display = "block";
	box[i].style.boxShadow = "5px 5px 1px 0.5px rgba(" + colors[i].substr(4).slice(0, -1) + ", 0.1)" ;
}

h1.textContent = colors[Math.floor(Math.random()*box.length)];
level0.classList.add("level0");

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*1.25}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = h1 => h1.innerHTML = flickerAndColorText(h1.textContent);
neonGlory(h1);

// HANDELING CLICKS ON THE BOXES
for(i=0; i<box.length; i++){
	box[i].addEventListener("click", function(){
		if(this.style.backgroundColor == h1.textContent){
			for(i=0; i<box.length; i++){
				box[i].style.backgroundColor = h1.textContent;
				box[i].style.boxShadow = "5px 5px 1px 0.5px rgba(" + h1.textContent.substr(4).slice(0, -1) + ", 0.2)" ;
		} 	
			disp.style.display = "none";
			logo.style.display = "inline";
			newColors.textContent = "Play Again?";
	} else{
		this.style.backgroundColor = "transparent";
		this.style.boxShadow = "none";
		disp.style.color = "red";
		disp.textContent = "Try Again!";
	}
});
}

// GENERATING NEW COLORS
	newColors.addEventListener("click", function(){
		if(bucket.length != 0){
			bucket = [];
			colors11 = [];
			colors12 = [];
			colors13 = [];
			colors = [];
			generateColors11(6);
			generateColors12(6);
			generateColors13(6);
			var rand = Math.floor(Math.random()*3);
			bucket.push(colors11, colors12, colors13);
				for(i=0; i<6; i++){
					colors.push(bucket[rand][i]);
			}
				for(i=0; i<box.length; i++){
					box[i].style.backgroundColor = colors[i];
					box[i].style.boxShadow = "5px 5px 1px 0.5px rgba(" + colors[i].substr(4).slice(0, -1) + ", 0.1)" ;
			}
				
				h1.textContent = colors[Math.floor(Math.random()*6)];
				const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*1.25}s linear both ">${letter}</span>`
				const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
				const flickerAndColorText = text => 
				  text
				    .split('')
				    .map(flickerLetter)
				    .map(colorLetter)
				    .join('');
				const neonGlory = h1 => h1.innerHTML = flickerAndColorText(h1.textContent);
				neonGlory(h1);
				logo.style.display = "none";
				disp.style.display = "inline";
				disp.style.color = "orange";
				disp.textContent = "Ready?";
				newColors.textContent = "New Colors";

		} else{
			colors = [];
			generateColors00(6);
			h1.textContent = colors[Math.floor(Math.random()*box.length)];
			for(i=0; i<box.length; i++){
				box[i].style.backgroundColor = colors[i];
				box[i].style.boxShadow = "5px 5px 1px 0.5px rgba(" + colors[i].substr(4).slice(0, -1) + ", 0.1)" ;
			}
				const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*1.25}s linear both ">${letter}</span>`
				const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
				const flickerAndColorText = text => 
				  text
				    .split('')
				    .map(flickerLetter)
				    .map(colorLetter)
				    .join('');
				const neonGlory = h1 => h1.innerHTML = flickerAndColorText(h1.textContent);
				neonGlory(h1);
				logo.style.display = "none";
				disp.style.display = "inline";
				disp.style.color = "orange";
				disp.textContent = "Ready?";
				newColors.textContent = "New Colors";
		}
});


// HANDELING LEVEL 0
	level0.addEventListener("click", function(){
	level1.classList.remove("level1");
	level0.classList.add("level0");
	colors = [];
	bucket = [];
	generateColors00(6);
	h1.textContent = colors[Math.floor(Math.random()*6)];
	const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*1.25}s linear both ">${letter}</span>`
	const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
	const flickerAndColorText = text => 
	  text
	    .split('')
	    .map(flickerLetter)
	    .map(colorLetter)
	    .join('');
	const neonGlory = h1 => h1.innerHTML = flickerAndColorText(h1.textContent);
	neonGlory(h1);

	for(i=0; i<box.length; i++){
		box[i].style.backgroundColor = colors[i];
		box[i].style.boxShadow = "5px 5px 1px 0.5px rgba(" + colors[i].substr(4).slice(0, -1) + ", 0.1)" ;
	}
		logo.style.display = "none";
		disp.style.display = "inline";
		disp.style.color = "orange";
		disp.textContent = "Ready?";
		newColors.textContent = "New Colors";
});

// HANDELING LEVEL 1
	level1.addEventListener("click", function(){
	level0.classList.remove("level0");
	this.classList.add("level1");
	bucket = [];
	colors11 = [];
	colors12 = [];
	colors13 = [];
	colors = [];
	generateColors11(6);
	generateColors12(6);
	generateColors13(6);
	var rand = Math.floor(Math.random()*3);
	bucket.push(colors11, colors12, colors13);
		for(i=0; i<6; i++){
			colors.push(bucket[rand][i]);
		}
		for(i=0; i<box.length; i++){
			box[i].style.backgroundColor = colors[i];
		}
			h1.textContent = colors[Math.floor(Math.random()*6)];
			const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*1.25}s linear both ">${letter}</span>`
			const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
			const flickerAndColorText = text => 
			  text
			    .split('')
			    .map(flickerLetter)
			    .map(colorLetter)
			    .join('');
			const neonGlory = h1 => h1.innerHTML = flickerAndColorText(h1.textContent);
			neonGlory(h1);
			logo.style.display = "none";
			disp.style.display = "inline";
			disp.style.color = "orange";
			disp.textContent = "Ready?";
			newColors.textContent = "New Colors";
});




//GENERATING AND PUSHING COLORS TO THE COLORS11 ARRAY
function generateColors11(num){
	for(i=0; i<num; i++){
		var r = Math.floor(Math.random()*101);
		var g = Math.floor(Math.random()*61) + 120;
		var b = Math.floor(Math.random()*76) + 180;
		var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
		colors11.push(randomColor);
	}
}

//GENERATING AND PUSHING COLORS TO THE COLORS12 ARRAY
function generateColors12(num){
	for(i=0; i<num; i++){
		var r = Math.floor(Math.random()*76) + 180;
		var g = Math.floor(Math.random()*101);
		var b = Math.floor(Math.random()*61) + 120;
		var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
		colors12.push(randomColor);
	}
}

//GENERATING AND PUSHING COLORS TO THE COLORS13 ARRAY
function generateColors13(num){
	for(i=0; i<num; i++){
		var r = Math.floor(Math.random()*61) + 120;
		var g = Math.floor(Math.random()*101);
		var b = Math.floor(Math.random()*76) + 180;
		var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
		colors13.push(randomColor);
	}
}

//GENERATING AND PUSHING COLORS TO THE COLORS ARRAY
function generateColors00(num){
	for(i=0; i<num; i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var randomColor = "rgb(" + r + ", " + g + ", " + b + ")";
		colors.push(randomColor);
	}
}