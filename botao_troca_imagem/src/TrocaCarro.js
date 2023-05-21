import React, { useState } from "react";

import carroBranco from "./assets/imagens/carro-branco.jpeg";
import carroVermelho from "./assets/imagens/carro-vermelho.jpg";

const TrocaCarro = () => {
  const [imagem, setImagem] = useState(carroBranco);

  const trocaImagem = () => {
    if (imagem === carroBranco) {
      setImagem(carroVermelho);
    } else {
      setImagem(carroBranco);
    }
  };

  return (
    <section id="principal">
      <div>
        <button onClick={trocaImagem}>Troca Imagem</button>
      </div>
      <div>
        <img style={{ width: "200px" }} src={imagem} alt="Imagem" />
      </div>
    </section>
  );
};

export default TrocaCarro;
