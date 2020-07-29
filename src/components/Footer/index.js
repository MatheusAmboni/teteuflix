import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        Contato: <br></br>
        <a href="http://linkedin.com/in/matheus-amboni">LinkedIn</a>
        &nbsp;
        &nbsp;
        <a href="https://twitter.com/matheus_amboni" >Twitter</a>
        <br/>
        <br/>
        Email: mateussamboni@gmail
      </p>
    </FooterBase>
  );
}

export default Footer;
