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

function pieValue(received,opened){
	return  parseInt(opened)/parseInt(received);
}

/*
function emailStats(received,opened,totalClicks,uniqueClicks,date,url){
	this.received = received;
	this.opened = opened;
	this.totalClicks = totalClicks;
	this.uniqueClicks = uniqueClicks;
	this.date = date;
	this.url = url;
	this.percentage = opened / received;
}*/
 
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
		email_name = key("email_name"),
		email_perc = key("perc"),
		rplName = key("rplName"),
		rplTitle = key("rplTitle"),
		subjectID = key("subject"),
		sendDateID = key("sendDate"),
		deliv = key("deliv"),
		opens = key("opens"),
		totalClicks = key("total-clicks"),
		uniqueClicks = key("unique-clicks"),
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
		//vidOverlay.style.display = "none";
		vidTut.height = "1200";

	var total = 314,
	    pie = document.querySelector('.pie'),
	    activeClass = 'active';

	function calculations(object){
		//return alert("works");
		//var percen = "'" + object.percentage + "'";
		textSwap(email_name, object.name);
		//alert(perc);
		console.log("works here");
		textSwap(email_perc, object.percentage);
		textSwap(deliv, object.received);
		textSwap(opens, object.opened);
		textSwap(uniqueClicks, object.uniqClicks);
		textSwap(totalClicks, object.totClicks);
		textSwap(subjectID, object.subject);
		textSwap(sendDateID, object.date);
		setPieChart(object);
		dropD(vidTut, object.url);
	}

	// work out percentage as a result of total
	var numberFixer = function(num){
	  var result = ((num * total) / 100);
	  return result;
	}

	// when you click a button setPieChart and setActiveClass



	// Set up default settings
	var setPieChart = function(object){
	  var number = object.percentage,
	      fixedNumber = numberFixer(number),
	      result = fixedNumber + ' ' + total;
	  pie.style.strokeDasharray = result;
	}

	setPieChart('defaultSet');
	//setActiveClass(buttons.children[0]);

	//on submit
	function fluxCapacitate(){

		//captures client selected
		var numSwitch = key("numSwitch"),
		selection = numSwitch.selectedIndex;
		
		switch(numSwitch[selection].value){
			case "plsWorkshopInvite":
				//alert("works");
				calculations(plsWorkshopInvite);
				break;
			case "productUpdate":
				calculations(productUpdate);
				break;
			case "soundStories":
				calculations(soundStories);
				break;
			case "thinkingSound":
				calculations(thinkingSound);
				break;
			case "constDemo":
				calculations(constDemo);
				break;
			case "plsEmailOne":
				calculations(plsEmailOne);
				break;
			case "plsWorkshopRemind":
				calculations(plsWorkshopRemind);
				break;
			case "soundSource":
				calculations(soundSource);
				break;
			case "ddPLSInternal":
				calculations(ddPLSInternal);
				break;
			case "ddPLS":
				calculations(ddPLS);
				break;
			case "seminarBogota":
				calculations(seminarBogota);
				break;
			case "ddProductInternal":
				calculations(ddProductInternal);
				break;
			case "ddProduct":
				calculations(ddProduct);
				break;
			case "plsEmailTwo":
				calculations(plsEmailTwo);
				break;
			default:
				calculations(defaultObj);
				break;
		}
		return false;
		/*
		//////////////////////////////////////////////////////////

		if/else chain that:

		checks for empty inputs
		relays what information was entered into the inputs

		//////////////////////////////////////////////////////////
		*/
	}

	//close results
	function deAtomize(){
		if(formPos.style.left === "0px"){
			formPos.style.left = "-100%";
			fadedBG(blackBG,erasing,"none",500);
			vidIllum(vidTut,"0");
			setTimeout(function(){
				vidOverlay.style.display = "none";
			},50);
		}else{
			alert("FAIL!!!");//Just reassurance I haven't completely screwed up
		}
	}
	//close results
	function mite(){
		if(window.innerWidth > 992){
			vidOverlay.style.display = "block";
				if(vidTut.style.opacity  === "0"){
					setTimeout(function(){
						vidIllum(vidTut,"1");
						vidTut.width = Math.floor(window.innerWidth * 0.5);
						vidTut.height = Math.floor(vidTut.width * 0.56);
					},50);
				}else{
					setTimeout(function(){
						vidIllum(vidTut,"0");
					},50);
				}
		}else{
			vidOverlay.style.display = "none";
		}
		return false;
	}

	function swarley(){
		if(window.innerWidth > 1200){
			vidTut.width = Math.floor(window.innerWidth * 0.5);
			vidTut.height = Math.floor(vidTut.width * 0.56);
		}else if(window.innerWidth <= 1200){
			vidTut.width = Math.floor(window.innerWidth * 0.35);
			vidTut.height = Math.floor(vidTut.width * 0.56);
		}
	}

	//events
	form.onsubmit = fluxCapacitate;
	window.onresize = swarley;
}
window.onload = init;