<?php
require 'Mammalia.php';

$lobo = new Mammalia();
$cachorro = clone $lobo;

if ($lobo == $cachorro) {
  echo 'Passou no teste';
} else {
  echo 'Não passou no teste';
}
