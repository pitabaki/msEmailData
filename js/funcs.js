/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/


//return document id

function key(id){
	'use strict';
	if(typeof id === "string"){
		return document.getElementById(id);
	}
}

//replace text function
function textSwap(id,message){
	//measure taken in reducing sloppy coding
	'use strict';
	var output = id;
	if(typeof message !== "string"){
		var conversion = message.toString();
		if(output.textContent !== 'undefined'){
			output.textContent = conversion;
		}else{
			output.innerText = conversion;
		}
	}else{
		if(output.textContent !== 'undefined'){
			output.textContent = message;
		}else{
			output.innerText = message;
		}
	}
}

//replace text function
function replHTML(id,property){
	'use strict';
	var output = id;
	if(typeof property !== 'undefined'){
		output.innerHTML = property;
	}else{
		console.log("Fail!!! Function replHTML failed to pass 'property' properly. Double-check your variables.");
	}
}

function fadedBG(id,hue,cloak,time){
	'use strict';
	var bgDiv = id;
	if(typeof cloak === "string"){
		if(typeof time === 'undefined'){
			bgDiv.style.display = cloak;
			setTimeout(function(){
				bgDiv.style.backgroundColor = hue;
			},50);
		}else{
			bgDiv.style.backgroundColor = hue;
			setTimeout(function(){
				bgDiv.style.display = cloak;
			},time);
		}
	}else{
		console.log("Error: the variable 'cloak' was incorrectly passed through function 'fadedBG'. Double-check your variables.")
	}
}

function vidIllum(name,opac){
	'use strict';
	var innerDiv = name;
	if(typeof innerDiv.style.opacity !== "undefined"){
		innerDiv.style.opacity = opac;
	}else{
		console.log("Error: one of the variables was incorrectly passed through function 'vidIllum'. Double-check your variables.")
	}
}

function whatUp(id,position,time){
	'use strict';
	var bgDiv = id;
	if(typeof position === "string"){
		if(typeof time === 'undefined'){
			setTimeout(function(){
				bgDiv.style.marginTop = position;
			},50);
		}else{
			setTimeout(function(){
				bgDiv.style.marginTop = position;
			},time);
		}
	}else{
		console.log("Error: the variable 'position' was incorrectly passed through function 'whatUp'. Double-check your variables.")
	}
}

function extSwap(id,message){
	"use strict";
	console.log("Passing " + id + " and " + message);
	if(message.length !== 0){
		console.log("If with " + message);
		message = " x" + message;
		textSwap(id,message);
	}else{
		console.log("Else with " + message);
		message = " ";
		textSwap(id,message);
	}
}

function dropD(id,link){
	"use strict";
	var hvyMtl = id;
	if(typeof link === "string"){
		hvyMtl.src = link;
	}else{
		console.log("Link passed to dropD was not a string.");
	}
}