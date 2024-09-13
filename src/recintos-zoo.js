import { Animais } from "./animal";
import { Recintos } from "./recinto";

class RecintosZoo {
  buscaRecintos(animal, quantidade) {
    return Recintos.filter(
      (recinto) =>
        this.getTamanhoDisponivel(
          recinto.tamanho,
          recinto.animais,
          animal,
          quantidade
        ) >= 0 && animal.isConfortavel(recinto, quantidade)
    );
  }

  getTamanhoDisponivel(tamanho, animais, animal, quantidade) {
    const realAnimais = [
      ...animais,
      ...Array.from({ length: quantidade }).fill(animal),
    ];

    return (
      tamanho -
      realAnimais.reduce((acc, animal) => acc + animal.tamanho, 0) -
      (new Set(realAnimais).size > 1 ? 1 : 0)
    );
  }

  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) {
      return {
        erro: "Quantidade inválida",
      };
    }

    const currAnimal = Animais[animal.toLowerCase()];

    if (!currAnimal) {
      return {
        erro: "Animal inválido",
      };
    }

    const recintos = this.buscaRecintos(currAnimal, quantidade);

    if (recintos.length === 0) {
      return {
        erro: "Não há recinto viável",
      };
    }

    return {
      recintosViaveis: recintos.map((recinto) => {
        const tamanhoDisponivel = this.getTamanhoDisponivel(
          recinto.tamanho,
          recinto.animais,
          currAnimal,
          quantidade
        );

        return `Recinto ${recinto.numero} (espaço livre: ${tamanhoDisponivel} total: ${recinto.tamanho})`;
      }),
    };
  }
}

export { RecintosZoo as RecintosZoo };
