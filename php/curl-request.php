<?php

$curl_resource = curl_init();

curl_setopt($curl_resource, CURLOPT_FAILONERROR, true);
curl_setopt($curl_resource, CURLOPT_HEADER, false);
curl_setopt($curl_resource, CURLOPT_URL, $rss_feed_url);
curl_setopt($curl_resource, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0');
curl_setopt($curl_resource, CURLOPT_RETURNTRANSFER, true);

if(curl_exec($curl_resource) === false) {

    curl_error($curl_resource);

} else {

    $curl_response_data = curl_exec($curl_resource);

}

curl_close($curl_resource);
