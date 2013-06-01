<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="Ville Hämäläinen & Qutab" />
<title>Terveyspuu - Terveyspuiden tarkastelu</title>
<link href="http://necolas.github.com/normalize.css/1.1.0/normalize.css" rel="StyleSheet"/>
<link href="./css/base.css" rel="StyleSheet"/>
<link href="./css/comparison.css" rel="StyleSheet"/>
<link rel="stylesheet" type="text/css" href="./css/dd.css" />
<link type="text/css" rel="stylesheet" href="./css/jquery.qtip.css" />

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
      </div>
   
      <!--box for indicator information-->
      <div id="comparison-list">
      
         <div class="comp_show" id="comp-list-info">
            <p>Please select municiplaties on right for comparison</p>
         </div>

         <script>
         for (var i =1 ; i <=26; i++)
         {
            var newDiv = document.createElement("div");
            //newDiv.setAttribute("class","comp_hidden");
            newDiv.setAttribute("id", "vis_"+i);

            var insideDiv = document.createElement("div");
            insideDiv.setAttribute("id", "comp-tree_"+i);
            newDiv.appendChild(insideDiv);

            var parentDiv = document.getElementById("comparison-list");
            parentDiv.appendChild(newDiv);
         }
         </script>
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
  
      </div>

   </div>
   </div>


   <div id="footer">
   
      <!--Centering the content-->
      <div class="wrap">
         <div id="information-box">
            <table id = "information-table" border="0">
               <tr id="table_header">
                  <th id="hdr_mun"></th>
                  <th id="hdr_1"></th>
                  <th id="hdr_2"></th>
                  <th id="hdr_3"></th>
               </tr>
               <tr id="row_1">
                  <td id= "data_10"></td>
                  <td id= "data_11"></td>
                  <td id= "data_12"></td>
                  <td id= "data_13"></td>
               </tr>
               <tr id="row_2">
                  <td id= "data_20"></td>
                  <td id= "data_21"></td>
                  <td id= "data_22"></td>
                  <td id= "data_23"></td>
               </tr>
               <tr id="row_3">
                  <td id= "data_30"></td>
                  <td id= "data_31"></td>
                  <td id= "data_32"></td>
                  <td id= "data_33"></td>
               </tr>
               <tr id = "row_4">
                  <td id= "data_40"></td>
                  <td id= "data_41"></td>
                  <td id= "data_42"></td>
                  <td id= "data_43"></td>
               </tr>
            </table>

         </div>
      </div>
      
   </div>
   <script type="text/javascript" src="./js/raphael-min.js"></script>
   <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
   <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
   <script type="text/javascript" src="./js/jquery.dd.min.js"></script>
   <script type="text/javascript" src="./js/health-tree-visualizations.js"></script>   
   <script type="text/javascript">
      
      $(document).ready(function(e) {
         try {
            $("body select").msDropDown();
         } catch(e) {
         alert(e.message);
         }
      });
      
      var selectedMunId = [];
            
            $(document).ready(function () {
               $("#municipality-list li").click(function () {
                  if ($(this).hasClass("selected")){
                     $(this).removeClass("selected");
                     $(this).addClass("hidden_tree");

                     console.log($(this).val());
                     $("#comparison-list div#vis_"+($(this).val())).removeClass("comp_show");
                     $("#comparison-list div#vis_"+($(this).val())).addClass("comp_hidden");

                     var ind = selectedMunId.indexOf($(this).val());
                     selectedMunId.splice(ind,1);
                     console.log(selectedMunId);

                  }
                  else if ($(this).hasClass("hidden_tree")){
                     $(this).addClass("selected");
                     $("#comparison-list div#vis_"+($(this).val())).removeClass("comp_hidden");
                     $("#comparison-list div#vis_"+($(this).val())).addClass("comp_show");

                     selectedMunId.push($(this).val());
                     console.log(selectedMunId);
                  }
                  else{
                     setComparison($(this).val());
                     $(this).addClass("selected");
                     $("#comparison-list div#vis_"+($(this).val())).addClass("comp_show");
                     $("#comparison-list div#vis_"+($(this).val())).append("<h2>"+$("#mun_"+($(this).val())+" .whole").html()+"</h2>");
                     selectedMunId.push($(this).val());
                     console.log(selectedMunId);
                  }
               });
            });

         $('#select').change(function(){
            $('#info').remove();
            $('#information-box').append('<p id="info">' +'Municipality: '+$('#select option:selected').text()+'</p>');
         });
         
         var treeList = [];
         var numOfTimesClicked = 0;       //number of times clicked on leafs
         

         //draws first selected municipality tree
         var municipalityId = $('#select').val();
         console.log(municipalityId);
         var mainLeafList = [];
         var mainTree = new Tree(municipalityId, mainLeafList)
         var mainPaper = Raphael("main-tree", 600,550);
         drawMainTree(municipalityId, mainPaper, mainTree, treeList);

         //draws main selected municipality
         function drawToMainPaper(){
            var municipalityId = $('#select').val();
            mainTree.municipalityId = municipalityId;
            mainTree.leafList = [];
            mainPaper.clear();
            drawMainTree(municipalityId, mainPaper, mainTree, treeList);
         }

      
         function setComparison(municipalityId){
            var leafList = [];
            var tree = new Tree(municipalityId, leafList); 
            var paper = Raphael("comp-tree_"+municipalityId+"", 160,140); 
            drawSmallTree(municipalityId, paper, tree, treeList, 600, 500);
            treeList.push(tree);
         }
         
         
   </script>
</body>
</html>
