//This js-file uses Raphaël.js so remember to include it to your webpage

//Draws main health tree visualization
function drawMainTree(municipalityId, mainPaper){
   drawBackground(mainPaper, municipalityId);
   var trunkWidth  =  drawTrunk(mainPaper, municipalityId);
   drawRoots(mainPaper, municipalityId, trunkWidth);
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
   var trunkCenter = mainPaper.path("M325 505 l 0 -225 l 0,-40 c0,0 0,-10 5,-20 l60,-120").attr({stroke: '#524132'});
   var trunkCenterOutlines = mainPaper.path("M329 400 l0,30 c0,0 0,20 -4,75 c0,0 -4,-55 -4,-75 l0,-30 l 0 -120 l 0,-40 c0,0 0,-10 5,-20 l64,-120 l-56,120 c0,0 -5,10 -5,20 l 0,40 l0,120z").attr({stroke: '#524132', fill: '#524132'});
   drawGeneralBranchLeaves(mainPaper, municipalityId, trunkCenter);
   var trunkLeft = mainPaper.path("M"+(325-trunkWidth)+" 400 l 0 -60 c0,0 0,-20 -25 -25 l -125 -30").attr({stroke: '#524132'});
   var trunkLeftOutlines = mainPaper.path("M"+(321-trunkWidth)+" 400 l 0,-60 c0,0 2,-18 -25 -23 l-122,-32 l130,28 c0,0 25,5 25 28 l0,60z").attr({stroke: '#524132', fill: '#524132'});
   drawYoungBranchLeaves(mainPaper, municipalityId, trunkLeft);
   var trunkRight = mainPaper.path("M"+(325+trunkWidth)+" 400 l 0,-60 c0,0 0,-20 25 -25 l 55 -10").attr({stroke: '#524132'});
   var trunkRightOutlines = mainPaper.path("M"+(321+trunkWidth)+" 400 l 0,-60 c0,0 0,-20 25 -25 l 59,-10 l-59,15 c0,0 -15,5 -17,20 l0,60 c0,0 -4,8 -8,0z").attr({stroke: '#524132', fill: '#524132'});
   drawElderlyBranchLeaves(mainPaper, municipalityId, trunkRight);
   return trunkWidth;
}

//Draws root visualizations and other indicator visualizations that
//must be drawn with the roots to mainPaper. Uses municipalityId 
//to get the indicator data from correct municipality.
function drawRoots(mainPaper, municipalityId, trunkWidth){
   
   var rootLeft = mainPaper.path("M"+(325-trunkWidth)+" 400 c0,0 0,15 -15,20 l-100,20").attr({stroke: '#524132'});
   var rootLeftOutline = mainPaper.path("M"+(321-trunkWidth)+" 400 c0,0 0,14 -15,16 l-100,24 l100,-16 c0,0 23,0 23,-25z").attr({stroke: '#524132', fill:'#524132'});
   
   var rootRight = mainPaper.path("M"+(325+trunkWidth)+" 400 c0,0 0,15 15,20 l100, 20").attr({stroke: '#524132'});
   var rootRightOutline = mainPaper.path("M"+(329+trunkWidth)+" 400 c0,0 0,14 15,16 l100,24 l-100,-16 c0,0 -23,0 -23,-25z").attr({stroke: '#524132', fill:'#524132'});
}

//Draws young branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawYoungBranchLeaves(mainPaper, municipalityId, branch){
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;          //should take different value for each leaf
   var maxLength = branch.getTotalLength();
   
   branchPoint = branch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-15);
   indicator = 288;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 300, 2, 4);
   leafStartPoint = (branchPoint.x-25)+","+(branchPoint.y+15);
   indicator = 242;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 270, 0, 0);
   
   branchPoint = branch.getPointAtLength(maxLength-10);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-40);
   indicator = 1245;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 320, 0, 1);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+45);
   indicator = 289;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 245, 1, 2);
   
   branchPoint = branch.getPointAtLength(maxLength-50);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-50);
   indicator = 3219;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 335, 0, 1);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+50);
   indicator = 189;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 230, 0, 1);
   
   branchPoint = branch.getPointAtLength(maxLength-90);
   leafStartPoint = branchPoint.x+","+(branchPoint.y-40);
   indicator = 3905;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 350, 0, 0);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+30);
   indicator = 286;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 210, 0, 0);
   
   branchPoint = branch.getPointAtLength(maxLength-125);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y-15);
   indicator = 288;                                                              //dummy indicator
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 360, 1, 2);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y+12);
   indicator = 242;                                                             //dummy indicator
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 190, 1, 3);
   
}

