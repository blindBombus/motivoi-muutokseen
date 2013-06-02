<?php
 $conn = new mysqli('127.0.0.1', 'root', '', 'terveyspuu');

 //select primary value based on indicator id and municipality id
 $query = "	SELECT DISTINCT `IndicatorName` FROM `indicators`	
	WHERE `IndicatorID` = ?";


 $numIndicatorId = (is_numeric($_POST['indicatorId']) ? (int)$_POST['indicatorId'] : 0);
 
 $stmt = $conn->stmt_init();
 if($stmt->prepare($query)) {
 	$stmt->bind_param('i', $numIndicatorId);
 	$stmt->execute();
 	$stmt->bind_result($result);
 	$stmt->fetch();
 }
 

 if($stmt && !empty($result)) {
 	echo utf8_encode($result);
 } else {
 	echo "Result not found";
 }

?>
