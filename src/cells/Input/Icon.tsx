import React from 'react';
import visa from './visa.svg';
import mastercard from './mastercard.svg';
import amex from './amex.svg';

/**
 * getIcon Function is a switch to select an icon
 * @param {string} icon Select an icon to be returned
 */
export const getIcon = (icon: string | null) => {
  switch (icon) {
    case 'visa':
      return (
        <span>
          <img
            src={visa}
            alt='visa'
            style={{
              height: '1rem',
              width: '1rem',
              verticalAlign: 'bottom',
            }}
          />
        </span>
      );
    case 'mastercard':
      return (
        <span>
          <img
            src={mastercard}
            alt='master_card'
            style={{
              height: '1rem',
              width: '1rem',
              verticalAlign: 'bottom',
            }}
          />
        </span>
      );
    case 'american-express':
      return (
        <span>
          <img
            src={amex}
            alt='amex'
            style={{
              height: '1rem',
              width: '1rem',
              verticalAlign: 'bottom',
            }}
          />
        </span>
      );
    default:
      return icon;
  }
};

/** Icon component return SVG elements for Input type card */
interface IconInterface {
  /** Select an icon to be rendered */
  icon: string | null;
}

/**
 * Icon component return SVG elements for Input type card
 * @param {string} icon Select an icon to be rendered
 */

const Icon = ({ icon = null }: IconInterface) => getIcon(icon);

export default Icon;
