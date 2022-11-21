import React from 'react'
import BackgroundAnimated from '../../../components/BackgroundAnimated/Index';
import { Col, Container, Row, StyledSection } from '../../../_assets/styles/GlobalGrid';
import { ButtonPrimary, CenteredComponent, CenteredItem, FormGroup, StyledForm, StyledInput, StyledLabel, TypographyForm, TypographyLink } from './Styled';
import Logotype from '../../../_assets/img/LOGOTYPE.svg'



const Login = () => {
  return (
    <>
      <CenteredItem>
        <StyledSection>
          <Container>
                <Row>
                    <Col>
                        <StyledForm>

                            <FormGroup>

                              <CenteredComponent>
                                <img src={Logotype} alt="Logotipo" />
                              </CenteredComponent>

                              <TypographyForm>
                                Entre para realizar o login ou <TypographyLink href="#">registre-se aqui.</TypographyLink>
                              </TypographyForm>
                            </FormGroup>

                            <FormGroup>
                                <StyledInput placeholder='E-mail' name="email" type="email" />
                            </FormGroup>

                            <FormGroup>
                                <TypographyLink align="right">Esqueceu a senha?</TypographyLink>
                                <StyledInput placeholder='********' name="email" type="password" />
                            </FormGroup>

                            <FormGroup>
                               <CenteredComponent>
                                  <ButtonPrimary>Entrar</ButtonPrimary>
                               </CenteredComponent>
                            </FormGroup>

                        </StyledForm>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
      </CenteredItem>
      
      <BackgroundAnimated />

    </>
  
  )
}

export default Login;