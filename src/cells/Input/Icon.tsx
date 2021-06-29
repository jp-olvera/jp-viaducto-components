import React from 'react';
import {
  CreditCard,
  Drop,
  Upload,
  Calendar,
  Search,
  Cut,
  Phone,
  Envelope,
  Stopwatch,
  Grid,
  ChatWarning,
  OkCircle,
  EyeClosed,
  Eye,
  Hourglass,
  Verified,
  Cancel,
  Spam,
} from 'react-ikonate';
import visa from './visa.svg';
import mastercard from './mastercard.svg';
import amex from './amex.svg';

export const getIcon = (
  icon: string,
  size: string = '18px',
  color: string = 'inherit',
  strokeWidth: string = '1px',
  className: string = '',
  colorFill: string = '#fff',
) => {
  switch (icon) {
    case 'card':
      return (
        <CreditCard
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'color':
      return (
        <Drop
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'upload':
      return (
        <Upload
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'date':
      return (
        <Calendar
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'search':
      return (
        <Search
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'data':
      return (
        <Cut
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'phone':
      return (
        <Phone
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'mail':
      return (
        <Envelope
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'time':
      return (
        <Stopwatch
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'grid':
      return (
        <Grid
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'warning':
      return (
        <ChatWarning
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'ok':
      return (
        <OkCircle
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'required':
      return (
        <Spam
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'eye':
      return (
        <Eye
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'eye-closed':
      return (
        <EyeClosed
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'loading':
      return (
        <Hourglass
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'verified':
      return (
        <Verified
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
    case 'cancel':
      return (
        <Cancel
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          fill={colorFill}
        />
      );
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
