<?php
 $conn = new mysqli('127.0.0.1', 'root', '', 'terveyspuu');

 //select primary value based on indicator id and municipality id
 $query = "	SELECT `PrimaryValue` FROM `indicators`	
	WHERE `IndicatorID` = ? and
	`AreaName` =
	(SELECT `AreaName` FROM `municipalities`
	WHERE ID = ?)";


 $numIndicatorId = (is_numeric($_POST['indicatorId']) ? (int)$_POST['indicatorId'] : 0);
 $numAreaNum = (is_numeric($_POST['areaNum']) ? (int)$_POST['areaNum'] : 0);
 
 $stmt = $conn->stmt_init();
 if($stmt->prepare($query)) {
 	$stmt->bind_param('ii', $numIndicatorId, $numAreaNum);
 	$stmt->execute();
 	$stmt->bind_result($result);
 	$stmt->fetch();
 	$stmt->close();
 }
 

 if($stmt && !empty($result)) {
 	echo $result;
 } else {
 	echo "Result not found";
 }

?>