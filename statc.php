<html>

<head>
	<link type="text/css" href="grace.css" rel="stylesheet">
</head>

</html>

<?php


$stats=array();
$counts=array();

for ($i=1; $i<=8; $i++){
	
	$die=rand(1,6);
	$die2=rand(1,6);
	$die3=rand(1,6);

	$stats[]=$die+$die2+$die3;
}
	
$counts=array_fill(3, 16, 0);
	
foreach($stats as $value=>$stat){
		$counts[$stat]=$counts[$stat]+1;
		
}

sort($stats);

unset($stats[0]);

foreach($counts as $value => $count){
	$html[]="<tr>
				<td>$value</td>
				<td>$count</td>
			</tr>";
	}
foreach($stats as $value=>$stat){
	$html2[]="<tr>
				<td>$value</td>
				<td>$stat</td>
			</tr>";
}

?>

<table>
<?php print_r($html2);

?>
</table>

<table class='table'>
	<th>Where the birds are</th>
	<tr>
		<td>The first kinda bird</td>
		<td>The second kinda bird</td>
		<td>The third kinda bird</td>
		<td>The last kinda bird</td>
	</tr>
	<tr>
		<td>the first place</td>
		<td>the second place</td>
		<td>the third place</td>
		<td>the last place</td>
	</tr>
	<tr>
		<td>seeds</td>
		<td>seeds</td>
		<td>seeds</td>
		<td>seeds</td>
	</tr>
	
	<tr>
		<td>fluff and stuff</td>
		<td>fluff and stuff</td>
		<td>fluff and stuff</td>
		<td>fluff and stuff</td>
	</tr>
</table>