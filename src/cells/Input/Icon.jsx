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
} from 'react-ikonate';

export const getIcon = (icon) => {
  switch (icon) {
    case 'card':
      return <CreditCard />;
    case 'color':
      return <Drop />
    case 'upload':
      return <Upload />
    case 'date':
      return <Calendar />
    case 'search':
      return <Search />
    case 'data':
      return <Cut />
    case 'phone':
      return <Phone />
    case 'mail':
      return <Envelope />
    case 'time':
      return <Stopwatch />
    case 'grid':
      return <Grid />
    default:
      return null;
  }
}


const Icon = ({ icon }) => {
  return (
    getIcon(icon)
  );
}

export default Icon;