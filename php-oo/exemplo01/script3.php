<?php
require 'autoload.php';

$lobo = new Carnivora('lobo');
$cachorro = clone $lobo;

if ($lobo == $cachorro) {
  echo 'Passou no teste';
} else {
  echo 'Não passou no teste';
}
