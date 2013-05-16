//This js-file uses Raphaël.js so remember to include it to your webpage

//Draws main health tree visualization
function drawMainTree(municipalityId, paper){
   drawBackground(paper, municipalityId);
   var trunkWidth  =  drawTrunk(paper, municipalityId);
   drawRoots(paper, municipalityId, trunkWidth);
   //drawMushrooms();
   addIcons(paper);
   drawLegend(paper, 25, 500);
}
//Draws main health tree visualization
function drawSmallTree(municipalityId, paper, xView, yView){
   drawBackground(paper, municipalityId);
   var trunkWidth  =  drawTrunk(paper, municipalityId);
   drawRoots(paper, municipalityId, trunkWidth);
   paper.setViewBox(0,0, xView, yView, false);
}

//Draws background elements and miscellaneous indicator visualizations
//to paper. Uses municipalityId to get the indicator data from
//correct municipality.
function drawBackground(paper, municipalityId){
   //var ground = paper.ellipse(325, 460, 150, 50).attr({fill: '#46a046', stroke: '#83a67f', 'stroke-width': 8});  
}

//Draws trunk visualization to paper. Uses municipalityId 
//to get the indicator data from correct municipality.
//Returns the distance between trunkparts.
function drawTrunk(paper, municipalityId){
   var trunkWidth = 15;
   var trunkCenter = paper.path("M325 505 l 0 -225 l 0,-40 c0,0 0,-10 5,-20 l60,-120").attr({stroke: '#524132'});
   var trunkCenterOutlines = paper.path("M329 400 l0,30 c0,0 0,20 -4,75 c0,0 -4,-55 -4,-75 l0,-30 l 0 -120 l 0,-40 c0,0 0,-10 5,-20 l64,-120 l-56,120 c0,0 -5,10 -5,20 l 0,40 l0,120z").attr({stroke: '#524132', fill: '#524132'});
   drawGeneralBranchLeaves(paper, municipalityId, trunkCenter);
   drawRootIndicators(paper, municipalityId, trunkCenter);

   var trunkLeft = paper.path("M"+(325-trunkWidth)+" 400 l 0 -60 c0,0 0,-20 -25 -25 l -125 -30").attr({stroke: '#524132'});
   var trunkLeftOutlines = paper.path("M"+(321-trunkWidth)+" 400 l 0,-60 c0,0 2,-18 -25 -23 l-122,-32 l130,28 c0,0 25,5 25 28 l0,60z").attr({stroke: '#524132', fill: '#524132'});
   drawYoungBranchLeaves(paper, municipalityId, trunkLeft);
   var trunkRight = paper.path("M"+(325+trunkWidth)+" 400 l 0,-60 c0,0 0,-20 25 -25 l 55 -10").attr({stroke: '#524132'});
   var trunkRightOutlines = paper.path("M"+(321+trunkWidth)+" 400 l 0,-60 c0,0 0,-20 25 -25 l 59,-10 l-59,15 c0,0 -15,5 -17,20 l0,60 c0,0 -4,8 -8,0z").attr({stroke: '#524132', fill: '#524132'});
   drawElderlyBranchLeaves(paper, municipalityId, trunkRight);
   return trunkWidth;
}

//Draws root visualizations and other indicator visualizations that
//must be drawn with the roots to paper. Uses municipalityId 
//to get the indicator data from correct municipality.
function drawRoots(paper, municipalityId, trunkWidth){
   
   var rootLeft = paper.path("M"+(325-trunkWidth)+" 400 c0,0 0,15 -15,20 l-100,20").attr({stroke: '#524132'});
   var rootLeftOutline = paper.path("M"+(321-trunkWidth)+" 400 c0,0 0,14 -15,16 l-100,24 l100,-16 c0,0 23,0 23,-25z").attr({stroke: '#524132', fill:'#524132'});
   
   var rootRight = paper.path("M"+(325+trunkWidth)+" 400 c0,0 0,15 15,20 l100, 20").attr({stroke: '#524132'});
   var rootRightOutline = paper.path("M"+(329+trunkWidth)+" 400 c0,0 0,14 15,16 l100,24 l-100,-16 c0,0 -23,0 -23,-25z").attr({stroke: '#524132', fill:'#524132'});
}

