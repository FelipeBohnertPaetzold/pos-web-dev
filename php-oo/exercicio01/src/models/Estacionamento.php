<?php

namespace models;

class Estacionamento
{
  private $valorHora;

  public function __construct(float $valorHora)
  {
    $this->valorHora = $valorHora;
  }

  public function getValorHora()
  {
    return $this->valorHora;
  }
}