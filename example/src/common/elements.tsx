import styled, { keyframes } from 'styled-components';

export const ExampleWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto 5rem;
`;

export const ExampleComponent = styled.div`
  padding: 1rem;
  background-color: #293241;
  min-height: 120px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;

  > * {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const ExampleCode = styled.div`
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  overflow: hidden;
`;

export const ExampleHeader = styled.h2`
  font-size: 1.125rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #82e7d9;
  font-weight: 400;
  margin: 0 0 1rem 0;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  position: relative;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  justify-content: center;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px 1rem;
    display: inline-block;
    margin: 0 3px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      color: #82e7d9;
      border-color: #82e7d9;
    }
  }

  @media (min-width: 900px) {
    flex-direction: column;
    width: 180px;
    justify-content: start;

    a {
      display: block;
      width: 100%;
      margin: 0;
      border: none;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const IntroContainer = styled.div`
  padding: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 900px) {
    margin-bottom: 5rem;
  }
`;

export const HeadLines = styled.div`
  position: relative;
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const BlobContainer = styled.div`
  position: absolute;
  transform: scale(2.85);
  top: -350px;
  color: #293241;

  svg {
    display: block;
    margin: auto;
    height: 16rem;
    animation: ${spin} 50s linear infinite;
  }
`;

export const PageHeader = styled.h2`
  margin: 0 0 2rem;
`;
