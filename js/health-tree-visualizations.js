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
   //var ground = mainPaper.ellipse(325, 460, 150, 50).attr({fill: '#46a046', stroke: '#83a67f', 'stroke-width': 8});  
}

//Draws trunk visualization to mainPaper. Uses municipalityId 
//to get the indicator data from correct municipality.
//Returns the distance between trunkparts.
function drawTrunk(mainPaper, municipalityId){
   var trunkWidth = 15;
   var trunkCenter = mainPaper.path("M325 400 l 0 -120").attr({stroke: '#524132'});
   var trunkCenterOutlines = mainPaper.path("M321 400 l 0 -120 c0,0 4,-8 8,0 l0,120 c0,0 -4,8 -8,0z").attr({stroke: '#524132', fill: '#524132'});
   var trunkLeft = mainPaper.path("M"+(325-trunkWidth)+" 400 l 0 -60").attr({stroke: '#524132'});
   var trunkLeftOutlines = mainPaper.path("M"+(321-trunkWidth)+" 400 l 0,-60 c0,0 4,-8 8,0 l0,60 c0,0 -4,8 -8,0z").attr({stroke: '#524132', fill: '#524132'});
   var trunkRight = mainPaper.path("M"+(325+trunkWidth)+" 400 l 0,-60 ").attr({stroke: '#524132'});
   var trunkRightOutlines = mainPaper.path("M"+(321+trunkWidth)+" 400 l 0,-60 c0,0 4,-8 8,0 l0,60 c0,0 -4,8 -8,0z").attr({stroke: '#524132', fill: '#524132'});
   return trunkWidth;
}

//Draws root visualizations and other indicator visualizations that
//must be drawn with the roots to mainPaper. Uses municipalityId 
//to get the indicator data from correct municipality.
function drawRoots(mainPaper, municipalityId, trunkWidth){
   var rootCenter = mainPaper.path("M325,400 c0,0 0,15 0,30 l0,75").attr({stroke: '#524132'});
   var rootCenterOutline = mainPaper.path("M321,400 l0,30 c0,0 0,20 4,75 c0,0 4,-55 4,-75 l0,-30z").attr({stroke: '#524132', fill:'#524132'});
   
   var rootLeft = mainPaper.path("M"+(325-trunkWidth)+" 400 c0,0 0,15 -15,20 l-100,20").attr({stroke: '#524132'});
   var rootLeftOutline = mainPaper.path("M"+(321-trunkWidth)+" 400 c0,0 0,14 -15,16 l-100,24 l100,-16 c0,0 23,0 23,-25z").attr({stroke: '#524132', fill:'#524132'});
   var rootRight = mainPaper.path("M"+(325+trunkWidth)+" 400 c0,0 0,15 15,20 l100, 20").attr({stroke: '#524132'});
   var rootRightOutline = mainPaper.path("M"+(329+trunkWidth)+" 400 c0,0 0,14 15,16 l100,24 l-100,-16 c0,0 -23,0 -23,-25z").attr({stroke: '#524132', fill:'#524132'});
}

//Draws young branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawYoungBranch(mainPaper, municipalityId, trunkWidth){
   var youngBranch = mainPaper.path("M"+(325-trunkWidth)+" 340 c0,0 0,-20 -25 -25 l -125 -30").attr({stroke: '#524132'});
   var youngBranchOutlines = mainPaper.path("M"+(321-trunkWidth)+" 340 c0,0 2,-18 -25 -23 l-122,-32 l130,28 c0,0 25,5 25 28 l-4,0z").attr({stroke: '#524132', fill: '#524132'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = 288;          //should take different value for each leaf
   var maxLength = youngBranch.getTotalLength();
   
   branchPoint = youngBranch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-15);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 300, 2, 4);
   leafStartPoint = (branchPoint.x-25)+","+(branchPoint.y+15);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 270, 0, 0);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-10);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-40);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 320, 0, 1);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+45);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 245, 1, 2);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-50);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-50);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 335, 0, 1);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+50);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 230, 0, 1);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-90);
   leafStartPoint = branchPoint.x+","+(branchPoint.y-40);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 350, 0, 0);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+30);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 210, 0, 0);
   
   branchPoint = youngBranch.getPointAtLength(maxLength-125);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-15);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 360, 1, 2);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+12);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 190, 1, 3);
   
}

