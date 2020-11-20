import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import { Container, TextsDiv, TextFooter, TextAbout } from "./styles";

const Footer: React.FC = () => {
  const [expandAbout, setExpandAbout] = useState(false);

  return (
    <Container>
      <TextsDiv>
        <TextFooter onClick={() => setExpandAbout(!expandAbout)}>
          Sobre <RiArrowDownSLine size={16} />
        </TextFooter>
        <TextFooter>Contato</TextFooter>
        <TextFooter href="http://al.ba.gov.br/" target="_blank">
          AL-BA
        </TextFooter>
        <TextFooter href="https://icon.ufba.br" target="_blank">
          ICON
        </TextFooter>
        <TextFooter href="https://correio24horas.com.br/" target="_blank">
          CORREIO
        </TextFooter>
      </TextsDiv>
      <TextAbout expandAbout={expandAbout}>
        <strong>Onde está o dinheiro</strong> é um projeto com o objetivo de
        facilitar o acesso aos dados de transparência da Assembleia Legislativa
        da Bahia. <br />
        Aqui você encontrará, detalhes dos gastos dos deputados e informações
        sobre partidos e recebedores
      </TextAbout>
    </Container>
  );
};

export default Footer;
