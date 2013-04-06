<?php
   // Create connection
   $con=mysqli_connect("127.0.0.1","root","","csv_db");

   // Check connection
   if (!mysqli_connect_errno($con)) {

      $query="SELECT DISTINCT `Area Name` FROM `Table 2`";
      $data=mysqli_query($con, $query);
   
      echo "<select id = \"select\">";
      $id = 1;
      while($row=mysqli_fetch_row($data))
      {
         echo "<option value=\"".$id."\">".$row[0]."</option>";
         $id++;
      }
      echo "</select>";
   }
   else
   {
      echo "Database is down for maintenance";
   }

?>
