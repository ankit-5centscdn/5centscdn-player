<?php
if (strpos($_SERVER['REQUEST_URI'], '.svg') !== false) {
  $f = $_SERVER['REQUEST_URI'];
}
if (strpos($_SERVER['REDIRECT_URL'], '.svg') !== false) {
  $f = $_SERVER['REDIRECT_URL'];
}
$n = strtok(pathinfo($f, PATHINFO_BASENAME), '?');
$f = __DIR__.'/'.$n;
if (is_file($f)) {
  $c = file_get_contents($f);
  if ($_REQUEST['stroke']) {
    $c = str_replace('fill="white"', 'fill="'.$_REQUEST['stroke'].'"', $c);
    $c = str_replace('stroke="white"', 'stroke="'.$_REQUEST['stroke'].'"', $c);
  }
  if ($_REQUEST['fill']) {
    $c = str_replace('fill="#458A1C"', 'fill="'.$_REQUEST['fill'].'" fill-opacity="0.7"', $c);
  }

  header('Content-Type: image/svg+xml');
  echo $c;
}
