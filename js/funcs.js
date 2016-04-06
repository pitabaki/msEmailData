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