function drawRootIndicators(paper, municipalityId, mainRoot){
   var rootPoint = null
   var rootStartPoint = null;
   var indicator = null;
   
   rootPoint = mainRoot.getPointAtLength(70);
   rootStartPoint = (rootPoint.x-1)+","+(rootPoint.y);
   drawRootInd(paper, rootStartPoint, indicator, municipalityId, 105);
   rootStartPoint = (rootPoint.x+1)+","+(rootPoint.y-2);
   drawRootInd(paper, rootStartPoint, indicator, municipalityId, 256);

   rootPoint = mainRoot.getPointAtLength(50);
   rootStartPoint = (rootPoint.x-1)+","+(rootPoint.y);
   drawRootInd(paper, rootStartPoint, indicator, municipalityId, 120);
   rootStartPoint = (rootPoint.x+1)+","+(rootPoint.y-2);
   drawRootInd(paper, rootStartPoint, indicator, municipalityId, 241);
   
   
}

function drawRootInd(paper, rootStartPoint, indicator, municipalityId, angle){
   var rootForm = setRootForm(indicator, municipalityId);
   if (rootForm==0){
      var root = paper.path("M"+rootStartPoint+" c0,0 -4,0 -4,-4 l2,-80 l4,80 c0,0 0,4 -4,4z");
   }
   else if (rootForm==1){
      var root = paper.path("M"+rootStartPoint+" c0,0 -4,0 -4,-4 l2,-60 l4,60 c0,0 0,4 -4,4z");
   }
   else{
      var root = paper.path("M"+rootStartPoint+" c0,0 -4,0 -4,-4 l2,-40 l4,40 c0,0 0,4 -4,4z");
   }
   root.transform("r"+angle+","+rootStartPoint);
   root.attr({stroke: '#524132', fill:'#524132'});
}

//Draws young branch visualizations and leaves for it to paper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawYoungBranchLeaves(paper, municipalityId, branch){
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;          //should take different value for each leaf
   var maxLength = branch.getTotalLength();
   
   branchPoint = branch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-15);
   indicator = 288;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 300);
   leafStartPoint = (branchPoint.x-25)+","+(branchPoint.y+15);
   indicator = 242;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 270);
   
   branchPoint = branch.getPointAtLength(maxLength-10);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-40);
   indicator = 1245;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 320);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+45);
   indicator = 289;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 245);
   
   branchPoint = branch.getPointAtLength(maxLength-50);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-50);
   indicator = 3219;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 335);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+50);
   indicator = 189;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 230);
   
   branchPoint = branch.getPointAtLength(maxLength-90);
   leafStartPoint = branchPoint.x+","+(branchPoint.y-40);
   indicator = 3905;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 350);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+30);
   indicator = 286;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 210);
   
   branchPoint = branch.getPointAtLength(maxLength-125);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-15);
   indicator = 288;                                                              //dummy indicator
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 360);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+12);
   indicator = 242;                                                             //dummy indicator
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 190);
   
}

//Draws general branch visualizations and leaves for it to paper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawGeneralBranchLeaves(paper, municipalityId, branch){
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;          //should take different value for each leaf
   var maxLength = branch.getTotalLength();

   branchPoint = branch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y-10);
   indicator = 306;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 15);
   leafStartPoint = (branchPoint.x+30)+","+(branchPoint.y+20);
   indicator = 3113;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 50);
   
   branchPoint = branch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x-16)+","+(branchPoint.y-25);
   indicator = 184;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 350);
   leafStartPoint = (branchPoint.x+40)+","+(branchPoint.y+25);
   indicator = 3224;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 75);
   
   branchPoint = branch.getPointAtLength(maxLength-60);
   leafStartPoint = (branchPoint.x-30)+","+(branchPoint.y-30);
   indicator = 1560;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 330);
   leafStartPoint = (branchPoint.x+50)+","+(branchPoint.y+30);
   indicator = 1259;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 95);
   
   branchPoint = branch.getPointAtLength(maxLength-110);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-45);
   indicator = 306;                                                              //dummy indicator
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 305);
   leafStartPoint = (branchPoint.x+45)+","+(branchPoint.y+10);
   indicator = 3113;                                                              //dummy indicator
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 115);
   
   branchPoint = branch.getPointAtLength(maxLength-130);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y-20);
   indicator = 184;                                                             //dummy indicator
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 290);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y+15);
   indicator = 3224;                                                             //dummy indicator
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 140);
   
}

//Draws elderly branch visualizations and leaves for it to paper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawElderlyBranchLeaves(paper, municipalityId, branch){
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;          //should take different value for each leaf
   var maxLength = branch.getTotalLength();
   
   branchPoint = branch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y-10);
   indicator = 307;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 70);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y+15);
   indicator = 690;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 110);
   
   branchPoint = branch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y+25);
   indicator = 318;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 135);
   
   branchPoint = branch.getPointAtLength(maxLength-55);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y+20);
   indicator = 1570;
   drawLeaf(paper, leafStartPoint, indicator, municipalityId, 155);  
}

