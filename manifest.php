<?php

$manifest = array(
	'acceptable_sugar_versions' => array (
		'regex_matches' => array (
			0 => "5.0.*",
			1 => "5.1.*",
			2 => "5.2.*",
			3 => "5.5.*",
			4 => "6.4.*",
			5 => "6.5.*",
		),
	),
	'acceptable_sugar_flavors' => array (
		0 => 'CE',
	),
	'name' 				=> 'SoulwareJavascriptNumberFormat',
	'description' 		=> 'Adds realtime number formatting for currency, int and number type fields.',
	'author' 			=> 'Gábor Darvas, Soulware Ltd.',
	'published_date'	=> '2014/02/19',
	'version' 			=> '0.9.0',
	'type' 				=> 'module',
	'icon' 				=> '',
	'is_uninstallable' => true,
);
$installdefs = array(
	'id'=> 'SoulwareJavascriptNumberFormat',
	'copy' => array(
		0 => array(
		'from' => '<basepath>/custom/themes/Sugar5/js/number_format.js',
		'to' => 'custom/themes/Sugar5/js/number_format.js',
		),
		1 => array(
		'from' => '<basepath>/custom/include/SugarFields/Fields/Currency/EditView.tpl',
		'to' => 'custom/include/SugarFields/Fields/Currency/EditView.tpl',
		),
		2 => array(
		'from' => '<basepath>/custom/include/SugarFields/Fields/Int/EditView.tpl',
		'to' => 'custom/include/SugarFields/Fields/Int/EditView.tpl',
		),
		3 => array(
		'from' => '<basepath>/custom/include/SugarFields/Fields/Float/EditView.tpl',
		'to' => 'custom/include/SugarFields/Fields/Float/EditView.tpl',
		),
	),
);

?>
