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

  header('Content-Type: image/svg+xml');
  echo $c;
}
