
/*To load any .html page after any other page*/
function loadPage(pageName){
	console.log("Page requested to load = " + pageName);
	window.location.href=pageName;
}

/*For adding href of the rules page to a div*/
function setRules(frameName){
	/*var div = document.getElementById(frameName);
	div.innerHTML = "<div id='rulesPage'>Here will rules page</div>";*/
	//div.innerHTML = "<img src='images/RulesPage.jpg'/>";
	$('#'+frameName).html("");
	$('#'+frameName).after(
	   "<div id='rulesPage'>" +
	   'This is the rules page' +
       "<button id='backBtn' onclick="+"loadPage('GameFrame.html')"+">BACK<!--<img src='images/BackBtn.jpg'/>--></button>" +
	   "</div>"
	);
	$("#backBtn").focus();
}

/*For adding href of AboutPage to a div*/      
function setAbout(frameName){
	$('#'+frameName).html("");
	$('#'+frameName).after(
	   "<div id='abtPage'>" +
	   "This is the about page" +
       "<button id='backBtn' onclick="+"loadPage('GameFrame.html')"+">BACK<!--<img src='images/BackBtn.jpg'/>--></button>" +
	   "</div>"
	);
	$("#backBtn").focus();
}  

/*For setting a div to the centre of the screen*/
function setFrame(frameName){
    var heightOfWindow=Number($(window).height());
    var widthOfWindow=Number($(window).width());
    var heightOfFrame=Number($(frameName).height());
    var widthOfFrame=Number($(frameName).width());
	//$('#loadingBar').css({position:'absolute',top:((heightOfWindow-heightOfFrame)/2+heightOfFrame/2+10),left:((widthOfWindow-widthOfFrame)/2-100)});
    if(widthOfWindow>=widthOfFrame && heightOfWindow>=heightOfFrame)
		$(frameName).css({position:'absolute',top:(heightOfWindow-heightOfFrame)/2,left:(widthOfWindow-widthOfFrame)/2});
}