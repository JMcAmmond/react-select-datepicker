import React, { useState, useMemo, useEffect, useCallback } from 'react';

export const useHashRouter = (routeObject: {
  [key: string]: () => JSX.Element;
}) => {
  const [route, setRoute] = useState<string>('');

  const routeResult = useMemo(() => {
    const routeComponent = routeObject[route.toLowerCase()];
    if (routeComponent) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return routeComponent();
    }
    return null;
  }, [route, routeObject]);

  const checkHash = useCallback(() => {
    if (window.location.hash === '' || window.location.hash === '#') {
      window.location.hash = '/';
    }
  }, []);

  useEffect(() => {
    const updateHash = () => {
      checkHash();
      setRoute(window.location.hash.substring(1).toLowerCase());
    };

    window.addEventListener('hashchange', updateHash, false);

    return () => window.removeEventListener('hashchange', updateHash, false);
  }, [checkHash]);

  useEffect(() => {
    checkHash();
    setRoute(window.location.hash.substring(1).toLowerCase());
  }, [checkHash]);

  return routeResult;
};

interface IHashAnchor {
  href: string;
}

export const HashAnchor: React.FC<IHashAnchor> = ({ href, children }) => {
  return <a href={`#${href}`}>{children}</a>;
};
