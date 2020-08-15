import {
  ExampleWrapper,
  ExampleHeader,
  ExampleComponent,
  ExampleCode,
} from '../common/elements';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ICodeTemplate {
  title?: string;
  exampleComponent: JSX.Element;
  code: string;
}

const CodeTemplate: React.FC<ICodeTemplate> = ({
  title,
  exampleComponent,
  code,
}) => {
  return (
    <ExampleWrapper>
      {title && <ExampleHeader>{title}</ExampleHeader>}
      <ExampleComponent>{exampleComponent}</ExampleComponent>
      <ExampleCode>
        <SyntaxHighlighter language="typescript" style={rainbow}>
          {code}
        </SyntaxHighlighter>
      </ExampleCode>
    </ExampleWrapper>
  );
};

export default CodeTemplate;
