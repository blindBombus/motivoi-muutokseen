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
         <li id="kih"><a id="small_7" href="#1"></a>
            <div class="infobox" id="mun_7">
               <h2>Kihniö</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="7"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="vir"><a id="small_23" href="#2"></a>
            <div class="infobox" id="mun_23">
               <h2>Virrat</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="23"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="mv"><a id="small_10" href="#3"></a>
            <div class="infobox" id="mun_10">
               <h2>Mänttä-Vilppula</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="10"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="jam"><a id="small_5" href="#4"></a>
            <div class="infobox" id="mun_5">
               <h2>Jämsä</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="5"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="kuh"><a id="small_8" href="#5"></a>
            <div class="infobox" id="mun_8">
               <h2>Kuhmoinen</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="8"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="par"><a id="small_13" href="#6"></a>
            <div class="infobox" id="mun_13">
               <h2>Parkano</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="13"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="ylo"><a id="small_24" href="#7"></a>
            <div class="infobox" id="mun_24">
               <h2>Ylöjärvi</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="24"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="ruo"><a id="small_17" href="#8"></a>
            <div class="infobox" id="mun_17">
               <h2>Ruovesi</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="17"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="juu"><a id="small_4" href="#9"></a>
            <div class="infobox" id="mun_4">
               <h2>Juupajoki</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="4"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="ori"><a id="small_12" href="#10"></a>
            <div class="infobox" id="mun_12">
               <h2>Orivesi</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="12"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="kan"><a id="small_6" href="#11"></a>
            <div class="infobox" id="mun_6">
               <h2>Kangasala</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="6"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="pal"><a id="small_16" href="#12"></a>
           <div class="infobox" id="mun_16">
               <h2>Pälkäne</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="16"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="ika"><a id="small_3" href="#13"></a>
            <div class="infobox" id="mun_3">
               <h2>Ikaalinen</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="3"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="ham"><a id="small_2" href="#14"></a>
            <div class="infobox" id="mun_2">
               <h2>Hämeenkyrö</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="2"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="nok"><a id="small_11" href="#15"></a>
            <div class="infobox" id="mun_11">
               <h2>Nokia</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="11"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="tam"><a id="small_19" href="#16"></a>
            <div class="infobox" id="mun_19">
               <h2>Tampere</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="19"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="pir"><a id="small_14" href="#17"></a>
            <div class="infobox" id="mun_14">
               <h2>Pirkkala</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="14"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="lem"><a id="small_9" href="#18"></a>
            <div class="infobox" id="mun_9">
               <h2>Lempäälä</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="9"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="val"><a id="small_21" href="#19"></a></a>
            <div class="infobox" id="mun_21">
               <h2>Valkeakoski</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="21"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="sas"><a id="small_18" href="#20"></a></a>
            <div class="infobox" id="mun_18">
               <h2>Sastamala</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="18"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="ves"><a id="small_22" href="#21"></a>
            <div class="infobox" id="mun_22">
               <h2>Vesilahti</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="22"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="aka"><a id="small_1" href="#22"></a>
            <div class="infobox" id="mun_1">
               <h2>Akaa</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="1"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="pun"><a id="small_15" href="#23"></a>
            <div class="infobox" id="mun_15">
               <h2>Punkalaidun</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="15"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
         <li id="urj"><a id="small_20" href="#24"></a>
            <div class="infobox" id="mun_20">
               <h2>Urjala</h2>
               <form name="municipality" method="POST" action="detailview.php">
                  <input type="hidden" name="municipality" value="20"></input>
                  <button type="submit">Yksityiskohtaisempaan tarkasteluun</button>
               </form>
            </div></li>
      </ul> 

   </div>
   
   <div id="dialog" title="Basic dialog">
      <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
   </div>
   <script>
      $(document).ready(function () {
         $("#pshp-map li").click(function() {
            var handler = $(this).find("div");
            if (!handler.hasClass("clicked")){        
               handler.removeClass("infobox");
               handler.addClass("clicked");
            }
            else{
               handler.removeClass('clicked');
               handler.addClass('infobox');
            }
         });  
      });
      

            
   </script>
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
