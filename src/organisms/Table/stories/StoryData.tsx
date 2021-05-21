import React from 'react';

export const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

export const dummyData = [
  {
    salary: 1881.2,
    percent: 51,
    firstName: 'Juan',
    lastName: 'Olvera',
    id: 'OAUTH|FEWFEW',
  },
  {
    salary: 802.2,
    percent: 52,
    firstName: 'Jorge',
    lastName: 'Rojas',
    id: 'OAUTH|sdfdgtr',
  },
  {
    salary: 803.2,
    percent: 53,
    firstName: 'Lalo',
    lastName: 'Mora',
    id: 'OAUTH|661615',
  },
  {
    salary: 43.2,
    percent: 54,
    firstName: 'José',
    lastName: 'José',
    id: 'OAUTH|661615',
  },
  {
    salary: 84.2,
    percent: 55,
    firstName: 'Ana',
    lastName: 'Bárbara',
    id: 'OAUTH|66161sdf',
  },
  {
    salary: 80.2,
    percent: 56,
    firstName: 'Leo',
    lastName: 'Dan',
    id: 'OAUTH|661615sd',
  },
  {
    salary: 834.2,
    percent: 85,
    firstName: 'Leo',
    lastName: 'Arcos',
    id: 'OAUTH|661sdfs615',
  },
  {
    salary: 30.2,
    percent: 100,
    firstName: 'Omar',
    lastName: 'Fernández',
    id: 'OAUTH|6616aa15',
  },
  {
    salary: 60.2,
    percent: 1,
    firstName: 'Chalino',
    lastName: 'Sánchez',
    id: 'OAUTH|a125615',
  },
  {
    salary: 870.2,
    percent: 0,
    firstName: 'Jennifer',
    lastName: 'Rivera',
    id: 'OAUTH|s1s25615',
  },
  {
    salary: 888.2,
    percent: 50,
    firstName: 'Lola',
    lastName: 'Beltrán',
    id: 'OAUTH|c125615',
  },
  {
    salary: 67.2,
    percent: 5,
    firstName: 'Benito',
    lastName: 'Juárez',
    id: 'OAUTH|v125615',
  },
  {
    salary: 88.2,
    percent: 550,
    firstName: 'Ricardo',
    lastName: 'Anaya',
    id: 'OAUTH|b125615',
  },
  {
    salary: 996.2,
    percent: 3,
    firstName: 'Mariana',
    lastName: 'Rodríguez',
    id: 'OAUTH|n125615',
  },
  {
    salary: 80.2,
    percent: 50,
    firstName: 'Bronco',
    lastName: 'El gigante de América',
    id: 'OAUTH|h125615',
  },
];

export const dummyColumns = [
  {
    Header: 'First name',
    accessor: 'firstName',
    Filter: DefaultColumnFilter,
    prefix: '>',
    sufix: null,
  },
  {
    Header: 'Last name',
    accessor: 'lastName',
    Filter: DefaultColumnFilter,
    prefix: null,
    sufix: null,
  },
  {
    Header: 'Salary',
    accessor: 'salary',
    Filter: DefaultColumnFilter,
    prefix: '$',
    sufix: null,
  },
  {
    Header: 'Percent',
    accessor: 'percent',
    Filter: DefaultColumnFilter,
    prefix: null,
    sufix: '%',
  },
];
