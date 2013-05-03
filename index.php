<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="Ville Hämäläinen" />
<title>Terveyspuu</title>
<link href="http://necolas.github.com/normalize.css/1.1.0/normalize.css" rel="StyleSheet"/>
<link href="./css/base.css" rel="StyleSheet"/>
<script type="text/javascript" src="http://github.com/DmitryBaranovskiy/raphael/raw/master/raphael-min.js"></script>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
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
         <li id="kih"><a href="#1"></a></li>
         <li id="vir"><a href="#2"></a></li>
         <li id="mv"><a href="#3"></a></li>
         <li id="jam"><a href="#4"></a></li>
         <li id="kuh"><a href="#5"></a></li>
         <li id="par"><a href="#6"></a></li>
         <li id="ylo"><a href="#7"></a></li>
         <li id="ruo"><a href="#8"></a></li>
         <li id="juu"><a href="#9"></a></li>
         <li id="ori"><a href="#10"></a></li>
         <li id="kan"><a href="#11"></a></li>
         <li id="pal"><a href="#12"></a></li>
         <li id="ika"><a href="#13"></a></li>
         <li id="ham"><a href="#14"></a></li>
         <li id="nok"><a href="#15"></a></li>
         <li id="tam"><a href="#16"></a></li>
         <li id="pir"><a href="#17"></a></li>
         <li id="lem"><a href="#18"></a></li>
         <li id="val"><a href="#19"></a></li>
         <li id="sas"><a href="#20"></a></li>
         <li id="ves"><a href="#21"></a></li>
         <li id="aka"><a href="#22"></a></li>
         <li id="pun"><a href="#23"></a></li>
         <li id="urj"><a href="#24"></a></li>
      </ul>
      <!--id for visualization drawing script-->
      <div id="pshp-map-paper"></div>

      

   </div>
   </div>
   
</body>
</html>
