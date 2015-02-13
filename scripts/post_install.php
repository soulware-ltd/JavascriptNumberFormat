<?php

function post_install(){
    
	require_once(__DIR__ . '/theme_merge.php');

	merge_theme();

} 

?>
