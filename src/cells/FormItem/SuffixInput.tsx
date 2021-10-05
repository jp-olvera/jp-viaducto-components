import React from 'react';

const SuffixInput = ({ darkDecoration, children }) => {
  return (
    <div
      className={`ballena-suffix-input ${darkDecoration ? 'dark-decoration' : ''}`}
    >
      {children}
    </div>
  );
};

SuffixInput.id = 'SuffixInput';

export default SuffixInput;
