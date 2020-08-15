import React from 'react';
import { BlobContainer } from './elements';
import { ReactComponent as BlobSvg } from '../assets/blob.svg';

const Blob: React.FC = () => {
  return (
    <BlobContainer>
      <BlobSvg />
    </BlobContainer>
  );
};

export default Blob;
