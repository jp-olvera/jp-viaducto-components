import React from 'react';
import { ConfigProvider } from '../../../providers';
import { SelectItem, Option } from '..';
import { Grid, Row, Paragraph, Container } from '../..';
import { CaretDown } from 'phosphor-react';

const config: any = {
  title: 'Ballena/Cells/FormFields/SelectItem',
  component: SelectItem,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    border: {
      options: ['outside', 'overlap', 'bottom', 'none', 'default'],
      control: {
        type: 'select',
      },
    },
    isValid: {
      options: [null, false, true],
      control: {
        type: 'select',
      },
    },
    inputSize: {
      control: 'select',
      options: ['xsmall', 'small', 'default', 'large'],
    },
    borderColor: {
      control: 'color',
    },
  },
};

export default config;

const Template2 = ({ ...args }: any) => {
  return (
    <ConfigProvider>
      <Grid expanded>
        <Row style={{ alignItems: 'center' }}>
          <SelectItem
            {...args}
            label='Nombres'
            id='nombres'
            placeholder='Seleciona una opcion'
            padding='3rem 0 0 0'
            suffix={<CaretDown size={24} />}
            value='Juan'
            onChange={(ev) => {
              console.log(ev);
            }}
          >
            <Option value='Juan'>
              <Paragraph>Juan</Paragraph>
              <Paragraph color='muttedGray'> - email@gmail.com</Paragraph>
            </Option>
            <Option value='Jorge'>
              <Paragraph>Jorge</Paragraph>
            </Option>
            <Option value='Rojas'>
              <Paragraph>Rojas</Paragraph>
            </Option>
            <hr />
            <Container horizontal='md'>
              <Paragraph>Emails:</Paragraph>
            </Container>
            <Option value='Correo'>
              <Paragraph>Correo</Paragraph>
            </Option>
          </SelectItem>
          <SelectItem
            {...args}
            label='Apellidos'
            id='apellidos'
            placeholder='Seleciona una opcion'
            padding='3rem 0 0 0'
          >
            <Option value='Juan'>
              <Paragraph>Juan</Paragraph>
            </Option>
            <Option value='Jorge'>
              <Paragraph>Jorge</Paragraph>
            </Option>
            <Option value='Rojas'>
              <Paragraph>Rojas</Paragraph>
            </Option>
            <hr />
            <Container horizontal='md'>
              <Paragraph>Emails:</Paragraph>
            </Container>
            <Option value='Correo'>
              <Paragraph>Correo</Paragraph>
            </Option>
          </SelectItem>
          <SelectItem
            {...args}
            label='Apellidos'
            id='apellidos'
            placeholder='Seleciona una opcion'
            padding='3rem 0 0 0'
            suffix='v'
          >
            <Option value='Juan'>
              <Paragraph>Juan</Paragraph>
            </Option>
            <Option value='Jorge'>
              <Paragraph>Jorge</Paragraph>
            </Option>
            <Option value='Rojas'>
              <Paragraph>Rojas</Paragraph>
            </Option>
            <hr />
            <Container horizontal='md'>
              <Paragraph>Emails:</Paragraph>
            </Container>
            <Option value='Correo'>
              <Paragraph>Correo</Paragraph>
            </Option>
          </SelectItem>
        </Row>
      </Grid>
    </ConfigProvider>
  );
};

export const CustomSelect = Template2.bind({});

Template2.args = {
  border: 'default',
  borderColor: '#d9d9d9',
  family: '',
  inputSize: 'default',
  isValid: null,
  darkDecoration: false,
};
