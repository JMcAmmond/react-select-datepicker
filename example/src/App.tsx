import React from 'react';
import Intro from './common/Intro';
import Simple from './pages/Simple';
import Labels from './pages/Labels';
import DateRange from './pages/DateRange';
import Order from './pages/Order';
import Errors from './pages/Errors';
import { useHashRouter, HashAnchor } from './hooks/useHashRouter';
import { Navigation, Container, Content, Sticky } from './common/elements';

const routes = {
  '/': () => <Simple />,
  '/labels': () => <Labels />,
  '/date-range': () => <DateRange />,
  '/format': () => <Order />,
  '/errors': () => <Errors />,
};

const App = () => {
  const route = useHashRouter(routes);

  return (
    <>
      <Intro />
      <Container>
        <Navigation>
          <Sticky>
            <HashAnchor href="/">Home</HashAnchor>
            <HashAnchor href="/labels">Labels</HashAnchor>
            <HashAnchor href="/date-range">Date Range</HashAnchor>
            <HashAnchor href="/format">Date Format</HashAnchor>
            <HashAnchor href="/errors">Errors</HashAnchor>
          </Sticky>
        </Navigation>
        <Content>{route || <>Not Available</>}</Content>
      </Container>
    </>
  );
};

export default App;
