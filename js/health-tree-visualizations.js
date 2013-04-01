//This js-file uses Raphaël.js so remember to include it to your webpage

//Draws main health tree visualization
function drawMainTree(municipalityId, mainPaper){
   mainPaper.clear();
   drawBackground(mainPaper, municipalityId);
   var trunkWidth  =  drawTrunk(mainPaper, municipalityId);
   drawRoots(mainPaper, municipalityId, trunkWidth);
   drawBranches(mainPaper, municipalityId, trunkWidth);
}

//Draws background elements and miscellaneous indicator visualizations
//to mainPaper. Uses municipalityId to get the indicator data from
//correct municipality.
function drawBackground(mainPaper, municipalityId){
   var ground = mainPaper.ellipse(300, 440, 150, 50).attr({fill: '#46a046', stroke: '#83a67f', 'stroke-width': 8});  
}

//Draws trunk visualization to mainPaper. Uses municipalityId 
//to get the indicator data from correct municipality.
//Returns the distance between trunkparts.
function drawTrunk(mainPaper, municipalityId){
   var trunkWidth = 15;
   var trunkCenter = mainPaper.path("M300 380 l 0 -75").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var trunkLeft = mainPaper.path("M"+(300-trunkWidth)+" 375 l 0 -50").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var trunkRight = mainPaper.path("M"+(300+trunkWidth)+" 375 l 0 -100").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   return trunkWidth;
}

//Draws root visualizations and other indicator visualizations that
//must be drawn with the roots to mainPaper. Uses municipalityId 
//to get the indicator data from correct municipality.
function drawRoots(mainPaper, municipalityId, trunkWidth){
   var rootCenter = mainPaper.path("M300,380 c0,0 0,15 5,30 l30,65").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var rootLeft = mainPaper.path("M"+(300-trunkWidth)+" 375 c0,0 0,25 -15,30 l-60,20").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var rootRight = mainPaper.path("M"+(300+trunkWidth)+" 375 c0,0 0,25 15,35 l55, 30").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
}

//Draws branch visualizations and leaves for every branch to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawBranches(mainPaper, municipalityId, trunkWidth){
   var youngBranch = mainPaper.path("M300 305 l 0 -175").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var generalBranch = mainPaper.path("M"+(300-trunkWidth)+" 325 c0,0 0,-20 -25 -25 l -100 -25").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var elderlyBranch = mainPaper.path("M"+(300+trunkWidth)+" 275 c0,0 0,-20 25 -25 l 100 -25").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
}


