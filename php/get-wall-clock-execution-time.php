<?php

// place this before any script you want to calculate time
$time_start = microtime(true);

// do something here

// place this at the end of any script you want to calculate time
$time_end = microtime(true);

// dividing with 60 will give the execution time in minutes other wise seconds
$execution_time = ($time_end - $time_start) / 60;

// execution time of the script
echo('<b>Total Execution Time:</b> ' . $execution_time . ' Mins');
