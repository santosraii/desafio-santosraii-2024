import { Animais } from "./animal";
import { Bioma } from "./bioma";

class Recinto {
  constructor(numero, biomas, tamanho, animais) {
    this.numero = numero;
    this.biomas = biomas;
    this.tamanho = tamanho;
    this.animais = animais;
  }
}

const Recintos = [
  new Recinto(1, [Bioma.SAVANA], 10, [
    Animais.macaco,
    Animais.macaco,
    Animais.macaco,
  ]),
  new Recinto(2, [Bioma.FLORESTA], 5, []),
  new Recinto(3, [Bioma.SAVANA, Bioma.RIO], 7, [Animais.gazela]),
  new Recinto(4, [Bioma.RIO], 8, []),
  new Recinto(5, [Bioma.SAVANA], 9, [Animais.leao]),
];

export { Recintos };
