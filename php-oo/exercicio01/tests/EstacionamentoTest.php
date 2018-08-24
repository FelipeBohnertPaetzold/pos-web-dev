<?php

use PHPUnit\Framework\TestCase;
use models\Estacionamento;

class EstacionamentoTest extends TestCase
{

  public function setup()
  {
    require('vendor/autoload.php');
  }

  /**
   * Undocumented function
   *
   * @expectedException ArgumentCountError
   */
  public function testEsperaQuePasseUmTicketParaOEstacionamento()
  {
    $estacionamento = new Estacionamento();
  }

  public function testCriaEstacionamentoPassandoOValorDasHorasEEsperaQueEleRetorneOValorCorreto()
  {
    $estacionamento = new Estacionamento(8.65);

    $this->assertEquals(8.65, $estacionamento->getValorHora());
  }
}