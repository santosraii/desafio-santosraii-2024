import { Bioma } from "./bioma";

class Animal {
  constructor(nome, tamanho, biomas, carnivoro) {
    this.nome = nome;
    this.tamanho = tamanho;
    this.biomas = biomas;
    this.carnivoro = carnivoro;
  }

  isConfortavel(recinto, _quantidade) {
    if (recinto.animais.length > 0) {
      if (this.carnivoro && recinto.animais.some((a) => a.nome !== this.nome)) {
        return false;
      }

      if (recinto.animais.some((a) => a.carnivoro && a.nome !== this.nome)) {
        return false;
      }
    }

    return this.biomas.some((bioma) => recinto.biomas.includes(bioma));
  }
}

class Hipopotamo extends Animal {
  constructor() {
    super("Hipopotamo", 4, [Bioma.SAVANA, Bioma.RIO], false);
  }

  isConfortavel(recinto, _quantidade) {
    if (!super.isConfortavel(recinto)) {
      return false;
    }

    return (
      recinto.animais.every((a) => a.nome == "Hipopotamo") ||
      this.biomas.every((bioma) => recinto.biomas.includes(bioma))
    );
  }
}

class Macaco extends Animal {
  constructor() {
    super("Macaco", 1, [Bioma.SAVANA, Bioma.FLORESTA], false);
  }

  isConfortavel(recinto, quantidade) {
    if (!super.isConfortavel(recinto)) {
      return false;
    }

    return recinto.animais.length > 0 || quantidade >= 2;
  }
}

const Animais = {
  leao: new Animal("Leao", 3, [Bioma.SAVANA], true),
  leopardo: new Animal("Leopardo", 2, [Bioma.SAVANA], true),
  crocodilo: new Animal("Crocodilo", 3, [Bioma.RIO], true),
  gazela: new Animal("Gazela", 2, [Bioma.SAVANA], false),
  macaco: new Macaco(),
  hipopotamo: new Hipopotamo(),
};

export { Animais };
