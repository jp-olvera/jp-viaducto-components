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
  Error,
  EyeClosed,
  Eye,
  Hourglass,
  Verified,
  Cancel,
} from 'react-ikonate';

export const getIcon = (
  icon: string,
  size: string = '18px',
  color: string = 'inherit',
  strokeWidth: string = '1px',
  className: string = '',
) => {
  switch (icon) {
    case 'card':
      return (
        <CreditCard
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'color':
      return (
        <Drop
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'upload':
      return (
        <Upload
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'date':
      return (
        <Calendar
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'search':
      return (
        <Search
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'data':
      return (
        <Cut
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'phone':
      return (
        <Phone
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'mail':
      return (
        <Envelope
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'time':
      return (
        <Stopwatch
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'grid':
      return (
        <Grid
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'warning':
      return (
        <ChatWarning
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'ok':
      return (
        <OkCircle
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'required':
      return (
        <Error
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'eye':
      return (
        <Eye
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'eye-closed':
      return (
        <EyeClosed
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'loading':
      return (
        <Hourglass
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'verified':
      return (
        <Verified
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
      );
    case 'cancel':
      return (
        <Cancel
          fontSize={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
        />
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
