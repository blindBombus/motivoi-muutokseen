<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="Ville Hämäläinen & Qutab" />
<title>Terveyspuu - Terveyspuiden tarkastelu</title>
<link href="http://necolas.github.com/normalize.css/1.1.0/normalize.css" rel="StyleSheet"/>
<link href="./css/base.css" rel="StyleSheet"/>
<script type="text/javascript" src="http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael-min.js"></script>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
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
         <?php include '/php/dropmenu.php'; ?>
         <input type = "submit" value = "Go!" onclick='drawToMainPaper()'/>
      </div>
   
      <!--box for indicator information-->
      <div id="comparison-list"></div>

      <a class = "hover-anchor" id = "hover-anchor">&lt;</a>

      <div class = "munlist" id="municipality-list">
         <?php include '/php/municipality_list.php'; ?>
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
         
         var leafList = [];
         var numOfTimesClicked = 0;
         
         function Leaf(leaf, municipalityId, indicatorId, leafId)
         {
            this.leaf = leaf; 
            this.municipalityId = municipalityId;
            this.indicatorId = indicatorId;
            this.leafId = leafId
         };
         

      
         var municipalityId = 1;//$('#select').val();
         console.log(municipalityId);
         var mainPaper = Raphael("main-tree", 600,550);
         drawMainTree(municipalityId, mainPaper);

         function drawToMainPaper(){
            //var municipalityId = 1;
            var municipalityId = $('#select').val();
            console.log(municipalityId);
            mainPaper.clear();
            drawMainTree(municipalityId, mainPaper);
            //mainPaper.setViewBox(0,0,2400,2000, false);
         }
   </script>
</body>
</html>
