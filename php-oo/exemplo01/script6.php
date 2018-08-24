<?php

require 'autoload.php';

$coiote = new Carnivora('Coiote');

$coiote->olhos = 'Azuis';
$coiote->membros = 4;

echo "O coiote tem olhos {$coiote->olhos}\n";
echo "O coiote tem {$coiote->membros} membros\n";