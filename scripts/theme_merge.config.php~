<?php

if(!isset($merge_config)) $merge_config = array();

$merge_config[] = array(
	'sourcefile' => 'header.tpl',
	'type' => 'template',
	//not required, but exact match and only one result is expected
	'tag' => '<div id="header">',
	//[append, prepend]
	'insert_method' => 'prepend',
	'content' => '{php}
global $current_user, $sugar_config;

$dec_sep = null;
$num_grp_sep = null;
	
if ($dec_sep == null){
	$dec_sep = $sugar_config[\'default_decimal_seperator\'];
	if (!empty($current_user->id)){
		$user_dec_sep = $current_user->getPreference(\'dec_sep\');
		$dec_sep = (empty($user_dec_sep) ? $sugar_config[\'default_decimal_seperator\'] : $user_dec_sep);
	}
}
if ($num_grp_sep == null){
	$num_grp_sep = $sugar_config[\'default_number_grouping_seperator\'];
	if (!empty($current_user->id)){
		$user_num_grp_sep = $current_user->getPreference(\'num_grp_sep\');
		$num_grp_sep = (empty($user_num_grp_sep) ? $sugar_config[\'default_number_grouping_seperator\'] : $user_num_grp_sep);
	}
}
echo \'<script> var dec_sep = "\'.$dec_sep.\'"; var grp_sep = "\'.$num_grp_sep.\'"; </script>\';
{/php}
<script src="custom/themes/Sugar5/js/number_format.js" type="text/javascript"></script>',
);

?>
