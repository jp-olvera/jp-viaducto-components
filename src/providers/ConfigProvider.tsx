import React, { createContext, useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import config from '../utils/config';
import { Toaster } from '..';

interface ConfigProviderInterface {
  children: any;
}

interface ConfigContextInterface {
  configuration: any;
  updateConfig: Function;
}

export const ConfigContext = createContext<ConfigContextInterface>({
  configuration: {},
  updateConfig: Function,
});

const ConfigProvider = ({ children }: ConfigProviderInterface) => {
  const [configuration, setConfiguration] = useState(config);
  const updateConfig = (newConfig: any) => {
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
        placement={placements[configuration.toasterPlacement || 'top-right']}
      >
        {children}
      </ToastProvider>
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
