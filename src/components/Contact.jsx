import React from "react";

import styled from "styled-components";

import { Element } from "react-scroll";
import Title from "./Title";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";


const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem);
`;

const Contact = () => {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Contact"} />
        </Container>
        <Container>
          <ContactForm />
        </Container>
      </StyledSection>
    </Element>
  );
};


export default Contact;
