import React from 'react'
import Header from '../../components/Header/Index';
import { Col, Container, Row, StyledSection } from '../../_assets/styles/GlobalGrid';
import { BackgroundBanner, BackgroundFound, BackgroundFoundAbout, BoxCourses, DescriptionBoxAbout, DescriptionCourses, FlexBoxCourses, FlexCenteredItems, GroupBenefices, IconAnimatedApp, ListBenefices, TitleBenefices, TitleBoxAbout, TitleCourses, TitleCoursesLight, TitleDescriptionWelcome, TitleWelcome } from './Styled';
import ProgramingImage from '../../_assets/img/programing-home.svg'
import JavaIcon from '../../_assets/img/java.svg'
import DockerIcon from '../../_assets/img/docker.svg'
import ReactIcon from '../../_assets/img/reactjs.svg'
import AwsIcon from '../../_assets/img/aws.svg'
import BackgroundGeometric from '../../_assets/img/background-geometric.svg'
import { BiCodeCurly } from 'react-icons/bi'




const Welcome = () => {
  return (
    <>
      <Header /> 
      <main>
          <StyledSection id="home">
              <Container>
                  <Row align="center">
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

          <StyledSection id="about">
              <Container>
                  <Row>
                      <Col top="200px">
                        <FlexBoxCourses>
                          <BackgroundFoundAbout>
                            <TitleBoxAbout>Lorem ipsum dolor sit amet.</TitleBoxAbout>
                            <DescriptionBoxAbout>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad dolore aut quibusdam maxime explicabo,
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad dolore aut quibusdam maxime explicabo.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad dolore aut quibusdam maxime explicabo.
                            </DescriptionBoxAbout>
                          </BackgroundFoundAbout>

                          <BackgroundFoundAbout>
                            <TitleBoxAbout>Lorem ipsum dolor sit amet.</TitleBoxAbout>
                              <DescriptionBoxAbout>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad dolore aut quibusdam maxime explicabo,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad dolore aut quibusdam maxime explicabo,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad dolore aut quibusdam maxime explicabo.
                              </DescriptionBoxAbout>
                          </BackgroundFoundAbout>
                        </FlexBoxCourses>
                      </Col>
                     
                  </Row>
              </Container>
          </StyledSection>

          <section style={{marginTop: "15rem"}} id="banner">
              <BackgroundBanner image={BackgroundGeometric}>
                <Container>
                    <Row>
                        <Col>
                          <div>
                              <TitleCourses>
                                  Lorem ipsum, dolor sit amet consectetur<br />
                                  <TitleCoursesLight>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</TitleCoursesLight>
                              </TitleCourses>
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <FlexBoxCourses>
                              
                                <FlexBoxCourses direction="column">

                                    <BoxCourses bottom="15px">
                                      <DescriptionCourses>
                                        <BiCodeCurly />
                                        UI/UX
                                      </DescriptionCourses>
                                    </BoxCourses>

                                    <BoxCourses top="15px">
                                      <DescriptionCourses>
                                        <BiCodeCurly />
                                        BACKEND
                                      </DescriptionCourses>
                                    </BoxCourses>

                                </FlexBoxCourses>

                                <FlexBoxCourses bottom="52px" direction="column">

                                    <BoxCourses bottom="15px">
                                      <DescriptionCourses>
                                        <BiCodeCurly />
                                        FRONTEND
                                      </DescriptionCourses>
                                    </BoxCourses>

                                    <BoxCourses top="15px">
                                      <DescriptionCourses>
                                        <BiCodeCurly />
                                        DEVOPS
                                      </DescriptionCourses>
                                    </BoxCourses>

                                </FlexBoxCourses>
                            </FlexBoxCourses>
                          </div>
                        </Col>
                    </Row>
                </Container>
              </BackgroundBanner>
          </section>
      </main>
    </>
  )
}

export default Welcome;