function drawLeaf(paper, leafStartPoint, indicator, municipalityId, leafAngle){
   var leafcolor = null; //setLeafColor(indicator, municipalityId);//"#1c460c";
   var leafline = null;
   var leaf = null;
   var colorAndForm = setLeafColorAndForm(indicator, municipalityId);
   form = colorAndForm[1];

   if (form==0){
      leaf = paper.path("M"+leafStartPoint+" c0,0 -30,0 -30,-30 c0,0 0,-30 30,-60 c0,0 30,30 30,60 c0,0 0,30 -30,30z");
   }
   else if (form==1){
      leaf = paper.path("M"+leafStartPoint+" c0,0 -30,0 -30,-30 c0,0 0,-10 5,-20 c0,0 10,-10 15,-40 c0,0 5,25 20,35 c0,0 20,10 20,25 c0,0 0,30 -30,30z");
   }
   else{
      leaf = paper.path("M"+leafStartPoint+" c0,0 -26,10 -26,-30 c0,0 0,-10 6,-15 c0,0 15,-10 10,-20 c0,0 -5,-15 10,-20 c0,0 -12,15 10,25 c0,0 8,5 12,25 c0,0 6,35 -22,35");
   }

   leafcolor = colorAndForm[0];
   leafline = "#A0A0A0";
   leaf.transform("r"+leafAngle+","+leafStartPoint);
   leaf.attr({stroke: leafline, fill: leafcolor});
   
   var leafGlow = null; //leaf.glow({opacity: 1.0, color: "#b7f6ff", width: 2});
   var mouseover = function (event) {  
      this.leafGlow = this.glow({color: "#3673ff", width: 10});
      }
   var mouseout = function (event) {
	   this.leafGlow.remove();
      }
   leaf.hover(mouseover, mouseout);
   
   //take ids of the leaves and store them
   //use these ids to see which leaf is clicked
   //use the associated mun/ind Id to fetch data for that leaf
   var newLeaf = new Leaf(leaf, municipalityId, indicator,leaf.id);
   leafList.push(newLeaf);

   leaf.node.onclick=function click () {
   
   var leafGlow = null; //leaf.glow({opacity: 1.0, color: "#b7f6ff", width: 2});


   
   
      numOfTimesClicked++;

      var result = $.grep(leafList, function(e){return e.leafId == leaf.id;});
      result = result[0];
      console.log(result);

      var munId = result.municipalityId;  //pass to query database
      var indId = result.indicatorId;

      var indicatorName; //to display in header of information table

      var value = 0.0;
      //find indicator value
      $.ajax({
         url: './php/get_indicator_value.php',
         type: 'POST',
         data: 'indicatorId=' + indId + '&areaNum=' + munId,
         async: false,

         success: function (res) {
            console.log(res);
            value = parseFloat(res);
         }

      });

      //find indicator name
      $.ajax({
         url: './php/get_indicator_name.php',
         type: 'POST',
         data: 'indicatorId=' + indId,
         async: false,

         success: function (data) {
            console.log(data);
            indicatorName = data;
         }

      });


      console.log("Num of Times clicked:" + numOfTimesClicked);
      

      if (numOfTimesClicked%3 === 1)
      {
         $('#hdr_1').html(indicatorName);
         $('#data_11').html(value);
      }
      else if (numOfTimesClicked%3 === 2)
      {
         $('#hdr_2').html(indicatorName);
         $('#data_12').html(value);
      }
      else
      {
         $('#hdr_3').html(indicatorName);
         $('#data_13').html(value);
      }

      
   }
}

