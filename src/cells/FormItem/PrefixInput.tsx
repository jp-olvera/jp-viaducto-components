import React from 'react';

const PrefixInput = ({ darkDecoration, children, ...rest }) => {
  return (
    <div {...rest} className={`frontera-prefix-input ${darkDecoration ? 'dark-decoration' : ''}`}>
      {children}
    </div>
  );
};

PrefixInput.id = 'PrefixInput';

export default PrefixInput;
