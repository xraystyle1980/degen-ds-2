import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface MyCodeComponentProps {
  code: string; // The actual code to display
  language: string; // Language for syntax highlighting (e.g., 'javascript', 'tsx')
  showLineNumbers?: boolean; // Optional: Show or hide line numbers
}

const MyCodeComponent: React.FC<MyCodeComponentProps> = ({
  code,
  language,
  showLineNumbers = true, // Default to true
}) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      customStyle={{
        // height: 'auto',
        overflowY: 'hidden',
        borderRadius: '16px',
        // boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
        fontSize: '0.75rem',
        // margin: '0px 0.75rem',
        padding: '1rem',
      }}
    />
  );
};

export default MyCodeComponent;




{/* <CodeBlock
  {...resultSnippet}
  {...{ showLineNumbers, wrapLines }}
  theme={atomOneLight}
  customStyle={{
    height: '250px',
    overflowY: 'scroll',
    borderRadius: '5px',
    boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
    fontSize: '0.75rem',
    margin: '0px 0.75rem',
  }}
/> */}