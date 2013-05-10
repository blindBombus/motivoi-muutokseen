<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="Ville Hämäläinen & Qutab" />
<title>Terveyspuu - Terveyspuiden tarkastelu</title>
<link href="http://necolas.github.com/normalize.css/1.1.0/normalize.css" rel="StyleSheet"/>
<link href="./css/base.css" rel="StyleSheet"/>
<link href="./css/comparison.css" rel="StyleSheet"/>
<script type="text/javascript" src="http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael-min.js"></script>
<script src="./js/jquery-1.9.1.min.js"></script>
</head>
<body>

   <div id = "nav" >
      <!--Centering the content-->
      <div class = "wrap">
         <div id = "logo"><a href="./index.php"></a></div>
         <ul class = "navlist">
         <li><a href="./index.php">Yleisnäkymä</a></li>
         <li id="current">Terveyspuiden tarkastelu</li>
         <li><a href="./infopage.php">Tietoja</a></li>
         </ul>      
      </div>
   </div>

   
   <!--Centering the content-->
   <div class="wrap">
   <div class="content">
   
      <!--id for visualization drawing script-->
      <div id="main-tree"></div>

      
      <div id = "dropdown">
      <?php include './php/dropmenu.php'; ?>
      <!--   <select id = "select">
            <option value="1">Testi 1</option>
            <option value="2">Testi 2</option>
            <option value="3">Testi 3</option>
         </select> -->
         <input type = "submit" value = "Go!" onclick='drawToMainPaper()'/>
      </div>
   
      <!--box for indicator information-->
      <div id="comparison-list">
      
         <div class="comp_show" id="comp-list-info">
            <p>Here was supposed to be some information, but I don't remember what...</p>
         </div>
         
         <div id="vis_1"><div id="comp-tree_1"></div></div>
         <div id="vis_2"><div id="comp-tree_2"></div></div>
         <div id="vis_3"><div id="comp-tree_3"></div></div>
         <div id="vis_4"><div id="comp-tree_4"></div></div>
         <div id="vis_5"><div id="comp-tree_5"></div></div>
         <div id="vis_6"><div id="comp-tree_6"></div></div>
         <div id="vis_7"><div id="comp-tree_7"></div></div>
         <!-- This might be done with loop -->
      </div>
      <div class = "munlist" id="municipality-list">
      <!--  <?php //include './php/municipality_list.php'; ?>  -->
      <!-- Content of the municipality list should look something like this: -->
          <ul>
            <li id="mun_1" value="1"><span class="short">Aka</span><span class="whole">Akaa</span></li>
            <li id="mun_2" value="2"><span class="short">Häm</span><span class="whole">Hämeenkyrö</span></li>
            <li id="mun_3" value="3"><span class="short">Ika</span><span class="whole">Ikaalinen</span></li>
            <li id="mun_4" value="4"><span class="short">Juu</span><span class="whole">Juupajoki</span></li>
            <li id="mun_5" value="5"><span class="short">Jäm</span><span class="whole">Jämsä</span></li>
            <li id="mun_6" value="6"><span class="short">Kan</span><span class="whole">Kangasala</span></li>
            <li id="mun_7" value="7"><span class="short">Kih</span><span class="whole">Kihniö</span></li>
            <li id="mun_8" value="8"><span class="short">Kuh</span><span class="whole">Kuhmoinen</span></li>
            <li id="mun_9" value="9"><span class="short">Lem</span><span class="whole">Lempäälä</span></li>
            <li id="mun_10" value="10"><span class="short">M-V</span><span class="whole">Mänttä-Vilppula</span></li>
            <li id="mun_11" value="11"><span class="short">Nok</span><span class="whole">Nokia</span></li>
            <li id="mun_12" value="12"><span class="short">Ori</span><span class="whole">Orivesi</span></li>
            <li id="mun_13" value="13"><span class="short">Par</span><span class="whole">Parkano</span></li>
            <li id="mun_14" value="14"><span class="short">Pir</span><span class="whole">Pirkkala</span></li>
            <li id="mun_15" value="15"><span class="short">Pun</span><span class="whole">Punkalaidun</span></li>
            <li id="mun_16" value="16"><span class="short">Päl</span><span class="whole">Pälkäne</span></li>
            <li id="mun_17" value="17"><span class="short">Ruo</span><span class="whole">Ruovesi</span></li>
            <li id="mun_18" value="18"><span class="short">Sas</span><span class="whole">Sastamala</span></li>
            <li id="mun_19" value="19"><span class="short">Tam</span><span class="whole">Tampere</span></li>
            <li id="mun_20" value="20"><span class="short">Urj</span><span class="whole">Urjala</span></li>
            <li id="mun_21" value="21"><span class="short">Val</span><span class="whole">Valkeakoski</span></li>
            <li id="mun_22" value="22"><span class="short">Ves</span><span class="whole">Vesilahti</span></li>
            <li id="mun_23" value="23"><span class="short">Vir</span><span class="whole">Virrat</span></li>
            <li id="mun_24" value="24"><span class="short">Ylö</span><span class="whole">Ylöjärvi</span></li>
            <li id="mun_25" value="25"><span class="short">PM</span><span class="whole">Pirkanmaa</span></li>
            <li id="mun_26" value="26"><span class="short">Suo</span><span class="whole">Suomi</span></li>
         </ul>

         <script>
            
            $(document).ready(function () {
               $("#municipality-list li").click(function () {
                  if ($(this).hasClass("selected")){
                     $(this).removeClass("selected");
                     $(this).addClass("hidden_tree");

                     console.log($(this).val());
                     $("#comparison-list div#vis_"+($(this).val())).removeClass("comp_show");
                     $("#comparison-list div#vis_"+($(this).val())).addClass("comp_hidden");
                  }
                  else if ($(this).hasClass("hidden_tree")){
                     $(this).addClass("selected");
                     $("#comparison-list div#vis_"+($(this).val())).removeClass("comp_hidden");
                     $("#comparison-list div#vis_"+($(this).val())).addClass("comp_show");
                  }
                  else{
                     setComparison($(this).val());
                     $(this).addClass("selected");
                     $("#comparison-list div#vis_"+($(this).val())).addClass("comp_show");
                  }
               });
            });

         </script>   
      </div>

      <script type="text/javascript">
         $('#select').change(function(){
            $('#info').remove();
            $('#information-box').append('<p id="info">' +'Municipality: '+$('#select option:selected').text()+'</p>');
         });
      </script>
   </div>
   </div>


   <div id="footer">
   
      <!--Centering the content-->
      <div class="wrap">
         <div id="information-box">
            <table border="0">
               <tr id="table_header">
                  <th id="hdr_1">Indicator One</th>
                  <th id="hdr_2">Indicator Two</th>
                  <th id="hdr_3">Indicator Three</th>
               </tr>
               <tr id="row_1">
                  <td id= "data_11">Mun 1 Value 1</td>
                  <td id= "data_12">Mun 2 Value 2</td>
                  <td id= "data_13">Mun 3 Value 3</td>
               </tr>
               <tr id="row_2">
                  <td id= "data_21">Mun 1 Value 1</td>
                  <td id= "data_22">Mun 2 Value 2</td>
                  <td id= "data_23">Mun 3 Value 3</td>
               </tr>
               <tr id="row_3">
                  <td id= "data_31">Mun 1 Value 1</td>
                  <td id= "data_32">Mun 2 Value 2</td>
                  <td id= "data_33">Mun 3 Value 3</td>
               </tr>
            </table>

         </div>
      </div>
      
   </div>
   
   <script type="text/javascript" src="./js/health-tree-visualizations.js"></script>
   <script type="text/javascript" src="./js/indicator-functions.js"></script>
   
   <script type="text/javascript">
         
         var leafList = [];               //array of drawn leafs
         var numOfTimesClicked = 0;       //number of times clicked on leafs
         

         //object for storing drawn leaf data
         function Leaf(leaf, municipalityId, indicatorId, leafId)
         {
            this.leaf = leaf; 
            this.municipalityId = municipalityId;
            this.indicatorId = indicatorId;
            this.leafId = leafId
         };

         //draws first municipality tree
         var municipalityId = 1;//$('#select').val();
         console.log(municipalityId);
         var mainPaper = Raphael("main-tree", 600,550);
         drawMainTree(municipalityId, mainPaper);

         //draws main selected municipality
         function drawToMainPaper(){
            var municipalityId = $('#select').val();
            console.log(municipalityId);
            mainPaper.clear();
            drawMainTree(municipalityId, mainPaper);
         }

      
         function setComparison(municipalityId){
            var paper = Raphael("comp-tree_"+municipalityId+"", 120,110);   
            drawSmallTree(municipalityId, paper, 600, 500);
            }
         
   </script>
</body>
</html>
