<?php
use PHPUnit\Framework\TestCase;
use models\Caixa;
use models\Moeda;

class TesteCaixa extends TestCase
{

  public function setup()
  {
    require('../vendor/autoload.php');
  }

  public function testReceberMoeda()
  {
    $caixa = new Caixa();
    $caixa->adicionarRefeicao();
    $caixa->adicionarRefeicao();
    $caixa->adicionarRefeicao();
    $reais = new Moeda('BRL', 20);
    $dolares = new Moeda('USD', 10);
    $guaranis = new Moeda('GUA', 60);
    $caixa->receberPagamento($reais);
    $caixa->receberPagamento($dolares);
    $caixa->receberPagamento($guaranis);
    $troco = $caixa->devolverTroco();

    $this->assertEquals(10, $troco);
  }
}