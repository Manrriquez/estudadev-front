import React from 'react'
import Header from '../../components/Header/Index';
import { Col, Container, Row, StyledSection } from '../../_assets/styles/GlobalGrid';
import { BackgroundFound, BoxShadow, FlexCenteredItems, IconAnimatedApp, TitleDescriptionWelcome, TitleWelcome } from './Styled';
import ProgramingImage from '../../_assets/img/programing-home.svg'
import JavaIcon from '../../_assets/img/java.svg'


const Welcome = () => {
  return (
    <>
      <Header /> 
      <main>
          <StyledSection>
              <Container>
                  <Row>
                      <Col top="150px">
                          <div>
                            <TitleWelcome>
                              Lorem ipsum dolor sit amet accusamus quaerat iusto accusantium.
                            </TitleWelcome>
                            <TitleDescriptionWelcome>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo?</TitleDescriptionWelcome>
                          </div>
                      </Col>
                      <Col top="150px">
                        <BackgroundFound url={ProgramingImage}>
                            <IconAnimatedApp src={JavaIcon} />
                        </BackgroundFound>
                      </Col>
                  </Row>
              </Container>
          </StyledSection>

          <StyledSection>
              <Container>
                  <Row>
                      <Col top="150px">
                        <FlexCenteredItems>
                            <BoxShadow>aaaaaaaaaaaaaa</BoxShadow>
                            <BoxShadow>aaaaaaaaaaaaaa</BoxShadow>
                            <BoxShadow>aaaaaaaaaaaaaa</BoxShadow>
                        </FlexCenteredItems>
                      </Col>
                  </Row>
              </Container>
          </StyledSection>

          <StyledSection>
              <Container>
                  <Row>
                      <Col top="100px">
                          aaaaaaaaaaaaaa
                      </Col>
                  </Row>
              </Container>
          </StyledSection>
      </main>
    </>
  )
}

export default Welcome;