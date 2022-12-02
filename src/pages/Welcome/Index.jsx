import React from 'react'
import Header from '../../components/Header/Index';
import { Col, Container, Row, StyledSection } from '../../_assets/styles/GlobalGrid';
import { AccordionConjuntTitleAndIcon, AccordionContent, AccordionItem, AccordionTitle,
  AccordionWrapper, BackgroundBanner, BackgroundFound, BackgroundFoundAbout, BoxCourses,
  DescriptionBoxAbout, DescriptionCourses, FlexBoxCourses, FlexCenteredItems, FlexLg, GroupBenefices,
  IconAnimatedApp, ListBenefices, ProgramDescriptionBox, TitleBenefices, TitleBoxAbout,
  TitleCourses, TitleCoursesLight, TitleDescriptionWelcome, TitleProgram, TitleWelcome }
 from './Styled';

import ProgramingImage from '../../_assets/img/programing-home.svg'
import JavaIcon from '../../_assets/img/java.svg'
import DockerIcon from '../../_assets/img/docker.svg'
import ReactIcon from '../../_assets/img/reactjs.svg'
import AwsIcon from '../../_assets/img/aws.svg'
import BackgroundGeometric from '../../_assets/img/background-geometric.svg'
import { BiCodeCurly } from 'react-icons/bi'

const Accordion = ({ title, children, icon }) => {

  const [isOpen, setOpen] = React.useState(false);

  return (
      <AccordionWrapper>

          <AccordionTitle className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
              <AccordionConjuntTitleAndIcon>{icon} {title}</AccordionConjuntTitleAndIcon>
          </AccordionTitle>

          <AccordionItem className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
              <AccordionContent>{children}</AccordionContent>
          </AccordionItem>

      </AccordionWrapper>
  );
};


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

          <section style={{marginTop: "11rem"}} id="banner">
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

          <StyledSection>
              <Container>
                  <Row>
                      <Col top="250px">
                          <div>
                              <TitleProgram>Lorem ipsum dolor sit, lorem ipsum.</TitleProgram>
                              <div style={{display: "flex", gap: "15px"}}>

                                  <ProgramDescriptionBox>
                                    <BiCodeCurly /> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, distinctio!
                                  </ProgramDescriptionBox>
                                  <ProgramDescriptionBox>
                                    <BiCodeCurly /> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, distinctio!
                                  </ProgramDescriptionBox>
                                  <ProgramDescriptionBox>
                                    <BiCodeCurly /> <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, distinctio!
                                  </ProgramDescriptionBox>
                              </div>
                          </div>
                          <div style={{marginTop: "80px", marginLeft: "auto", marginRight: "auto"}}>
                            <FlexLg>
                              <Accordion title="Lorem Ipsum dolor sit amet, consectur.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio
                              </Accordion>

                              <Accordion title="Lorem Ipsum dolor sit amet, consectur.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio
                              </Accordion>
                            </FlexLg>
                            <FlexLg>
                              <Accordion title="Lorem Ipsum dolor sit amet, consectur.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio
                              </Accordion>

                              <Accordion title="Lorem Ipsum dolor sit amet, consectur.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio
                              </Accordion>
                            </FlexLg>

                            <FlexLg>
                              <Accordion title="Lorem Ipsum dolor sit amet, consectur.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio
                              </Accordion>

                              <Accordion title="Lorem Ipsum dolor sit amet, consectur.">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio,
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita dolores ipsum nesciunt. Maxime, dolor minus dolore praesentium qui optio
                              </Accordion>
                            </FlexLg>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </StyledSection>

          <StyledSection id="blog">
              <Container>
                  <Row>
                      <Col top="10rem">
                        <div>
                          <TitleProgram>BLOG</TitleProgram>
                        </div>
                      </Col>
                  </Row>
              </Container>
          </StyledSection>


          <StyledSection>
              <Container>
                  <Row>
                      <Col>aaaaaaa</Col>
                  </Row>
              </Container>
          </StyledSection>

          <StyledSection>
              <Container>
                  <Row>
                      <Col>aaaaaaa</Col>
                  </Row>
              </Container>
          </StyledSection>
      </main>
    </>
  )
}

export default Welcome;