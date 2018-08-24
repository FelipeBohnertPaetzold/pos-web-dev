<?php

use PHPUnit\Framework\TestCase;
use models\Carro;
use models\Estacionamento;
use models\Ticket;

class TicketTest extends TestCase
{

  public function setup()
  {
    require('vendor/autoload.php');
  }

  public function testCriaEEncerraTicket()
  {
    $carro = $this->createMock(Carro::class);
    $carro->method('getPlaca')->willReturn('ABC-1234');
    $estacionamento = $this->createMock(Estacionamento::class);
    $estacionamento->method('getValorHora')->willReturn(10);
    $ticket = new Ticket($estacionamento, $carro);
    $ticket->encerrarTicket();

    var_dump($ticket->getValor());

    $ticket->gravar();

  }
}