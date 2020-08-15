import React from 'react';
import { Container, IntroContainer, HeadLines } from './elements';
import Blob from './Blob';

const Intro: React.FC = () => {
  return (
    <IntroContainer>
      <Container>
        <Blob />
        <HeadLines>
          <h1>React-Select-Datepicker</h1>
          <p>A simple and reusable dropdown datepicker component for React</p>
        </HeadLines>
      </Container>
    </IntroContainer>
  );
};

export default Intro;
