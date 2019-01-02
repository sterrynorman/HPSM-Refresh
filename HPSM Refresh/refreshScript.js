///////////////////////////////////
// HPSM Refresh
// By SHAWN TERRY
// 12/31/2018
// v 1.0
///////////////////////////////////


setInterval(function() {  //we're going to run this shiznit on a timer
	
var btnObj = document.querySelectorAll('[aria-label^="Refresh"]');  //Search the document for the right buttons

	
	for (let i = 0; i < btnObj.length; i++){	//Let's loop our commands	
		let btn = btnObj[i];					//set buttons as array
		btn.click();							//click each button
		console.log(btn)						//sow button list in console log
		var refreshStop = 1;
	} //end out looped commands

}, 10 * 1000); //our timer end... rerun the code ever 60 seconds
