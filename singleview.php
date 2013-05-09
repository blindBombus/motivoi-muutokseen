<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="Ville Hämäläinen & Qutab" />
<title>Terveyspuu - Yksityiskohtainen tarkastelu</title>
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
         <li><a href="./compareview.php">Vertailunäkymä</a></li>
         <li id="current">Yksittäiset terveyspuut</li>
         <li><a href="./infopage.php">Terveyspuusta</a></li>
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
         <input type = "submit" value = "Go!" onclick='drawToMainPaper()'/>
      </div>
   
      <!--box for indicator information-->
      <div id="comparison-list"></div>

      <div class = "size" id="municipality-list">
         <?php include './php/municipality_list.php'; ?>
      </div>

   </div>
   </div>

   <script type="text/javascript">
         $('#select').change(function(){
            $('#info').remove();
            $('#information-box').append('<p id="info">' +'Municipality: '+$('#select option:selected').text()+'</p>');
         });
      </script>

   <div id="footer">
   
      <!--Centering the content-->
      <div class="wrap">
         <div id="information-box">Information Box</div>
      </div>
      
   </div>
   
   <script type="text/javascript" src="./js/health-tree-visualizations.js"></script>
   <script type="text/javascript" src="./js/indicator-functions.js"></script>   
   <script type="text/javascript">
      
         var municipalityId = 1;//$('#select').val();
         console.log(municipalityId);
         var mainPaper = Raphael("main-tree", 600,550);
         drawMainTree(municipalityId, mainPaper);
      function drawToMainPaper(){
         var municipalityId = 1;//$('#select').val();
         console.log(municipalityId);
         mainPaper.clear();
         drawMainTree(municipalityId, mainPaper);
         //mainPaper.setViewBox(0,0,2400,2000, false);
         }
   </script>
</body>
</html>
