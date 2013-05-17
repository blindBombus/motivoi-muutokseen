<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="Ville Hämäläinen" />
<title>Terveyspuu</title>
<link href="http://necolas.github.com/normalize.css/1.1.0/normalize.css" rel="StyleSheet"/>
<link href="./css/base.css" rel="StyleSheet"/>
<link href="./css/map.css" rel="StyleSheet"/>
<script type="text/javascript" src="http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael-min.js"></script>
<script src="./js/jquery-1.9.1.min.js"></script>
</head>
<body>

   <div id = "nav" >
      <!--Centering the content-->
      <div class = "wrap">
         <div id = "biglogo"></div>
         <ul class = "navlist">
         <li id="current">Yleisnäkymä</li>
         <li><a href="./detailview.php">Terveyspuiden tarkastelu</a></li>
         <li><a href="./infopage.php">Tietoja</a></li>
         </ul>      
      </div>
   </div>
   <!--Centering the content-->
   <div class="wrap">
   <div class="content">
      <ul id="pshp-map">
         <li id="kih"><a id="small_7" href="#1"></a></li>
         <li id="vir"><a id="small_23" href="#2"></a></li>
         <li id="mv"><a id="small_10" href="#3"></a></li>
         <li id="jam"><a id="small_5" href="#4"></a></li>
         <li id="kuh"><a id="small_8" href="#5"></a></li>
         <li id="par"><a id="small_13" href="#6"></a></li>
         <li id="ylo"><a id="small_24" href="#7"></a></li>
         <li id="ruo"><a id="small_17" href="#8"></a></li>
         <li id="juu"><a id="small_4" href="#9"></a></li>
         <li id="ori"><a id="small_12" href="#10"></a></li>
         <li id="kan"><a id="small_6" href="#11"></a></li>
         <li id="pal"><a id="small_16" href="#12"></a></li>
         <li id="ika"><a id="small_3" href="#13"></a></li>
         <li id="ham"><a id="small_2" href="#14"></a></li>
         <li id="nok"><a id="small_11" href="#15"></a></li>
         <li id="tam"><a id="small_19" href="#16"></a></li>
         <li id="pir"><a id="small_14" href="#17"></a></li>
         <li id="lem"><a id="small_9" href="#18"></a></li>
         <li id="val"><a id="small_21" href="#19"></a></li>
         <li id="sas"><a id="small_18" href="#20"></a></li>
         <li id="ves"><a id="small_22" href="#21"></a></li>
         <li id="aka"><a id="small_1" href="#22"></a></li>
         <li id="pun"><a id="small_15" href="#23"></a></li>
         <li id="urj"><a id="small_20" href="#24"></a></li>
      </ul> 

   </div>
   </div>
   <script type="text/javascript" src="./js/health-tree-visualizations.js"></script>
   <script type="text/javascript" src="./js/indicator-functions.js"></script> 
   <script>
         var treeList = [];               //array of drawn leafs
         var numOfTimesClicked = 0;       //number of times clicked on leafs
         var municipalities = [7,23,10,5,8,13,24,17,4,12,6,16,3,2,11,19,14,9,21,18,22,1,15,20];

         
         function chunk(array, process, context){
            var items = array.concat();   //clone the array
            setTimeout(function(){
               var item = items.shift();
               process.call(context, item);

               if (items.length > 0){
               setTimeout(arguments.callee, 50);
               }
            }, 50);
         }

      $(window).bind("load", function() {
         chunk(municipalities, drawMuniTree);
         
      });


      function drawMuniTree(municipalityId){
         var leafList = [];
         var tree = new Tree(municipalityId, leafList); 
         var paper = Raphael("small_"+municipalityId+"", 60,55);   
         drawSmallTree(municipalityId, paper, tree, treeList, 600,550);
         treeList.push(tree);
         }
   </script>
   
</body>
</html>
