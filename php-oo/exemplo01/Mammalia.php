<?php

abstract class Mammalia
{
  /** @var string */
  protected $olhos;
  /** @var integer */
  protected $membros;
  /** @var string */
  protected $nome;

  public function __construct($nome)
  {
    $this->nome = $nome;
  }

  public function __destruct()
  {
    echo "O objeto {$this->nome} foi destruído.\n";
  }

  public function __get($name)
  {
    if ($name === 'olhos' || $name === 'membros') {
      return $this->$name;
    }
  }

  public function __set($name, $value)
  {
    if ($name === 'olhos' || $name === 'membros') {
      $this->$name = $value;
    }
  }

  public function __call($name, array $arguments)
  {
    $prefixo = substr($name, 0, 3);

    if ($prefixo === 'get') {
      $attr = lcfirst(substr($name, 3));

      return $this->$attr;
    }

    if ($prefixo === 'set') {
      $attr = lcfirst(substr($name, 3));
      $this->$attr = $arguments[0];
    }
  }

  public function __clone()
  {
    echo "Foi gerado um clone da classe " . get_called_class() . "\n";
  }

}