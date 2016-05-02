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

	var objects = [];

	$.getJSON( "json/object.json", function( data ) {
		var items = [];
		//console.log(data);
		$.each( data, function( key, val ) {
			var obj = key.val;
			items.push( "<option value='" + key + "'>" + val.name + "</option>" );
			val.perc = percent(val);
			objects.push(val);
		});
		$( "<select/>", {
			"id": "numSwitch",
			html: items.join( "" )
		}).appendTo( "#dropdownAttach" );
		setPieChart(objects[0]);
		return objects;
	});

	function calculations(object){
		util.textSwap(email_name, object.name);
		util.textSwap(email_perc, object.perc);
		util.textSwap(deliv, object.received);
		util.textSwap(opens, object.opened);
		util.textSwap(uniqueClicks, object.uniqClicks);
		util.textSwap(totalClicks, object.totClicks);
		util.textSwap(subjectID, object.subject);
		util.textSwap(sendDateID, object.date);
		setPieChart(object);
		util.dropD(vidTut, object.url);
	}

	function objSize(obj) {
		var size = 0, key;
		for (key in obj){
    		if (obj.hasOwnProperty(key)) size++;
  		}
		return size;
	}

	function objPrint(obj,arr) {
		var key;
		for (key in obj) {
			return (obj[key][arr]);
		}
	}

	function percent(obj){
		return Math.round(obj.opened/obj.received * 100);
	}

	// work out percentage as a result of total
	var numberFixer = function(num){
	  var result = ((num * total) / 100);
	  return result;
	};


	// Set up default settings
	var setPieChart = function(object){
	  var number = object.perc;
	  var fixedNumber = numberFixer(number),
	      result = fixedNumber + ' ' + total;
	  pie.style.strokeDasharray = result;
	};

	//on submit
	function fluxCapacitator(){

		//captures client selected
		var numSwitch = util.key("numSwitch"),
		selection = numSwitch.selectedIndex;
		defaultEmail.style.display = "none";
		calculations(objects[selection]);
		return false;
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