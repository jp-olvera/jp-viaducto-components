import React from 'react';

const PrefixInput = ({ darkDecoration, children }) => {
  return (
    <div
      className={`ballena-prefix-input ${darkDecoration ? 'dark-decoration' : ''}`}
    >
      {children}
    </div>
  );
};

PrefixInput.id = 'PrefixInput';

export default PrefixInput;
