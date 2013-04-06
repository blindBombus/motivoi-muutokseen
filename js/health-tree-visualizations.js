//This js-file uses Raphaël.js so remember to include it to your webpage

//Draws main health tree visualization
function drawMainTree(municipalityId, mainPaper){
   drawBackground(mainPaper, municipalityId);
   var trunkWidth  =  drawTrunk(mainPaper, municipalityId);
   drawRoots(mainPaper, municipalityId, trunkWidth);
   drawGeneralBranch(mainPaper, municipalityId, trunkWidth);
   drawYoungBranch(mainPaper, municipalityId, trunkWidth);
   drawElderlyBranch(mainPaper, municipalityId, trunkWidth);
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

//Draws general branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawGeneralBranch(mainPaper, municipalityId, trunkWidth){
   var generalBranch = mainPaper.path("M"+(300-trunkWidth)+" 325 c0,0 0,-20 -25 -25 l -125 -30").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;
   var maxLength = generalBranch.getTotalLength();
   var i=0;
   while (i<(maxLength-27)){
      branchPoint = generalBranch.getPointAtLength(maxLength-(i));
      if(i==0){
         leafStartPoint = (branchPoint.x-10)+","+branchPoint.y;
         indicator = getGeneralIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 285);
      }
      else if(i%2==0){
         leafStartPoint = (branchPoint.x-16)+","+(branchPoint.y+6);
         indicator = getGeneralIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 220);
      }
      else{
         leafStartPoint = branchPoint.x+","+(branchPoint.y-10);
         indicator = getGeneralIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 350);
      }
      
      if (indicator != null){
         return 0;
      }
      i=i+11;
   }
}

//Draws young branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawYoungBranch(mainPaper, municipalityId, trunkWidth){
   var youngBranch = mainPaper.path("M300 305 l 0 -175").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;
   var maxLength = youngBranch.getTotalLength();
   var i=0;
   while (i<(maxLength-54)){
      branchPoint = youngBranch.getPointAtLength(maxLength-(i));
      if(i==0){
         leafStartPoint = branchPoint.x+","+(branchPoint.y-6);
         indicator = getYoungIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 0);
      }
      else if(i%2==0){
         leafStartPoint = (branchPoint.x+12)+","+(branchPoint.y-19);
         indicator = getYoungIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 45);
      }
      else{
         leafStartPoint = (branchPoint.x-12)+","+(branchPoint.y-4);
         indicator = getYoungIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 320);
      }
      
      if (indicator != null){
         return 0;
      }
      i=i+13;
   }
   //drawYoungLeaves(mainPaper, municipalityId, branchEndPoint);
}

//Draws elderly branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawElderlyBranch(mainPaper, municipalityId, trunkWidth){
   var elderlyBranch = mainPaper.path("M"+(300+trunkWidth)+" 275 c0,0 0,-20 25 -25 l 100 -25").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;
   var maxLength = elderlyBranch.getTotalLength();
   var i=0;
   while (i<(maxLength-80)){
      branchPoint = elderlyBranch.getPointAtLength(maxLength-(i));
      if(i==0){
         leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y-3);
         indicator = getElderlyIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 75);
      }
      else if(i%2==0){
         leafStartPoint = (branchPoint.x)+","+(branchPoint.y+12);
         indicator = getElderlyIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 130);
      }
      else{
         leafStartPoint = branchPoint.x+","+(branchPoint.y-10);
         indicator = getElderlyIndicator(municipalityId, i);
         drawLeaf(mainPaper, leafStartPoint, indicator, 12);
      }
      
      if (indicator != null){
         return 0;
      }
      i=i+11;
   }
}

function drawLeaf(mainPaper, leafStartPoint, indicator, leafAngle){
   var leaf = mainPaper.path("M"+leafStartPoint+" c0,0 -9,0 -9,-9 c0,0 0,-9 9,-30 c0,0 9,15 9,30 c0,0 0,9 -9,9z");
   var leafcolor = "#1c460c";
   leaf.transform("r"+leafAngle+","+leafStartPoint);
   leaf.attr({stroke: leafcolor, fill:leafcolor});
}
