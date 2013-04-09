<?php
 $conn = new mysqli('127.0.0.1', 'root', '', 'terveyspuu');
 //$query = "INSERT into comments(name, email, comments) VALUES (?, ?, ?)";
 $query = "SELECT  `PrimaryValue` FROM  `indicators` WHERE  `IndicatorID` = ? AND  `AreaID` =?";
 $numIndicatorId = (is_numeric($_POST['indicatorId']) ? (int)$_POST['indicatorId'] : 0);
 $numAreaId = (is_numeric($_POST['areaId']) ? (int)$_POST['areaId'] : 0);



 $stmt = $conn->stmt_init();
 if($stmt->prepare($query)) {
 	$stmt->bind_param('ii', $numIndicatorId, $numAreaId);
 	$stmt->execute();
 }
 $stmt->bind_result($result);
 $stmt->fetch();

 if($stmt && !empty($result)) {
 	echo $result;
 } else {
 	echo "Result not found";
 }

?>