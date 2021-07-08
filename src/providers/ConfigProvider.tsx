import React, { createContext, useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ConfigProps } from 'ballena-types';

import config from '../utils/config';
import { Toaster } from '..';

interface ConfigProviderInterface {
  children: any;
}

interface ConfigContextInterface {
  configuration: ConfigProps;
  updateConfig?: Function;
}

export const ConfigContext = createContext<ConfigContextInterface>({
  configuration: config,
});

const ConfigProvider = ({ children }: ConfigProviderInterface) => {
  const [configuration, setConfiguration] = useState(config);
  const updateConfig = (newConfig: ConfigProps) => {
    setConfiguration((oldConfig) => ({ ...oldConfig, ...newConfig }));
  };
  const placements = {
    'bottom-left': 'bottom-left',
    'bottom-center': 'bottom-center',
    'bottom-right': 'bottom-right',
    'top-left': 'top-left',
    'top-center': 'top-center',
    'top-right': 'top-right',
  };

  return (
    <ConfigContext.Provider value={{ configuration, updateConfig }}>
      <ToastProvider
        components={{ Toast: Toaster }}
        placement={placements[configuration.toasterPlacement]}
      >
        {children}
      </ToastProvider>
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
