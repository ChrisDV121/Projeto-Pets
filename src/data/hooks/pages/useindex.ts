import { useState } from "react";
import { Pet } from "../../@types/Pet";
export function useIndex() {
  const [listaPets, setListaPets] = useState([
      {
        id: 1,
        nome: "Bidu",
        historia:
          "Após ser encontrado atropelado, o cãozinho Avelar foi acolhido por Stella Petrovitz Barreto, mãe de Helena, uma menina de 2 anos, diagnosticada com Transtorno do Espectro Autista (TEA).",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYyLvj5Gt1kW2dN9wBc-iSYVTHX6lU8J6dA&usqp=CAU",
      },
      {
        id: 2,
        nome: "Tobias",
        historia:
          "Após ser encontrado atropelado, o cãozinho Avelar foi acolhido por Stella Petrovitz Barreto, mãe de Helena, uma menina de 2 anos, diagnosticada com Transtorno do Espectro Autista (TEA).",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-icNaMwD2DGQWBggTi6_qhbKaPiEJSStaw&usqp=CAU",
      },
      {
        id: 3,
        nome: "Fred",
        historia:
          "Após ser encontrado atropelado, o cãozinho Avelar foi acolhido por Stella Petrovitz Barreto, mãe de Helena, uma menina de 2 anos, diagnosticada com Transtorno do Espectro Autista (TEA).",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3GbpLKcQPCLo1p9lOrBYguoz1nNWszittw&usqp=CAU",
      },
    ]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [valor, setValor] = useState(""),
    [mensagem, setMensagem] = useState("");

function adotar(){

}
  return {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar
  };
}
