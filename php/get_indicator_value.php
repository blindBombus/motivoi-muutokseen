<?php
 $conn = new mysqli('127.0.0.1', 'root', '', 'terveyspuu');
 //$query = "INSERT into comments(name, email, comments) VALUES (?, ?, ?)";
  $query = "	SELECT `PrimaryValue`,`AreaName`,`IndicatorName` FROM `indicators`	
	WHERE `IndicatorID` = ? and
	`AreaName` =
	(SELECT `AreaName` FROM `municipalities`
	WHERE ID = ?)";

 $numIndicatorId = (is_numeric($_POST['indicatorId']) ? (int)$_POST['indicatorId'] : 0);
 $numAreaId = (is_numeric($_POST['areaNum']) ? (int)$_POST['areaNum'] : 0);



 $stmt = $conn->stmt_init();
 if($stmt->prepare($query)) {
 	$stmt->bind_param('ii', $numIndicatorId, $numAreaId);
 	$stmt->execute();
 }
 
 $stmt->bind_result($value,$area,$indicator);
 $stmt->fetch();

$arr = array();
array_push($arr, $value, utf8_encode($area), utf8_encode($indicator));

 if($stmt && !empty($arr)) {
 	echo json_encode($arr);
 } else {
 	echo "Result not found";
 }

?>