//Draws general branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawGeneralBranchLeaves(mainPaper, municipalityId, branch){
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;          //should take different value for each leaf
   var maxLength = branch.getTotalLength();

   branchPoint = branch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y-10);
   indicator = 306;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 15, 0, 0);
   leafStartPoint = (branchPoint.x+30)+","+(branchPoint.y+20);
   indicator = 3113;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 50, 0, 0);
   
   branchPoint = branch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x-16)+","+(branchPoint.y-25);
   indicator = 184;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 350, 0, 0);
   leafStartPoint = (branchPoint.x+40)+","+(branchPoint.y+25);
   indicator = 3224;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 75, 0, 0);
   
   branchPoint = branch.getPointAtLength(maxLength-60);
   leafStartPoint = (branchPoint.x-30)+","+(branchPoint.y-30);
   indicator = 1560;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 330, 1, 2);
   leafStartPoint = (branchPoint.x+50)+","+(branchPoint.y+30);
   indicator = 1259;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 95, 1, 2);
   
   branchPoint = branch.getPointAtLength(maxLength-110);
   leafStartPoint = (branchPoint.x-20)+","+(branchPoint.y-45);
   indicator = 306;                                                              //dummy indicator
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 305, 1, 3);
   leafStartPoint = (branchPoint.x+45)+","+(branchPoint.y+10);
   indicator = 3113;                                                              //dummy indicator
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 115, 1, 3);
   
   branchPoint = branch.getPointAtLength(maxLength-130);
   leafStartPoint = (branchPoint.x-10)+","+(branchPoint.y-20);
   indicator = 184;                                                             //dummy indicator
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 290, 0, 0);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y+15);
   indicator = 3224;                                                             //dummy indicator
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 140, 0, 0);
   
}

//Draws elderly branch visualizations and leaves for it to mainPaper. 
//Uses municipalityId to get the indicator data from correct municipality.
function drawElderlyBranchLeaves(mainPaper, municipalityId, branch){
   var branchPoint = null
   var leafStartPoint = null;
   var indicator = null;          //should take different value for each leaf
   var maxLength = branch.getTotalLength();
   
   branchPoint = branch.getPointAtLength(maxLength);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y-10);
   indicator = 307;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 70, 0, 0);
   leafStartPoint = (branchPoint.x+20)+","+(branchPoint.y+15);
   indicator = 690;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 110, 0, 1);
   
   branchPoint = branch.getPointAtLength(maxLength-25);
   leafStartPoint = (branchPoint.x+10)+","+(branchPoint.y+25);
   indicator = 318;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 135, 1, 3);
   
   branchPoint = branch.getPointAtLength(maxLength-55);
   leafStartPoint = (branchPoint.x)+","+(branchPoint.y+20);
   indicator = 1570;
   drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, 155, 2, 4);  
}

function drawLeaf(mainPaper, leafStartPoint, indicator, municipalityId, leafAngle, form, color){
   var leafcolor = null; //setLeafColor(indicator, municipalityId);//"#1c460c";
   var leafline = null;
   var leaf = null;
   var colorAndForm = setLeafColorAndForm(indicator, municipalityId);
   form = colorAndForm[1];

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

   leafcolor = colorAndForm[0];
   leafline = "#A0A0A0";
   leaf.transform("r"+leafAngle+","+leafStartPoint);
   leaf.attr({stroke: leafline, fill: leafcolor});

   //take ids of the leaves and store them
   //use these ids to see which leaf is clicked
   //use the associated mun/ind Id to fetch data for that leaf
   var newLeaf = new Leaf(leaf, municipalityId, indicator,leaf.id);
   leafList.push(newLeaf);

   leaf.node.onclick=function click () {
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
      color = "#f9ebb3"; //"#f9ebb3"; //dry leaf
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