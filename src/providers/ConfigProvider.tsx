import React, { createContext, useState } from 'react';
// import { ToastProvider } from 'react-toast-notifications';
import { ConfigProps } from 'frontera-types';

import config from '../utils/config';
// import { Toaster } from '../dialog';

export interface ConfigProvider {
  children: any;
}

export interface ConfigContext {
  configuration: ConfigProps;
  updateConfig: Function;
}

export const ConfigContext = createContext<ConfigContext>({
  configuration: config,
  updateConfig: () => {},
});

const ConfigProvider = ({ children }: ConfigProvider) => {
  const [configuration, setConfiguration] = useState(config);
  const updateConfig = (newConfig: ConfigProps) => {
    setConfiguration((oldConfig: ConfigProps) => ({
      ...oldConfig,
      ...newConfig,
    }));
  };
  // const placements = {
  //   'bottom-left': 'bottom-left',
  //   'bottom-center': 'bottom-center',
  //   'bottom-right': 'bottom-right',
  //   'top-left': 'top-left',
  //   'top-center': 'top-center',
  //   'top-right': 'top-right',
  // };

  return (
    <ConfigContext.Provider value={{ configuration, updateConfig }}>
      {/* <ToastProvider
        components={{ Toast: Toaster }}
        placement={placements[configuration.toasterPlacement]}
      > */}
      {children}
      {/* </ToastProvider> */}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
