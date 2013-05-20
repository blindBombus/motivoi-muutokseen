<?php
   //Creates a Drop Down List Contating Names of Municipalities
   // Create connection
   $con=mysqli_connect("127.0.0.1","root","O1muVie53viR-42","terveyspuu");

   // Check connection
   if (!mysqli_connect_errno($con)) {

      $query="SELECT DISTINCT `AreaName` FROM `indicators`";
      $data=mysqli_query($con, $query);
   
      echo "<select name = \"webmenu\" id = \"select\" onchange=\"drawToMainPaper()\">";
      $id = 1;
      $selected = 1;
      if(isset($_POST['municipality']) && !empty($_POST['municipality']) && (is_numeric($_POST['municipality']))){
         $selected = (int)$_POST["municipality"];
      }
      while($row=mysqli_fetch_row($data))
      {
         if ($selected!=1 && $id == $selected){
             echo "<option value=\"".$id."\" data-image=\"pics/municipality_logos/".$id.".png\" selected=\"selected\">".utf8_encode($row[0])."</option>";
         }
         else{
            echo "<option value=\"".$id."\" data-image=\"pics/municipality_logos/".$id.".png\">".utf8_encode($row[0])."</option>";
         }
         $id++;
      }
      echo "</select>";
   }
   else
   {
      echo "Database is down for maintenance";
   }

?>
