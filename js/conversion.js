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
		email_name = key("email_name"),
		email_perc = key("perc"),
		rplName = key("rplName"),
		rplTitle = key("rplTitle"),
		deliv = key("deliv"),
		opens = key("opens"),
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
		amieDemo: 54,
		amieLaunch: 24,
		ddrPrice: 55,
		ddrVideo: 55,
		seasonThanks: 46,
		holidayVid: 21,
		ssDMB: 23,
		ssMetallica: 24,
		soundSource: 27,
		leopardEOY: 46,
		defaultSet: 100
	};

	var totRec = {
		amieDemo: 115,
		amieLaunch: 37669,
		ddrPrice: 579,
		ddrVideo: 530,
		seasonThanks: 578,
		holidayVid: 77695,
		ssDMB: 30316,
		ssMetallica: 30304,
		soundSource: 32424,
		leopardEOY: 728,
		defaultSet: 100
	};

	var uniqOpen = {
		amieDemo: 61,
		amieLaunch: 9356,
		ddrPrice: 294,
		ddrVideo: 232,
		seasonThanks: 245,
		holidayVid: 16376,
		ssDMB: 6913,
		ssMetallica: 7549,
		soundSource: 6970,
		leopardEOY: 346,
		defaultSet: 100
	};

	//MAKE SURE TO
	//FILL IN THESE
	//LINKSSSSSS

	var links = {
		amieDemo: "http://www.meyersound.com/mail/2015/1511_amie_demo_launch/index.html/",
		amieLaunch: "http://www.meyersound.com/mail/2015/1512_amie_launch/index.html/",
		holidayVid: "http://www.meyersound.com/mail/2015/1512_holiday_email/index.html",
		ddrPrice: "http://www.meyersound.com/mail/2015/1512_ddrPrice/index.html",
		ddrVideo: "http://www.meyersound.com/mail/2015/1512_video/index.html",
		seasonThanks: "http://www.meyersound.com/mail/2015/1511_thanks/index.html/",
		ssDMB: "http://www.meyersound.com/mail/2015/1511_amie_demo_launch/index.html/",
		ssMetallica: "http://www.meyersound.com/mail/2015/1511_amie_demo_launch/index.html/",
		soundSource: "http://www.meyersound.com/mail/seminars.html",
		leopardEOY: "http://www.meyersound.com/mail/2015/1512_leopard_EOY/"
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
			case "amieDemo":
				textSwap(email_name, "Amie Demo Launch");
				textSwap(email_perc, stats.amieDemo);
				textSwap(deliv, totRec.amieDemo);
				textSwap(opens, uniqOpen.amieDemo);
				setPieChart('amieDemo');
				dropD(vidTut, links['amieDemo']);
				break;
			case "amieLaunch":
				textSwap(email_name, "Amie Launch");
				textSwap(email_perc, stats.amieLaunch);
				textSwap(deliv, totRec.amieLaunch);
				textSwap(opens, uniqOpen.amieLaunch);
				setPieChart('amieLaunch');
				dropD(vidTut, links['amieLaunch']);
				break;
			case "holidayVid":
				textSwap(email_name, "Holiday Video");
				textSwap(email_perc, stats.holidayVid);
				textSwap(deliv, totRec.holidayVid);
				textSwap(opens, uniqOpen.holidayVid);
				setPieChart('holidayVid');
				dropD(vidTut, links['holidayVid']);
				break;
			case "ddrPrice":
				textSwap(email_name, "DDR Price Increase");
				textSwap(email_perc, stats.ddrPrice);
				textSwap(deliv, totRec.ddrPrice);
				textSwap(opens, uniqOpen.ddrPrice);
				setPieChart('ddrPrice');
				dropD(vidTut, links['ddrPrice']);
				break;
			case "ddrVideo":
				textSwap(email_name, "DDR Video");
				textSwap(email_perc, stats.ddrVideo);
				textSwap(deliv, totRec.ddrVideo);
				textSwap(opens, uniqOpen.ddrVideo);
				setPieChart('ddrVideo');
				dropD(vidTut, links['ddrVideo']);
				break;
			case "seasonThanks":
				textSwap(email_name, "Season of Thanks");
				textSwap(email_perc, stats.seasonThanks);
				textSwap(deliv, totRec.seasonThanks);
				textSwap(opens, uniqOpen.seasonThanks);
				setPieChart('seasonThanks');
				dropD(vidTut, links['seasonThanks']);
				break;
			case "ssDMB":
				textSwap(email_name, "Sound Stories: DMB");
				textSwap(email_perc, stats.ssDMB);
				textSwap(deliv, totRec.ssDMB);
				textSwap(opens, uniqOpen.ssDMB);
				setPieChart('ssDMB');
				dropD(vidTut, links['ssDMB']);
				break;
			case "ssMetallica":
				textSwap(email_name, "Sound Stories: Metallica");
				textSwap(email_perc, stats.ssMetallica);
				textSwap(deliv, totRec.ssMetallica);
				textSwap(opens, uniqOpen.ssMetallica);
				setPieChart('ssMetallica');
				dropD(vidTut, links['ssMetallica']);
				break;
			case "soundSource":
				textSwap(email_name, "Sound Source");
				textSwap(email_perc, stats.soundSource);
				textSwap(deliv, totRec.soundSource);
				textSwap(opens, uniqOpen.soundSource);
				setPieChart('soundSource');
				dropD(vidTut, links['soundSource']);
				break;
			case "leopardEOY":
				textSwap(email_name, "LEOPARD EOY");
				textSwap(email_perc, stats.leopardEOY);
				textSwap(deliv, totRec.leopardEOY);
				textSwap(opens, uniqOpen.leopardEOY);
				setPieChart('leopardEOY');
				dropD(vidTut, links['leopardEOY']);
				break;
			default:
				console.log("doesn't work!");
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