function drawLegend(paper, startX, startY){
   var leafline = "#A0A0A0";
   var leafcolor = "#002f00";

   var bestLeaf = paper.path("M"+startX+","+startY+" c0,0 -30,0 -30,-30 c0,0 0,-30 30,-60 c0,0 30,30 30,60 c0,0 0,30 -30,30z").transform("r25,"+startX+","+startY+"s0.3");
   bestLeaf.attr({stroke: leafline, fill: leafcolor});
   
   leafcolor = "#4a7d28"; //light green
   var secondBestLeaf = paper.path("M"+(startX+20)+","+startY+" c0,0 -30,0 -30,-30 c0,0 0,-30 30,-60 c0,0 30,30 30,60 c0,0 0,30 -30,30z").transform("r25,"+(startX+20)+","+startY+"s0.3");
   secondBestLeaf.attr({stroke: leafline, fill: leafcolor});
   
   leafcolor = "#9eaa17"; // green
   var midleLeaf = paper.path("M"+(startX+40)+","+startY+" c0,0 -30,0 -30,-30 c0,0 0,-10 5,-20 c0,0 10,-10 15,-40 c0,0 5,25 20,35 c0,0 20,10 20,25 c0,0 0,30 -30,30z").transform("r25,"+(startX+40)+","+startY+"s0.3");
   midleLeaf.attr({stroke: leafline, fill: leafcolor});
   
   leafcolor = "#ddbc7d"; //brownish
   var badLeaf = paper.path("M"+(startX+60)+","+startY+" c0,0 -30,0 -30,-30 c0,0 0,-10 5,-20 c0,0 10,-10 15,-40 c0,0 5,25 20,35 c0,0 20,10 20,25 c0,0 0,30 -30,30z").transform("r25,"+(startX+60)+","+startY+"s0.3");
   badLeaf.attr({stroke: leafline, fill: leafcolor});
   
   leafcolor = "#f9ebb3"; //dry leaf
   var worstLeaf = paper.path("M"+(startX+80)+","+startY+" c0,0 -26,10 -26,-30 c0,0 0,-10 6,-15 c0,0 15,-10 10,-20 c0,0 -5,-15 10,-20 c0,0 -12,15 10,25 c0,0 8,5 12,25 c0,0 6,35 -22,35").transform("r25,"+(startX+80)+","+startY+"s0.3");
   worstLeaf.attr({stroke: leafline, fill: leafcolor});
}
function addIcons(paper){
   //setting icons manually to right places
   var leafIcon1 = paper.image("./icons/vammat.png", 385, 45, 40, 40);
   //leafIcon1.insertBefore(leafList[0]);
   
   var leafIcon2 = paper.image("./icons/dep_laake.png", 418, 82, 40, 40);
   //leafIcon2.insertBefore(leafList[0]);
   
   var leafIcon3 = paper.image("./icons/vammat.png", 335, 54, 40, 40);
   //leafIcon3.insertBefore(leafList[0]);
   
   var leafIcon4 = paper.image("./icons/vammat.png", 420, 120, 40, 40);
   //leafIcon4.insertBefore(leafList[0]);
   
   var leafIcon5 = paper.image("./icons/vammat.png", 300, 83, 40, 40);
   //leafIcon5.insertBefore(leafList[0]);
   
   var leafIcon6 = paper.image("./icons/vammat.png", 420, 165, 40, 40);
   //leafIcon6.insertBefore(leafList[0]);
   
   var leafIcon7 = paper.image("./icons/vammat.png", 280, 120, 40, 40);
   //leafIcon7.insertBefore(leafList[0]);
   
   var leafIcon8 = paper.image("./icons/vammat.png", 390, 195, 40, 40);
   //leafIcon8.insertBefore(leafList[0]);
   
   var leafIcon9 = paper.image("./icons/vammat.png", 278, 168, 40, 40);
   //leafIcon9.insertBefore(leafList[0]);
   
   var leafIcon10 = paper.image("./icons/vammat.png", 351, 231, 40, 40);
   //leafIcon10.insertBefore(leafList[0]);
   
   //Young
   
   var leafIcon11 = paper.image("./icons/vammat.png", 95, 240, 40, 40);
   //leafIcon11.insertBefore(leafList[0]);
   
   var leafIcon12 = paper.image("./icons/vammat.png", 90, 280, 40, 40);
   //leafIcon12.insertBefore(leafList[0]);
   
   var leafIcon13 = paper.image("./icons/vammat.png", 132, 210, 40, 40);
   //leafIcon13.insertBefore(leafList[0]);
   
   var leafIcon14 = paper.image("./icons/vammat.png", 115, 325, 40, 40);
   //leafIcon14.insertBefore(leafList[0]);
   
   var leafIcon15 = paper.image("./icons/vammat.png", 175, 205, 40, 40);
   //leafIcon15.insertBefore(leafList[0]);
   
   var leafIcon16 = paper.image("./icons/vammat.png", 158, 346, 40, 40);
   //leafIcon16.insertBefore(leafList[0]);
   
   var leafIcon17 = paper.image("./icons/vammat.png", 220, 220, 40, 40);
   //leafIcon17.insertBefore(leafList[0]);
   
   var leafIcon18 = paper.image("./icons/vammat.png", 205, 340, 40, 40);
   //leafIcon18.insertBefore(leafList[0]);
   
   var leafIcon19 = paper.image("./icons/vammat.png", 260, 250, 40, 40);
   //leafIcon19.insertBefore(leafList[0]);
   
   var leafIcon20 = paper.image("./icons/vammat.png", 250, 330, 40, 40);
   //leafIcon20.insertBefore(leafList[0]);
   
   //Elderly
   
   var leafIcon21 = paper.image("./icons/vammat.png", 445, 265, 40, 40);
   //leafIcon21.insertBefore(leafList[0]);
   
   var leafIcon22 = paper.image("./icons/vammat.png", 445, 308, 40, 40);
   //leafIcon22.insertBefore(leafList[0]);
   
   var leafIcon23 = paper.image("./icons/vammat.png", 405, 334, 40, 40);
   //leafIcon23.insertBefore(leafList[0]);
   
   var leafIcon24 = paper.image("./icons/vammat.png", 358, 336, 40, 40);
   //leafIcon24.insertBefore(leafList[0]);
}


