import React from 'react'
import BackgroundAnimated from '../../../components/BackgroundAnimated/Index';
import { Col, Container, Row, StyledSection } from '../../../_assets/styles/GlobalGrid';
import { ButtonPrimary, CenteredComponent, CenteredItem, FormGroup, StyledForm, StyledInput, StyledLabel, TypographyForm, TypographyLink } from './Styled';
import Logotype from '../../../_assets/img/LOGOTYPE.svg'
const Register = () => {
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
                                 Entre e registre-se ou realize o <TypographyLink href="/login">login aqui.</TypographyLink>
                                </TypographyForm>
                            </FormGroup>

                            <FormGroup>
                                <StyledInput placeholder='Nome' name="name" type="text" />
                            </FormGroup>

                            <FormGroup>
                                <StyledInput placeholder='Telefone' name="tel" type="tel" />
                            </FormGroup>

                            <FormGroup>
                                <StyledInput placeholder='E-mail' name="email" type="email" />
                            </FormGroup>

                            <FormGroup>
                                <StyledInput placeholder='********' name="email" type="password" />
                            </FormGroup>

                            <FormGroup>
                                <CenteredComponent>
                                    <ButtonPrimary>Registrar</ButtonPrimary>
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

export default Register;