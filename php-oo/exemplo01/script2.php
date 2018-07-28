<?php
require 'Mammalia.php';

$lobo = new Mammalia();
$cachorro = new Mammalia();

if (spl_object_hash($lobo) != spl_object_hash($cachorro)) {
  echo 'Passou no teste';
} else {
  echo 'Não passou no teste';
}
