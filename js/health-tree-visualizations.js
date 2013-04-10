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
   var trunkCenter = mainPaper.path("M300 380 l 0 -100").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var trunkLeft = mainPaper.path("M"+(300-trunkWidth)+" 375 l 0 -50").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
   var trunkRight = mainPaper.path("M"+(300+trunkWidth)+" 375 l 0 -50").attr({stroke: '#524132', 'stroke-width': 8, 'stroke-linecap': 'round'});
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

//Draws young branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawYoungBranch(mainPaper, municipalityId, trunkWidth){
   var youngBranch = mainPaper.path("M"+(300-trunkWidth)+" 325 c0,0 0,-20 -25 -25 l -125 -30").attr({stroke: '#524132'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = 288;          //should take different value for each leaf
   var maxLength = youngBranch.getTotalLength();
   
   branchPoint = youngBranch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x-5)+","+(branchPoint.y-12);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 300);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+12);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 270);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-25);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 320);
   leafStartPoint = (branchPoint.x-5)+","+(branchPoint.y+20);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 245);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-60);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-25);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 335);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+25);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 230);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-90);
   leafStartPoint = branchPoint.x+","+(branchPoint.y-20);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 350);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+20);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 210);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-120);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-12);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 360);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+12);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 190);
   
}

//Draws general branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawGeneralBranch(mainPaper, municipalityId, trunkWidth){
   var generalBranch = mainPaper.path("M300 280 l 0,-40 c0,0 0,-10 5,-20 l60,-120").attr({stroke: '#524132'});
   var generalBranchOutlines = mainPaper.path("M296 280 l 0,-40 c0,0 0,-10 5,-20 l64,-120 l-56,120 c0,0 -5,10 -5,20 l 0,40z").attr({stroke: '#524132', fill:'#524132'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = 288;          //should take different value for each leaf
   var maxLength = generalBranch.getTotalLength();

   branchPoint = generalBranch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x-5)+","+(branchPoint.y-10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 15);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y+5);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 50);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x-16)+","+(branchPoint.y-15);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 350);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y+8);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 75);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-60);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-26);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 330);
   leafStartPoint = (branchPoint.x+30)+","+(branchPoint.y+5);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 85);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-97);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-35);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 320);
   leafStartPoint = (branchPoint.x+35)+","+(branchPoint.y);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 95);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-120);
   leafStartPoint = (branchPoint.x-15)+","+(branchPoint.y-25);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 305);
   leafStartPoint = (branchPoint.x+25)+","+(branchPoint.y);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 110);

   branchPoint = generalBranch.getPointAtLength(maxLength-130);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y-5);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 285);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y+10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 130);
   
}

//Draws elderly branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawElderlyBranch(mainPaper, municipalityId, trunkWidth){
   var elderlyBranch = mainPaper.path("M"+(300+trunkWidth)+" 325 c0,0 0,-20 25 -25 l 55 -10 ").attr({stroke: '#524132'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = 288;          //should take different value for each leaf
   var maxLength = elderlyBranch.getTotalLength();
   
   branchPoint = elderlyBranch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 70);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y+10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 110);
   
   branchPoint = elderlyBranch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y+15);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 135);
   
   branchPoint = elderlyBranch.getPointAtLength(maxLength-55);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y+10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 155);
   
}

function drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, leafAngle){
   var leaf = mainPaper.path("M"+leafStartPoint+" c0,0 -15,0 -15,-25 c0,0 0,-15 15,-40 c0,0 15,25 15,40 c0,0 0,25 -15,25z");
   var leafcolor = setLeafColor(indicator, municipalityId);//"#1c460c";
   leaf.transform("r"+leafAngle+","+leafStartPoint);
   leaf.attr({stroke: leafcolor, fill:leafcolor});
}


function setLeafColor(indicator, municipalityId)
{
   var indicatorId = indicator.toString();
   var areaNum = municipalityId.toString();

   var value = 0.0;

   $.ajax({
               url: './php/get_indicator_value.php',
               type: 'POST',
               data: 'indicatorId=' + indicatorId + '&areaNum=' + areaNum,
               async: false,
               
               success: function(result) {
                  console.log(result);
                  value = parseFloat(result);
               }
            });

   if (value > 80)
   {
      return "#002f00"; //dark green
   }
   else if (value <81 && value >60 )
   {
      return "#4a7d28"; //light green
   }
   else if (value <61 && value > 40)
   {
      return "#9eaa17"; //yellowish green
   }
   else if (value <41 && value > 20)
   {
      return "#ddbc7d"; //brownish

   }
   else
   {
      return "#002f00"; //"#f9ebb3"; //dry leaf
   }
}
