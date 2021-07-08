import React from 'react';
import visa from './visa.svg';
import mastercard from './mastercard.svg';
import amex from './amex.svg';

export const getIcon = (icon: string) => {
  switch (icon) {
    case 'visa':
      return (
        <span>
          <img
            src={visa}
            alt='visa'
            style={{ height: '2rem', width: '1.5rem', verticalAlign: 'bottom' }}
          />
        </span>
      );
    case 'mastercard':
      return (
        <span>
          <img
            src={mastercard}
            alt='master_card'
            style={{ height: '2rem', width: '1.5rem', verticalAlign: 'bottom' }}
          />
        </span>
      );
    case 'american-express':
      return (
        <span>
          <img
            src={amex}
            alt='amex'
            style={{ height: '2rem', width: '1.5rem', verticalAlign: 'bottom' }}
          />
        </span>
      );
    default:
      return null;
  }
};

interface IconInterface {
  icon: string;
}

const Icon = ({ icon }: IconInterface) => getIcon(icon);

export default Icon;
