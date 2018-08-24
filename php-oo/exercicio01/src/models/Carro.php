<?php

namespace models;

class Carro
{
  private $placa;

  public function __construct(string $placa)
  {
    $this->placa = $placa;
  }

  public function getPlaca()
  {
    return $this->placa;
  }
}