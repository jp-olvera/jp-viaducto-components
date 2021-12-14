import React from 'react';

const SuffixInput = ({ darkDecoration, children, ...rest }) => {
  return (
    <div {...rest} className={`ballena-suffix-input ${darkDecoration && 'dark-decoration'}`}>
      {children}
    </div>
  );
};

SuffixInput.id = 'SuffixInput';

export default SuffixInput;
