<?php
   //Creates a Drop Down List Contating Names of Municipalities
   // Create connection
   $con=mysqli_connect("127.0.0.1","root","","terveyspuu");

   // Check connection
   if (!mysqli_connect_errno($con)) {

      $query="SELECT DISTINCT `AreaName` FROM `indicators`";
      $data=mysqli_query($con, $query);
   
      echo "<ul class = \"list\" id=\"list\">";
      $id = 1;
      while($row=mysqli_fetch_row($data))
      {
         echo "<li value=\"".$id."\">".utf8_encode($row[0])."</li>";
         $id++;
      }
      echo "</ul>";
   }
   else
   {
      echo "Database is down for maintenance";
   }

?>
