//This js-file uses Raphaël.js so remember to include it to your webpage

//Draws main health tree visualization
function drawMainTree(municipalityId){
   var mainPaper = Raphael("main-tree", 600,500);
   drawBackground(mainPaper, municipalityId);
   var trunkStartpoints  = drawRoots(mainPaper, municipalityId);
   var branchStartpoints = drawTrunk(mainPaper, municipalityId, trunkStartpoints);
   drawBranches(mainPaper, municipalityId, branchStartpoints);

}

//Draws background elements and miscellaneous indicator visualizations
//to mainPaper. Uses municipalityId to get the indicator data from
//correct municipality.
function drawBackground(mainPaper, municipalityId){
}

//Draws root visualizations and other indicator visualizations that
//must be drawn with the roots to mainPaper. Uses municipalityId 
//to get the indicator data from correct municipality.
//Returns the coordinates of the points where the trunk-parts should
//start.
function drawRoots(mainPaper, municipalityId){
   var rect1 = mainPaper.rect(20,30,100,12).attr({fill: "orange"});
   return 1;
}

//Draws trunk visualization to mainPaper. Uses municipalityId 
//to get the indicator data from correct municipality.
//Returns the coordinates of the points where the branch-parts should
//start.
function drawTrunk(mainPaper, municipalityId, trunkStartpoints){
   var rect1 = mainPaper.rect(30,40,100,12).attr({fill: "orange"});
   return 1;
}

//Draws branch visualizations and leaves for every branch to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawBranches(mainPaper, municipalityId, branchStartpoints){
   var rect1 = mainPaper.rect(40,50,100,12).attr({fill: "orange"});
}
