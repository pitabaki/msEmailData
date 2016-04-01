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

	var stats = {
		plsWorkshopInvite: 43,
		productUpdate: 42,
		soundStories: 23,
		thinkingSound: 25,
		constDemo: 67,
		plsEmailOne: 23,
		plsWorkshopRemind: 42,
		soundSource: 21,
		ddPLSInternal: 60,
		ddPLS: 39,
		seminarBogota: 24,
		ddProductInternal: 59,
		ddProduct: 36,
		plsEmailTwo: 21,
		defaultSet: 100
	};

	var totRec = {
		plsWorkshopInvite: 465,
		productUpdate: 577,
		soundStories: 29120,
		thinkingSound: 33302,
		constDemo: 30,
		plsEmailOne: 34949,
		plsWorkshopRemind: 463,
		soundSource: 31068,
		ddPLSInternal: 100,
		ddPLS: 464,
		seminarBogota: 10594,
		ddProductInternal: 128,
		ddProduct: 473,
		plsEmailTwo: 34836,
		defaultSet: 100
	};

	var uniqOpen = {
		plsWorkshopInvite: 198,
		productUpdate: 245,
		soundStories: 6803,
		thinkingSound: 8178,
		constDemo: 20,
		plsEmailOne: 8073,
		plsWorkshopRemind: 194,
		soundSource: 6666,
		ddPLSInternal: 60,
		ddPLS: 180,
		seminarBogota: 2506,
		ddProductInternal: 76,
		ddProduct: 171,
		plsEmailTwo: 7354,
		defaultSet: 100
	};

	var totClicks = {
		plsWorkshopInvite: 7,
		productUpdate: 65,
		soundStories: 971,
		thinkingSound: 1182,
		constDemo: 4,
		plsEmailOne: 573,
		plsWorkshopRemind: 4,
		soundSource: 431,
		ddPLSInternal: 14,
		ddPLS: 18,
		seminarBogota: 382,
		ddProductInternal: 49,
		ddProduct: 131,
		plsEmailTwo: 1643,
		defaultSet: 100
	};

	var uniqClicks = {
		plsWorkshopInvite: 7,
		productUpdate: 40,
		soundStories: 683,
		thinkingSound: 922,
		constDemo: 2,
		plsEmailOne: 410,
		plsWorkshopRemind: 3,
		soundSource: 263,
		ddPLSInternal: 13,
		ddPLS: 18,
		seminarBogota: 271,
		ddProductInternal: 35,
		ddProduct: 59,
		plsEmailTwo: 1031,
		defaultSet: 100
	};

	var sendDate = {
		plsWorkshopInvite: "March 1st, 2016",
		productUpdate: "March 3rd, 2016",
		soundStories: "March 2nd, 2016",
		thinkingSound: "March 8th, 2016",
		constDemo: "March 8th, 2016",
		plsEmailOne: "March 15th, 2016",
		plsWorkshopRemind: "March 16th, 2016",
		soundSource: "March 21st, 2016",
		ddPLSInternal: "March 22nd, 2016",
		ddPLS: "March 23rd, 2016",
		seminarBogota: "March 28th, 2016",
		ddProductInternal: "March 28th, 2016",
		ddProduct: "March 29th, 2016",
		plsEmailTwo: "March 30th, 2016",
		defaultSet: "Date"
	}

	var subject = {
		plsWorkshopInvite: "RSVP | Rental Market Workshop at Prolight + Sound",
		productUpdate: "Meyer Sound Product Updates: MAPP, Compass, SIM, 3D Measurement",
		soundStories: "LEO Family Powers 300,000-Strong Papal Event in Mexico",
		thinkingSound: "Jose Rivera on Mixing Marc Anthony: 360 Degrees of Emotion",
		constDemo: "You're Invited to Hear Constellation | Lithuania, March 14th",
		plsEmailOne: "Join Us at Prolight + Sound | LEOPARD Presentations Daily",
		plsWorkshopRemind: "Reminder | RSVP Dealer Workshop",
		soundSource: "Sound Source Monthly Education Newsletter | March 2016",
		ddPLSInternal: "Looking Forward to PL+S",
		ddPLS: "Looking Forward to PL+S",
		seminarBogota: "Seminario de Diseño de Sistemas en Bogotá, Colombia.",
		ddProductInternal: "New Product Announcement | MJF-208, MDM-5000, LYON-WXT",
		ddProduct: "New Product Announcement | MJF-208, MDM-5000, LYON-WXT",
		plsEmailTwo: "New Products at Prolight + Sound",
		defaultSet: "Subject"
	}

	console.log(subject);
	//MAKE SURE TO
	//FILL IN THESE
	//LINKSSSSSS

	var links = {
		plsWorkshopInvite: "http://meyersound.com/mail/2016/1603_dealer_workshop_invitation/index.html",
		productUpdate: "http://www.meyersound.com/mail/2016/160303_ddr/index.html/",
		soundStories: "http://www.meyersound.com/news/sound_stories_archives/sound_stories_239.html",
		thinkingSound: "http://www.meyersound.com/mail/newsletter/thinkingsound035.html",
		constDemo: "http://meyersound.com/mail/2016/1603_const_demo_lithu/index.html",
		plsEmailOne: "http://www.meyersound.com/mail/2016/1603_pls_promo_01/index.html",
		plsWorkshopRemind: "http://meyersound.com/mail/2016/160315_dealer_workshop_invitation/index.html",
		soundSource: "http://www.meyersound.com/mail/seminars.html",
		ddPLSInternal: "http://meyersound.com/mail/2016/160322_ddr_internal/index.html",
		ddPLS: "http://meyersound.com/mail/2016/160323_ddr/index.html",
		seminarBogota: "http://meyersound.com/mail/2016/education/funda_bogota_1603/index.html",
		ddProductInternal: "http://meyersound.com/mail/2016/160328_ddr_internal/index.html",
		ddProduct: "http://meyersound.com/mail/2016/160329_ddr/index.html",
		plsEmailTwo: "http://www.meyersound.com/mail/2016/1603_pls_promo_02/index.html"
	}

	// work out percentage as a result of total
	var numberFixer = function(num){
	  var result = ((num * total) / 100);
	  return result;
	}

	// when you click a button setPieChart and setActiveClass

	var setPieChart = function(name){
	  var number = stats[name],
	      fixedNumber = numberFixer(number),
	      result = fixedNumber + ' ' + total;
	  pie.style.strokeDasharray = result;
	}

	// Set up default settings
	setPieChart('defaultSet');
	//setActiveClass(buttons.children[0]);

	//on submit
	function fluxCapacitate(){

		//captures client selected
		var numSwitch = key("numSwitch"),
		selection = numSwitch.selectedIndex;
		
		switch(numSwitch[selection].value){
			case "plsWorkshopInvite":
				textSwap(email_name, "PL+S Workshop Invitation");
				textSwap(email_perc, stats.plsWorkshopInvite);
				textSwap(deliv, totRec.plsWorkshopInvite);
				textSwap(opens, uniqOpen.plsWorkshopInvite);
				textSwap(subjectID, subject.plsWorkshopInvite);
				textSwap(sendDateID, sendDate.plsWorkshopInvite);
				textSwap(totalClicks, totClicks.plsWorkshopInvite);
				setPieChart('plsWorkshopInvite');
				dropD(vidTut, links['plsWorkshopInvite']);
				break;
			case "productUpdate":
				textSwap(email_name, "Product News Update");
				textSwap(email_perc, stats.productUpdate);
				textSwap(deliv, totRec.productUpdate);
				textSwap(opens, uniqOpen.productUpdate);
				textSwap(uniqueClicks, uniqClicks.productUpdate);
				textSwap(totalClicks, totClicks.productUpdate);
				textSwap(subjectID, subject.productUpdate);
				textSwap(sendDateID, sendDate.productUpdate);
				setPieChart('productUpdate');
				dropD(vidTut, links['productUpdate']);
				break;
			case "soundStories":
				textSwap(email_name, "Sound Stories");
				textSwap(email_perc, stats.soundStories);
				textSwap(deliv, totRec.soundStories);
				textSwap(opens, uniqOpen.soundStories);
				textSwap(uniqueClicks, uniqClicks.soundStories);
				textSwap(totalClicks, totClicks.soundStories);
				textSwap(subjectID, subject.soundStories);
				textSwap(sendDateID, sendDate.soundStories);
				setPieChart('soundStories');
				dropD(vidTut, links['soundStories']);
				break;
			case "thinkingSound":
				textSwap(email_name, "Thinking Sound");
				textSwap(email_perc, stats.thinkingSound);
				textSwap(deliv, totRec.thinkingSound);
				textSwap(opens, uniqOpen.thinkingSound);
				textSwap(uniqueClicks, uniqClicks.thinkingSound);
				textSwap(totalClicks, totClicks.thinkingSound);
				textSwap(subjectID, subject.thinkingSound);
				textSwap(sendDateID, sendDate.thinkingSound);
				setPieChart('thinkingSound');
				dropD(vidTut, links['thinkingSound']);
				break;
			case "constDemo":
				textSwap(email_name, "DDR Video");
				textSwap(email_perc, stats.constDemo);
				textSwap(deliv, totRec.constDemo);
				textSwap(opens, uniqOpen.constDemo);
				textSwap(uniqueClicks, uniqClicks.constDemo);
				textSwap(totalClicks, totClicks.constDemo);
				textSwap(subjectID, subject.constDemo);
				textSwap(sendDateID, sendDate.constDemo);
				setPieChart('constDemo');
				dropD(vidTut, links['constDemo']);
				break;
			case "plsEmailOne":
				textSwap(email_name, "Prolight + Sound: Email 1");
				textSwap(email_perc, stats.plsEmailOne);
				textSwap(deliv, totRec.plsEmailOne);
				textSwap(opens, uniqOpen.plsEmailOne);
				textSwap(uniqueClicks, uniqClicks.plsEmailOne);
				textSwap(totalClicks, totClicks.plsEmailOne);
				textSwap(subjectID, subject.plsEmailOne);
				textSwap(sendDateID, sendDate.plsEmailOne);
				setPieChart('plsEmailOne');
				dropD(vidTut, links['plsEmailOne']);
				break;
			case "plsWorkshopRemind":
				textSwap(email_name, "Prolight + Sound: Workshop Reminder");
				textSwap(email_perc, stats.plsWorkshopRemind);
				textSwap(deliv, totRec.plsWorkshopRemind);
				textSwap(opens, uniqOpen.plsWorkshopRemind);
				textSwap(uniqueClicks, uniqClicks.plsWorkshopRemind);
				textSwap(totalClicks, totClicks.plsWorkshopRemind);
				textSwap(subjectID, subject.plsWorkshopRemind);
				textSwap(sendDateID, sendDate.plsWorkshopRemind);
				setPieChart('plsWorkshopRemind');
				dropD(vidTut, links['plsWorkshopRemind']);
				break;
			case "soundSource":
				textSwap(email_name, "Sound Source");
				textSwap(email_perc, stats.soundSource);
				textSwap(deliv, totRec.soundSource);
				textSwap(opens, uniqOpen.soundSource);
				textSwap(uniqueClicks, uniqClicks.soundSource);
				textSwap(totalClicks, totClicks.soundSource);
				textSwap(subjectID, subject.soundSource);
				textSwap(sendDateID, sendDate.soundSource);
				setPieChart('soundSource');
				dropD(vidTut, links['soundSource']);
				break;
			case "ddPLSInternal":
				textSwap(email_name, "D&D News: PLS Internal");
				textSwap(email_perc, stats.ddPLSInternal);
				textSwap(deliv, totRec.ddPLSInternal);
				textSwap(opens, uniqOpen.ddPLSInternal);
				textSwap(uniqueClicks, uniqClicks.ddPLSInternal);
				textSwap(totalClicks, totClicks.ddPLSInternal);
				textSwap(subjectID, subject.ddPLSInternal);
				textSwap(sendDateID, sendDate.ddPLSInternal);
				setPieChart('ddPLSInternal');
				dropD(vidTut, links['ddPLSInternal']);
				break;
			case "ddPLS":
				textSwap(email_name, "D&D News: PLS Internal");
				textSwap(email_perc, stats.ddPLS);
				textSwap(deliv, totRec.ddPLS);
				textSwap(opens, uniqOpen.ddPLS);
				textSwap(uniqueClicks, uniqClicks.ddPLS);
				textSwap(totalClicks, totClicks.ddPLS);
				textSwap(subjectID, subject.ddPLS);
				textSwap(sendDateID, sendDate.ddPLS);
				setPieChart('ddPLS');
				dropD(vidTut, links['ddPLS']);
				break;
			case "seminarBogota":
				textSwap(email_name, "Bogota Seminar");
				textSwap(email_perc, stats.seminarBogota);
				textSwap(deliv, totRec.seminarBogota);
				textSwap(opens, uniqOpen.seminarBogota);
				textSwap(uniqueClicks, uniqClicks.seminarBogota);
				textSwap(totalClicks, totClicks.seminarBogota);
				textSwap(subjectID, subject.seminarBogota);
				textSwap(sendDateID, sendDate.seminarBogota);
				setPieChart('seminarBogota');
				dropD(vidTut, links['seminarBogota']);
				break;
			case "ddProductInternal":
				textSwap(email_name, "D&D News: Product Update Internal");
				textSwap(email_perc, stats.ddProductInternal);
				textSwap(deliv, totRec.ddProductInternal);
				textSwap(opens, uniqOpen.ddProductInternal);
				textSwap(uniqueClicks, uniqClicks.ddProductInternal);
				textSwap(totalClicks, totClicks.ddProductInternal);
				textSwap(subjectID, subject.ddProductInternal);
				textSwap(sendDateID, sendDate.ddProductInternal);
				setPieChart('ddProductInternal');
				dropD(vidTut, links['ddProductInternal']);
				break;
			case "ddProduct":
				textSwap(email_name, "D&D News: Product Update Internal");
				textSwap(email_perc, stats.ddProduct);
				textSwap(deliv, totRec.ddProduct);
				textSwap(opens, uniqOpen.ddProduct);
				textSwap(uniqueClicks, uniqClicks.ddProduct);
				textSwap(totalClicks, totClicks.ddProduct);
				textSwap(subjectID, subject.ddProduct);
				textSwap(sendDateID, sendDate.ddProduct);
				setPieChart('ddProduct');
				dropD(vidTut, links['ddProduct']);
				break;
			case "plsEmailTwo":
				textSwap(email_name, "Prolight + Sound: Email 2");
				textSwap(email_perc, stats.plsEmailTwo);
				textSwap(deliv, totRec.plsEmailTwo);
				textSwap(opens, uniqOpen.plsEmailTwo);
				textSwap(uniqueClicks, uniqClicks.plsEmailTwo);
				textSwap(totalClicks, totClicks.plsEmailTwo);
				textSwap(subjectID, subject.plsEmailTwo);
				textSwap(sendDateID, sendDate.plsEmailTwo);
				setPieChart('plsEmailTwo');
				dropD(vidTut, links['plsEmailTwo']);
				break;
			default:
				textSwap(email_name, "Select an Email");
				textSwap(email_perc, stats.defaultSet);
				textSwap(deliv, totRec.defaultSet);
				textSwap(opens, uniqOpen.defaultSet);
				textSwap(subjectID, subject.defaultSet);
				textSwap(sendDateID, sendDate.defaultSet);
				textSwap(subjectID, "Subject");
				setPieChart('defaultSet');
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