import React from 'react'
import {FlexItems, HeaderBrand, HeaderLinkItem, HeaderList, HeaderListItem, HeaderLogo, StyledHeader } from './Styled'
import { Container } from '../../_assets/styles/GlobalGrid';
import { ButtonPrimary } from '../../_assets/styles/GlobalComponents';
import Logotype from '../../_assets/img/LOGOTYPE.svg'

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <FlexItems>

                <HeaderBrand href='#'>
                   <HeaderLogo src={Logotype} />
                </HeaderBrand>

                <HeaderList>
                  
                    <HeaderListItem>
                      <HeaderLinkItem href="#about">Home</HeaderLinkItem>
                    </HeaderListItem>

                    <HeaderListItem>
                      <HeaderLinkItem href="#">Cursos</HeaderLinkItem>
                    </HeaderListItem>

                    <HeaderListItem>
                      <HeaderLinkItem href="#">Sobre nós</HeaderLinkItem>
                    </HeaderListItem>

                    <HeaderListItem>
                      <HeaderLinkItem href="#">Sobre nós</HeaderLinkItem>
                    </HeaderListItem>

                </HeaderList>

                <div style={{display: "flex", gap: "10px", alignItems: "center"}}>

                    <ButtonPrimary size="250px">Entrar</ButtonPrimary>
                    <ButtonPrimary size="250px">Registrar</ButtonPrimary>

                </div>

            </FlexItems>
        </Container>
    </StyledHeader>
    
  )
}

export default Header;