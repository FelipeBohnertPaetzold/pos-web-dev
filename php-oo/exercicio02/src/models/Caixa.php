<?php

namespace models;

class Caixa
{

  private $totalPago = 0;
  private $totalDevido = 0;

  public function adicionarRefeicao()
  {
    $this->totalDevido += Refeicao::VALOR;
  }

  public function receberPagamento(Moeda $moeda)
  {
    $this->totalPago += $moeda->valorEmReais();
  }

  public function devolverTroco()
  {
    return $this->totalPago - $this->totalDevido;
  }
}