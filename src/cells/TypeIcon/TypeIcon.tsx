import React from 'react';

import {
  Checkbox, Error, FolderWarning, Help,
} from 'react-ikonate';

const TypeIcon = ({ type, ...rest }: any) => {
  switch (type) {
    case 'success':
      return <Checkbox {...rest} data-testid='checkbox' />;
    case 'warning':
      return <FolderWarning {...rest} data-testid='folderwarning' />;
    case 'danger':
      return <Error {...rest} data-testid='error' />;
    case 'info':
    default:
      return <Help {...rest} data-testid='help' />;
  }
};

export default TypeIcon;
