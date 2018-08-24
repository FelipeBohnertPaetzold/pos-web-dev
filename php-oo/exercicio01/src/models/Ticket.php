<?php

namespace models;

class Ticket
{
  private $estacionamento;
  private $carro;
  private $carro_placa;
  private $chegada;
  private $valor;
  private $saida;

  public function __construct(Estacionamento $estacionamento, Carro $carro)
  {
    $this->estacionamento = $estacionamento;
    $this->carro = $carro;
    $this->chegada = time();
  }

  public function encerrarTicket()
  {
    $this->saida = time();
    $duracao = $this->saida - $this->chegada;
    $horas = ($duracao / 60 / 60);

    $this->valor = number_format($this->estacionamento->getValorHora() * $horas, 2);
  }

  public function gravar()
  {
    file_put_contents('ticket.txt', serialize($this));
  }

  public function getValor()
  {
    return $this->valor;
  }
}