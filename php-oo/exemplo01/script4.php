<?php
require 'autoload.php';

$beemote = new Beemote();

echo 'A variável $beemote é um objeto da classe ' . get_class($beemote);

class BeemoteMelhor extends Beemote
{

}

$beemote = new BeemoteMelhor();

echo 'A variável $beemote é um objeto da classe ' . get_class($beemote);