function setRootForm(indicator, municipalityId){
   return 0;
}

function setLeafColorAndForm(indicator, municipalityId)
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


   value = getLeafValue(value, indicator);
   var color = null;
   var form = null;

   if (value == 5)
   {
      color = "#002f00"; //dark green
      form = 0;
   }
   else if (value == 4 )
   {
      color = "#4a7d28"; //light green
      form = 0;
   }
   else if (value == 3)
   {
      color = "#9eaa17"; //yellowish green
      form = 1;
   }
   else if (value == 2)
   {
      color = "#ddbc7d"; //brownish
      form = 1;
   }
   else if (value == 1)
   {
      color = "#f9ebb3"; //dry leaf
      form = 2;
   }
   else
   {
      color = "#ffffff"; //white leaf
      form = 0;
   }

   return [color, form];
      
}

function getLeafValue(value, indicatorId)
{
   if (value == null)
      return -1;

   switch(indicatorId)
   {
      //young indicators
      case 288:
      return setThresholdDesc(value, 17.45, 14.1, 12.8, 11.5);

      case 242:
      return setThresholdDesc(value, 17.3, 12.4, 9.2, 6);
      
      case 1245:
      return setThresholdAsc(value, 3.7, 6.7, 8.57, 10.44);
      
      case 289:
      return setThresholdDesc(value, 18.1, 14.8, 13, 11.2);
      
      case 3219:
      return setThresholdDesc(value, 10.75, 9.9, 8.97, 8.04);
      
      case 189:
      return setThresholdDesc(value, 17.3, 13.5, 10.9, 8.3);
      
      case 3905:
      return setThresholdDesc(value, 38.9, 33.7, 32, 30.3);
      
      case 286:
      return setThresholdDesc(value, 21.05, 16.3, 12.87, 9.44);
      
      //general indicators
      case 306:
      return setThresholdAsc(value, 6.7, 7.9, 9.7, 11.5);
      
      case 3113:
      return setThresholdDesc(value, 8.05, 6.8, 5, 3.2);
      
      case 184:
      return setThresholdDesc(value, 103.75, 98.1, 93.97, 89.84);
      
      case 3224:
      return setThresholdDesc(value, 59.8, 45.8, 31.43, 17.06);
      
      case 1560:
      return setThresholdDesc(value, 1790, 1470, 1302.33, 1134.66);
      
      //elderly indicators
      case 1259:
      return setThresholdAsc(value, 509.8, 651.1, 806.1, 961.1);
      
      case 307:
      return setThresholdAsc(value, 57.9, 58.6, 59.53, 60.46);
      
      case 690:
      return setThresholdDesc(value, 13.45, 12.9, 11.6, 10.3);
      
      case 318:
      return setThresholdDesc(value, 4.4, 2.9, 2.63, 2.36);
      
      case 1570:
      return setThresholdAsc(value, 87.2, 91.0, 91.8, 92.6);
      
      //roots indicators
      case 1290:
      return setThresholdDesc(value, 1681.5, 1503, 1417.67, 1332.34);
      
      case 1072:
      return setThresholdDesc(value, 832.5, 606, 541, 476);
      
      case 1071:
      return setThresholdDesc(value, 1192.5, 1066, 972, 878);
   }
}

function setThresholdDesc(value, worse, average, good, excellent)
{
   if (value > worse)
      return 1;
   else if (value > average && value <= worse)
      return 2;
   else if (value > good && value <= average)
      return 3;
   else if (value > excellent && value <= good)
      return 4;
   else if (value <= excellent)
      return 5;
   else
      return -1;
}

function setThresholdAsc(value, worse, average, good, excellent)
{
   if (value < worse)
      return 1;
   else if (value >= worse && value < average)
      return 2;
   else if (value >= average && value < good)
      return 3;
   else if (value >= good && value < excellent)
      return 4;
   else if (value >= excellent)
      return 5;
   else
      return -1;
}
