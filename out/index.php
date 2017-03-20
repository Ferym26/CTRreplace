<!DOCTYPE html>
<html lang="en">
<head><base href="http://<?php echo $host;?>/dis/">
	<meta charset="UTF-8">
	<title>CTRreplace</title>

	<?php echo $traf_script_head_js; ?>
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>

</head>

<body class="same" id="anyID" data-any="qwerty"><?php echo $on_success_script;?><?php echo $default_country_script;?>

<h1>Hi, i'm CTRreplace</h1>

<form action="<?php echo $form_order_action;?>">

	<select name="country" id="country" class="country"><?php echo $select_country_options;?></select>
	
	<input type="text">

<?php echo $traf_form_input; ?></form>
	
<?php echo $every_page_pixel;?></body>
</html>