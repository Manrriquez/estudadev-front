import React from 'react'
import Header from '../../components/Header/Index';
import { Col, Container, Row, StyledSection } from '../../_assets/styles/GlobalGrid';
import { BackgroundBanner, BackgroundFound, BoxCourses, BoxShadow, FlexBoxCourses, FlexCenteredItems, GroupBenefices, IconAnimatedApp, ListBenefices, TitleBenefices, TitleCourses, TitleDescriptionWelcome, TitleWelcome } from './Styled';
import ProgramingImage from '../../_assets/img/programing-home.svg'
import JavaIcon from '../../_assets/img/java.svg'
import DockerIcon from '../../_assets/img/docker.svg'
import ReactIcon from '../../_assets/img/reactjs.svg'
import AwsIcon from '../../_assets/img/aws.svg'


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
                            <br />
                            <TitleDescriptionWelcome>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptates! Ex ipsam ducimus est debitis? Perferendis amet provident quis voluptatem, iste aperiam sint aliquam illo?</TitleDescriptionWelcome>
                          </div>
                      </Col>
                      <Col top="150px">
                        <BackgroundFound url={ProgramingImage}>
                            <IconAnimatedApp left="35px" top="115px" src={JavaIcon} />
                            <IconAnimatedApp src={DockerIcon} />
                            <IconAnimatedApp left="180px" src={ReactIcon} />
                            <IconAnimatedApp left="255px" top="65px" src={AwsIcon} />
                        </BackgroundFound>
                      </Col>
                  </Row>
              </Container>
          </StyledSection>

          <section>
              <BackgroundBanner>
                <Container>
                    <Row>
                        <Col>
                          <div>
                              <TitleCourses>
                                  Lorem ipsum, dolor sit amet consectetur adipisicing <br />
                                  <span style={{fontWeight: 500}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                              </TitleCourses>
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <FlexBoxCourses>
                                <FlexBoxCourses direction="column">
                                    <BoxCourses>aaaa</BoxCourses>
                                    <BoxCourses>aaaa</BoxCourses>
                                </FlexBoxCourses>
                                <FlexBoxCourses direction="column">
                                    <BoxCourses>aaaa</BoxCourses>
                                    <BoxCourses>aaaa</BoxCourses>
                                </FlexBoxCourses>
                            </FlexBoxCourses>
                          </div>
                        </Col>
                    </Row>
                </Container>
              </BackgroundBanner>
          </section>

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