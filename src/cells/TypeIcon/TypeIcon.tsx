import React from 'react';

import {
  Checkbox, Error, FolderWarning, Help,
} from 'react-ikonate';

const TypeIcon = ({ type, ...rest }: any) => {
  switch (type) {
    case 'success':
      return <Checkbox {...rest} />;
    case 'warning':
      return <FolderWarning {...rest} />;
    case 'danger':
      return <Error {...rest} />;
    case 'info':
    default:
      return <Help {...rest} />;
  }
};

export default TypeIcon;