//Draws general branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawGeneralBranch(mainPaper, municipalityId, trunkWidth){
   var generalBranch = mainPaper.path("M325 280 l 0,-40 c0,0 0,-10 5,-20 l60,-120").attr({stroke: '#524132'});
   var generalBranchOutlines = mainPaper.path("M321 280 l 0,-40 c0,0 0,-10 5,-20 l64,-120 l-56,120 c0,0 -5,10 -5,20 l 0,40z").attr({stroke: '#524132', fill:'#524132'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = 288;          //should take different value for each leaf
   var maxLength = generalBranch.getTotalLength();

   branchPoint = generalBranch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y-10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 15, 0, 0);
   leafStartPoint = (branchPoint.x+30)+","+(branchPoint.y+20);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 50, 0, 0);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x-16)+","+(branchPoint.y-25);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 350, 0, 0);
   leafStartPoint = (branchPoint.x+40)+","+(branchPoint.y+25);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 75, 0, 0);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-60);
   leafStartPoint = (branchPoint.x-30)+","+(branchPoint.y-30);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 330, 1, 2);
   leafStartPoint = (branchPoint.x+50)+","+(branchPoint.y+30);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 95, 1, 2);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-110);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-45);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 305, 1, 3);
   leafStartPoint = (branchPoint.x+45)+","+(branchPoint.y+10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 115, 1, 3);
   
   branchPoint = generalBranch.getPointAtLength(maxLength-130);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y-20);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 290, 0, 0);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y+15);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 140, 0, 0);
   
}

//Draws elderly branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawElderlyBranch(mainPaper, municipalityId, trunkWidth){
   var elderlyBranch = mainPaper.path("M"+(325+trunkWidth)+" 340 c0,0 0,-20 25 -25 l 55 -10 ").attr({stroke: '#524132'});
   var elderlyBranchOutline = mainPaper.path("M"+(321+trunkWidth)+" 340 c0,0 0,-20 25 -25 l 59,-10 l-59,15 c0,0 -15,5 -17,20").attr({stroke: '#524132', fill:'#524132'});
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = 288;          //should take different value for each leaf
   var maxLength = elderlyBranch.getTotalLength();
   
   branchPoint = elderlyBranch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y-10);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 70, 0, 0);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y+15);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 110, 0, 1);
   
   branchPoint = elderlyBranch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y+25);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 135, 1, 3);
   
   branchPoint = elderlyBranch.getPointAtLength(maxLength-55);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y+20);
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 155, 2, 4);  
}

function drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, leafAngle, form, color){
   var leafcolor = null; //setLeafColor(indicator, municipalityId);//"#1c460c";
   var leafline = null;
   var leaf = null;
   if (form==0){
      leaf = mainPaper.path("M"+leafStartPoint+" c0,0 -30,0 -30,-30 c0,0 0,-30 30,-60 c0,0 30,30 30,60 c0,0 0,30 -30,30z");
   }
   else if (form==1){
      leaf = mainPaper.path("M"+leafStartPoint+" c0,0 -30,0 -30,-30 c0,0 0,-10 5,-20 c0,0 10,-10 15,-40 c0,0 5,25 20,35 c0,0 20,10 20,25 c0,0 0,30 -30,30z");
      //leaf = mainPaper.path("M"+leafStartPoint+" c0,0 -30,0 -30,-30 c0,0 0,-30 30,-60 c0,0 -15,30 15,40 c0,0 15,5 15,20 c0,0 0,30 -30,30z");
   }
   else{
      leaf = mainPaper.path("M"+leafStartPoint+" c0,0 -26,10 -26,-30 c0,0 0,-10 6,-15 c0,0 15,-10 10,-20 c0,0 -5,-15 10,-20 c0,0 -12,15 10,25 c0,0 8,5 12,25 c0,0 6,35 -22,35");
   }
   
   if (color == 0){
      leafcolor="#004100";
      leafline="#004100";
   }
   else if (color == 1){
      leafcolor="#4a7d28";
      leafline=="#4a7d28";
   }
   else if (color == 2){
      leafcolor="#9eaa17";
      leafline="#9eaa17";
   }
   else if (color == 3){
      leafcolor="#ddbc7d";
      leafline="#ddbc7d";
   }
   else {
      leafcolor="#f9ebb3";
      leafline="#d7ca97";
   }
   leaf.transform("r"+leafAngle+","+leafStartPoint);
   leaf.attr({stroke: leafline, fill: leafcolor});
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
      return "#f9ebb3"; //"#f9ebb3"; //dry leaf
   }
}
