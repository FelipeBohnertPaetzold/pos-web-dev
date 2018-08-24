<?php
require 'autoload.php';

$lobo = new Carnivora('lobo');
$cachorro = new Carnivora('cachorro');

if (spl_object_hash($lobo) != spl_object_hash($cachorro)) {
  echo 'Passou no teste';
} else {
  echo 'Não passou no teste';
}
