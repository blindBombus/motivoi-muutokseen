<?php

 $conn = new mysqli('127.0.0.1', 'root', '', 'terveyspuu');
 $query = "SELECT `PrimaryValue`,`AreaName`,`IndicatorName`,`IndicatorID` FROM `indicators`";
 $result = mysqli_query($conn, $query);

 $count = 0;
 $big_arr = array();
 while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
 {
 	$count++;
 	/*foreach ($row as $key => $value) {
 		print_r(utf8_encode($value)."|  ");
 	}*/
 	$arr = array("PrimaryValue" => $row["PrimaryValue"], "AreaName"=>utf8_encode($row["AreaName"]), "IndicatorName"=>utf8_encode($row["IndicatorName"]), "IndicatorID"=>utf8_encode($row["IndicatorID"]));
 	array_push($big_arr, $arr);
 }
 echo json_encode($big_arr);

?>