<?php

require 'autoload.php';

$coiote = new Carnivora('Coiote');

$coiote->setOlhos('Azuis');
$coiote->setMembros(4);

echo "O coiote tem olhos {$coiote->getOlhos()}\n";
echo "O coiote tem {$coiote->getMembros()} membros\n";