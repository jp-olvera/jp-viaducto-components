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
} from 'react-ikonate';

export const getIcon = (icon: string, size: string = '18px') => {
  switch (icon) {
    case 'card':
      return <CreditCard fontSize={size} />;
    case 'color':
      return <Drop fontSize={size} />;
    case 'upload':
      return <Upload fontSize={size} />;
    case 'date':
      return <Calendar fontSize={size} />;
    case 'search':
      return <Search fontSize={size} />;
    case 'data':
      return <Cut fontSize={size} />;
    case 'phone':
      return <Phone fontSize={size} />;
    case 'mail':
      return <Envelope fontSize={size} />;
    case 'time':
      return <Stopwatch fontSize={size} />;
    case 'grid':
      return <Grid fontSize={size} />;
    case 'warning':
      return <ChatWarning fontSize={size} />;
    case 'ok':
      return <OkCircle fontSize={size} />;
    case 'required':
      return <Error fontSize={size} />;
    case 'eye':
      return <Eye fontSize={size} />;
    case 'eye-closed':
      return <EyeClosed fontSize={size} />;
    default:
      return null;
  }
};

interface IconInterface {
  icon: string;
}

const Icon = ({ icon }: IconInterface) => {
  return getIcon(icon);
};

export default Icon;
