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
	if(output.textContent !== 'undefined'){
		output.textContent = message;
	}else{
		output.innerText = message;
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

function vidIllum(id,name,opac,cloak,time){
	'use strict';
	var bgDiv = id;
	var innerDiv = name;
	if(typeof cloak !== "undefined"){
		bgDiv.style.display = cloak;
		if(typeof time === 'undefined'){
			setTimeout(function(){
				innerDiv.style.opacity = opac;
			},50);
		}else{
			setTimeout(function(){
				innerDiv.style.opacity = opac;
			},time);
		}
	}else{
		console.log("Error: the variable 'cloak' was incorrectly passed through function 'vidIllum'. Double-check your variables.")
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
/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/

function emailClients(name,link,value){
	this.name = name;
	this.link = link;
	this.value = value;
}

//Defined init Function (onload, do this)
function init(){
	//measure taken in reducing sloppy coding
	'use strict';

	//email clients(variables)
	var out10Link = "https://www.youtube.com/embed/Pm9of-zRxAo",
		out13Link = "https://www.youtube.com/embed/GMcgWlI76Qg",
		out11Link = "https://www.youtube.com/embed/0FqFQep33Ec",
		macMailLink = "https://www.youtube.com/embed/7KbwvclNRfA";

	//email clients (objects)
	var outlook10 = new emailClients("Outlook 2010", out10Link, "outlook10"),
		outlook13 = new emailClients("Outlook 2013", out13Link, "outlook13"),
		outlook11 = new emailClients("Outlook 2011", out11Link, "outlook11"),
		macMail = new emailClients("Mac Mail", macMailLink, "MacMail");

	//Create Variables (DOM Selectors)
	var name = key("name"),
		position = key("position"),
		number = key("number"),
		number2 = key("number2"),
		number3 = key("number3"),
		ext1 = key("ext1"),
		ext2 = key("ext2"),
		email = key("email"), 
		form = key("form"),
		formPos = key("padTop"),
		close = key("close-button"),
		blackBG = key("blackBG"),
		coloring = "rgba(0,0,0,0.75)",
		erasing = "rgba(0, 0, 0, 0)",
		htmlBR = "<br />",
		breakInsert = key("break"),
		breakInsert2 = key("break2"),
		breakInsert3 = key("break3"),
		vidOverlay = key("videoOverlay"),
		vidTut = key("vid-tut"),
		client = key("client"),
		rplName = key("rplName"),
		rplTitle = key("rplTitle"),
		rplNum1 = key("rplNum1"),
		rplNum2 = key("rplNum2"),
		rplNum3 = key("rplNum3"),
		rplExt1 = key("rplExt1"),
		rplExt2 = key("rplExt2"),
		rplEmail = key("rplEmail"),
		copyPaste = key("copyPaste"),
		anchor = document.getElementsByTagName("a"),
		clientLink = key("client-link"),
		emHREF = anchor[1]; //References signature's # email address
		//console.log(emHREF);
		//console.log(numSwitch[selection].value);
		console.log(vidTut);
		vidTut.style.opacity = "0";
		vidOverlay.style.display = "none";

		console.log(typeof outlook10.link);
	//on submit
	function fluxCapacitate(){

		//captures client selected
		var numSwitch = key("numSwitch"),
		selection = numSwitch.selectedIndex;

		name = name.value;
		position = position.value;
		email = email.value;//Replaces # with whatever user enters
		email = email.toLowerCase();

		//number values are updated and the additional identifier is added
		number = "T: " + number.value;
		number2 = "T: " + number2.value;
		number3 = "C: " + number3.value;
		ext1 = ext1.value;
		ext2 = ext2.value;
		emHREF.href = "mailto:" + email;
		formPos.style.left = 0;
		fadedBG(blackBG, coloring, "block");
		whatUp(copyPaste,"0", 250);
		rplNum1.style.display = "inline";
		rplNum2.style.display = "inline";
		rplNum3.style.display = "inline";

		
		switch(numSwitch[selection].value){
			case outlook10.value:
				textSwap(client,outlook10.name);
				dropD(vidTut,outlook10.link);
				break;
			case outlook13.value:
				textSwap(client,outlook13.name);
				dropD(vidTut,outlook13.link);
				break;
			case outlook11.value:
				textSwap(client,outlook11.name);
				dropD(vidTut,outlook11.link);
				break;
			case macMail.value:
				textSwap(client,macMail.name);
				dropD(vidTut,macMail.link);
				break;
			default:
				console.log("doesn't work!");
				break;
		}

		/*
		//////////////////////////////////////////////////////////

		if/else chain that:

		checks for empty inputs
		relays what information was entered into the inputs

		//////////////////////////////////////////////////////////
		*/

		//If numbers aren't entered, but extensions are, reset extensions
		if((number.length <= 3) && (number2.length <= 3)){
			ext1 = "";
			ext2 = "";
		}else if(number.length <= 3){
			ext1 = "";
		}else if(number2.length <= 3){
			ext2 = "";
		}

		//if name, position, number, and email are all valid entries
		if((name.length > 0) && (position.length >0) && (email.length > 0)){

			//Extension swaps (executed if extensions are entered)
			extSwap(rplExt1,ext1);
			extSwap(rplExt2,ext2);

			//Global textSwaps — those that'll be applied regardless of what numbers are omitted
			textSwap(rplName,name);
			textSwap(rplTitle,position);
			textSwap(rplEmail,email);

			//if All numbers have been entered
			if((number.length > 3) && (number2.length > 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1, number);
				textSwap(rplNum2, number2);
				textSwap(rplNum3, number3);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3, htmlBR);

				//Reload init()
				init();

			//if the first two numbers have been entered but not the cell
			}else if((number.length > 3) && (number2.length > 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3,'');

				//Turn off the 3rd number
				rplNum3.style.display = "none";

				//Reload init()
				init();

			//if the first telephone number has been entered but not the second number
			}else if((number.length > 3) && (number2.length <= 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2,'');
				replHTML(breakInsert3, htmlBR);

				//Turn off the 2nd number
				rplNum2.style.display = "none";

				//Reload init()
				init();

			//if only the second and cell numbers have been entered
			}else if((number.length <= 3) && (number2.length > 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum1,number);
				textSwap(rplNum2,number2);
				textSwap(rplNum3,number3);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3, htmlBR);

				//Turn off the 2nd number
				rplNum1.style.display = "none";

				//Reload init()
				init();

			//if only the first telephone number has been entered
			}else if((number.length > 3) && (number2.length <= 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum1,number);

				//insert <br />
				replHTML(breakInsert, htmlBR);
				replHTML(breakInsert2,'');
				replHTML(breakInsert3,'');

				//Turn off 2nd and 3rd numbers
				rplNum2.style.display = "none";
				rplNum3.style.display = "none";

				//Reload init()
				init();

			//if only the second number has been entered
			}else if((number.length <= 3) && (number2.length > 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum2,number2);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, htmlBR);
				replHTML(breakInsert3, '');

				//Turn off 2nd and 3rd numbers
				rplNum1.style.display = "none";
				rplNum3.style.display = "none";

				//Reload init()
				init();

			//if only the cell has been entered
			}else if((number.length <= 3) && (number2.length <= 3) && (number3.length > 3)){

				//All other text swaps
				textSwap(rplNum3,number3);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, '');
				replHTML(breakInsert3, htmlBR);

				//Turn off 2nd and 3rd numbers
				rplNum1.style.display = "none";
				rplNum2.style.display = "none";

				//Reload init()
				init();

			//if none of the numbers were entered
			}else if((number.length <= 3) && (number2.length <= 3) && (number3.length <= 3)){

				//All other text swaps
				textSwap(rplNum1,number);

				//insert <br />
				replHTML(breakInsert, '');
				replHTML(breakInsert2, '');
				replHTML(breakInsert3, '');

				//Turn off 2nd and 3rd numbers
				rplNum1.style.display = "none";
				rplNum2.style.display = "none";
				rplNum3.style.display = "none";

				//Reload init()
				init();
			}
		}else{
				alert("Bad Entry: one of your inputs was incorrect.");
		}
		return false;
	}
	//close results
	function deAtomize(){
		if(formPos.style.left === "0px"){
			formPos.style.left = "-100%";
			fadedBG(blackBG,erasing,"none",500);
			vidIllum(vidOverlay,vidTut,"0","none",500);
		}else{
			alert("FAIL!!!");//Just reassurance I haven't completely screwed up
		}
	}
	//close results
	function miTe(){
		if((vidTut.style.opacity  === "0") && (vidOverlay.style.display === "none")){
			console.log("this is vidOverlay (if): " + vidOverlay);
			vidIllum(vidOverlay,vidTut,"1","block",500);
			return false;
		}else{
			console.log("this is vidOverlay (else): " + vidOverlay);
			vidIllum(vidOverlay,vidTut,"0","none",500);
			return false;
		}
	}

	//events
	close.onclick = deAtomize;
	blackBG.onclick = deAtomize;
	form.onsubmit = fluxCapacitate;
	clientLink.onclick = miTe;

}
window.onload = init;