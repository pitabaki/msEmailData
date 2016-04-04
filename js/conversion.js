/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/

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

	//Create Variables (DOM Selectors)
	var form = util.key("form"),
		email_name = util.key("email_name"),
		email_perc = util.key("perc"),
		iFrame = util.key("iFrame"),
		vidTut = util.key("vid-tut"),
		rplName = util.key("rplName"),
		rplTitle = util.key("rplTitle"),
		subjectID = util.key("subject"),
		sendDateID = util.key("sendDate"),
		deliv = util.key("deliv"),
		opens = util.key("opens"),
		totalClicks = util.key("total-clicks"),
		uniqueClicks = util.key("unique-clicks");

	vidTut.height = Math.floor(window.innerHeight * 0.75);

	var total = 314,
	    pie = document.querySelector('.pie'),
	    activeClass = 'active';

	function calculations(object){
		util.textSwap(email_name, object.name);
		util.textSwap(email_perc, object.percentage());
		util.textSwap(deliv, object.received);
		util.textSwap(opens, object.opened);
		util.textSwap(uniqueClicks, object.uniqClicks);
		util.textSwap(totalClicks, object.totClicks);
		util.textSwap(subjectID, object.subject);
		util.textSwap(sendDateID, object.date);
		setPieChart(object);
		util.dropD(vidTut, object.url);
	}

	// work out percentage as a result of total
	var numberFixer = function(num){
	  var result = ((num * total) / 100);
	  return result;
	};

	// when you click a button setPieChart and setActiveClass



	// Set up default settings
	var setPieChart = function(object){
	  var number = object.percentage();
	  var fixedNumber = numberFixer(number),
	      result = fixedNumber + ' ' + total;
	  pie.style.strokeDasharray = result;
	};

	setPieChart(defaultObj);
	//setActiveClass(buttons.children[0]);

	//on submit
	function fluxCapacitator(){

		//captures client selected
		var numSwitch = util.key("numSwitch"),
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

	function swarley(){
		if(window.innerWidth > 1200){
			vidTut.width = Math.floor(window.innerWidth * 0.5);
			vidTut.height = Math.floor(window.innerHeight * 0.75);
		}else if(window.innerWidth <= 1200){
			vidTut.width = Math.floor(window.innerWidth * 0.45);
			vidTut.height = Math.floor(window.innerHeight * 0.75);
		}
	}

	//events
	form.onsubmit = fluxCapacitator;
	window.onresize = swarley;
}
window.onload = init;