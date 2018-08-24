<?php
namespace models;

class Cambio
{
  public static function cotacao($codigoDaMoeda)
  {
    switch ($codigoDaMoeda) {
      case 'BRL':
        return 1;
      case 'USD':
        return 3;
      case 'GUA':
        return 1 / 3;
    }
  }
}
