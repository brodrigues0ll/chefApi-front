import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ActiveLink = ({ href, children }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(router.pathname === href);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  React.useEffect(() => {
    setIsActive(router.pathname === href);
  }, [router.pathname, href]);

  return (
    <StyledLink>
      <a href={href} onClick={handleClick} className={isActive ? 'active' : null}>
        {children}
      </a>
    </StyledLink>
  );
};

export default ActiveLink;

const StyledLink = styled.div`
  a {
    text-decoration: none;
    margin-left: 1.1rem;
    display: flex;
    align-items: center;
    color: #000000;
    font-size: 1.2rem;
    
  }

  a.active {
    border-bottom: 2px solid #000000;
  }


  a:hover {
    border-bottom: 2px solid #000000;
  }

`;

// Este componente usa o hook useRouter do Next.js para obter a rota atual
//e o hook useState do React para gerenciar o estado de "ativo" ou "inativo"
//do link. Ele também usa o efeito useEffect para atualizar o estado quando a
//rota muda. Quando o link é clicado, ele usa o método router.push para 
//navegar para a nova rota e adiciona a classe "ativa" ao elemento a.