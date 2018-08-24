<?php
namespace models;

class Moeda
{
  private $valor;
  private $codigo;

  public function __construct($codigo, $valor)
  {
    $this->codigo = $codigo;
    $this->valor = $valor;
  }

  public function valorEmReais()
  {
    return $this->valor * Cambio::cotacao($this->codigo);
  }
}