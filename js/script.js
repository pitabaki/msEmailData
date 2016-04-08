/*

Email Signature Generator

Developed by: Peter Berki
Developed for: Meyer Sound

*/


//return document id

var util = {
	key: function(id){
		'use strict';
		if(typeof id === "string"){
			return document.getElementById(id);
		}
	},

	//replace text function
	textSwap: function(id,message){
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
	},

	//replace text function
	replHTML: function(id,property){
		'use strict';
		var output = id;
		if(typeof property !== 'undefined'){
			output.innerHTML = property;
		}else{
			console.log("Fail!!! Function replHTML failed to pass 'property' properly. Double-check your variables.");
		}
	},

	dropD: function(id,link){
		"use strict";
		var hvyMtl = id;
		if(typeof link === "string"){
			hvyMtl.src = link;
		}else{
			console.log("Link passed to dropD was not a string.");
		}
	},

	percentageCalc: function(array){
		if((typeof array === "object") && (array.length > 0)){
			var total = 0;
			for(var i = 0;i < array.length; i++){
				if(typeof array[i] === "number"){
					total += array[i];
				}else if((typeof parseFloat(array[i]) === "number") && (isNaN(parseFloat(array[i]) + 1)) === false){
                  total += parseFloat(array[i]);
                  console.log(array[i] + " was passed and added to total!");
                }else{
					console.log(array[i] + " was an incorrect value.");
				}
			}
			return Math.round(total/array.length);
		}else{
			console.log("Error: array passed with incorrect values.");
		}
	}
};
	var plsWorkshopInvite = {
		name: "PL+S Workshop Invitation",
		title: "plsWorkshopInvite",
		received: 465,
		opened: 198,
		totClicks: 7,
		uniqClicks: 7,
		subject: "RSVP | Rental Market Workshop at Prolight + Sound",
		date: "March 1st, 2016",
		url: "http://meyersound.com/mail/2016/1603_dealer_workshop_invitation/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var productUpdate = {
		name: "Product News Update",
		title: "productUpdate",
		received: 577,
		opened: 245,
		totClicks: 65,
		uniqClicks: 40,
		subject: "Meyer Sound Product Updates: MAPP, Compass, SIM, 3D Measurement",
		date: "March 3rd, 2016",
		url:"http://www.meyersound.com/mail/2016/160303_ddr/index.html/",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var soundStories = {
		name: "Sound Stories",
		title: "soundStories",
		received: 29120,
		opened: 6803,
		totClicks: 971,
		uniqClicks: 683,
		subject: "LEO Family Powers 300,000-Strong Papal Event in Mexico",
		date: "March 2nd, 2016",
		url: "http://www.meyersound.com/news/sound_stories_archives/sound_stories_239.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var thinkingSound = {
		name: "Thinking Sound",
		title: "thinkingSound",
		received: 33302,
		opened: 8178,
		totClicks: 1182,
		uniqClicks: 922,
		subject: "Jose Rivera on Mixing Marc Anthony: 360 Degrees of Emotion",
		date: "March 8th, 2016",
		url: "http://www.meyersound.com/mail/newsletter/thinkingsound035.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var constDemo = {
		name: "Constellation Demo: Lithuania",
		title: "constDemo",
		received: 30,
		opened: 20,
		totClicks: 4,
		uniqClicks: 2,
		subject: "You're Invited to Hear Constellation | Lithuania, March 14th",
		date: "March 8th, 2016",
		url: "http://meyersound.com/mail/2016/1603_const_demo_lithu/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var plsEmailOne = {
		name: "Prolight + Sound: Email 1",
		title: "plsEmailOne",
		received: 34949,
		opened: 8073,
		totClicks: 573,
		uniqClicks: 410,
		subject: "Join Us at Prolight + Sound | LEOPARD Presentations Daily",
		date: "March 15th, 2016",
		url: "http://www.meyersound.com/mail/2016/1603_pls_promo_01/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var plsWorkshopRemind = {
		name: "Prolight + Sound: Workshop Reminder",
		title: "plsWorkshopRemind",
		received: 463,
		opened: 194,
		totClicks: 4,
		uniqClicks: 3,
		subject: "Reminder | RSVP Dealer Workshop",
		date: "March 16th, 2016",
		url: "http://meyersound.com/mail/2016/160315_dealer_workshop_invitation/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var soundSource = {
		name: "Sound Source",
		title: "soundSource",
		received: 31068,
		opened: 6666,
		totClicks: 431,
		uniqClicks: 263,
		subject: "Sound Source Monthly Education Newsletter | March 2016",
		date: "March 21st, 2016",
		url: "http://www.meyersound.com/mail/seminars.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var ddPLSInternal = {
		name: "D&D News: PLS Internal",
		title: "ddPLSInternal",
		received: 100,
		opened: 60,
		totClicks: 14,
		uniqClicks: 13,
		subject: "Looking Forward to PL+S",
		date: "March 22nd, 2016",
		url: "http://meyersound.com/mail/2016/160322_ddr_internal/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var ddPLS = {
		name: "D&D News: PLS",
		title: "ddPLS",
		received: 464,
		opened: 180,
		totClicks: 18,
		uniqClicks: 18,
		subject: "Looking Forward to PL+S",
		date: "March 23rd, 2016",
		url: "http://meyersound.com/mail/2016/160323_ddr/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var seminarBogota = {
		name: "Bogota Seminar",
		title: "seminarBogota",
		received: 10594,
		opened: 2506,
		totClicks: 382,
		uniqClicks: 271,
		subject: "Seminario de Diseño de Sistemas en Bogotá, Colombia.",
		date: "March 28th, 2016",
		url: "http://meyersound.com/mail/2016/education/funda_bogota_1603/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var ddProductInternal = {
		name: "D&D News: Product Update Internal",
		title: "ddProductInternal",
		received: 128,
		opened: 76,
		totClicks: 49,
		uniqClicks: 35,
		subject: "New Product Announcement | MJF-208, MDM-5000, LYON-WXT",
		date: "March 28th, 2016",
		url: "http://meyersound.com/mail/2016/160328_ddr_internal/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var ddProduct = {
		name: "D&D News: Product Update Internal",
		title: "ddProduct",
		received: 473,
		opened: 171,
		totClicks: 131,
		uniqClicks: 59,
		subject: "New Product Announcement | MJF-208, MDM-5000, LYON-WXT",
		date: "March 29th, 2016",
		url: "http://meyersound.com/mail/2016/160329_ddr/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var plsEmailTwo = {
		name: "Prolight + Sound: Email 2",
		title: "plsEmailTwo",
		received: 34836,
		opened: 7354,
		totClicks: 1643,
		uniqClicks: 1031,
		subject: "New Products at Prolight + Sound",
		date: "March 30th, 2016",
		url: "http://www.meyersound.com/mail/2016/1603_pls_promo_02/index.html",
		percentage: function(){
			return Math.round(this.opened/this.received * 100);
		}
	};

	var defaultObj = {
		name: "Select an Email",
		title: "defaultObj",
		received: 100,
		opened: 100,
		totClicks: 100,
		uniqClicks: 100,
		subject: "Subject",
		date: "Date",
		url: "http://www.meyersound.com/mail/blank.html",
		percentage: function(){
			return Math.round(100/100 * 100);
		}
	};
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
		selectHighlight = util.key("selection-highlight"),
		submitHighlight = util.key("submit-highlight"),
		submitButton = util.key("submit"),
		defaultEmail = util.key("default"),
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
		defaultEmail.style.display = "none";

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
				defaultEmail.style.display = "block";
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