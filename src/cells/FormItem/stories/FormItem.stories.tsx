import React, { useRef, useState } from 'react';
import { ConfigProvider } from '../../../providers';
import { FormItem } from '..';
import { Grid, Row, Column, Button } from '../../';
import { Popover } from '../../../dialog';
import { Horse, User, Cube, CaretDown } from 'phosphor-react';

const config: any = {
  title: 'FronteraUI/Controls/FormItem',
  component: FormItem,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    border: {
      description: 'Set the border for the input',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['outside', 'overlap', 'bottom', 'none', 'default'],
      control: {
        type: 'select',
      },
    },
    isValid: {
      description: 'Indicates if thje input has errors or is valid',
      type: { summary: 'boolean | null', required: false },
      table: {
        defaultValue: { summary: 'null' },
      },
      options: [null, false, true],
      control: {
        type: 'select',
      },
    },
    inputSize: {
      description: 'Set the size (height) of the input',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      control: 'select',
      options: ['xsmall', 'small', 'default', 'large'],
    },
    borderColor: {
      description: 'Set the border color (if the border is defined)',
      type: { summary: 'String', required: false },
      table: {
        defaultValue: { summary: null },
      },
      control: 'color',
    },
  },
};

export default config;

const Template = ({ ...args }: any) => (
  <ConfigProvider>
    <Grid expanded>
      <Row style={{ alignItems: 'center' }}>
        <Column>
          <FormItem {...args} prefix={<User color='#3f373c' size={16} />}>
            <input id='first-name' name='first-name' required />
            <label htmlFor='first-name'>First name:</label>
          </FormItem>
        </Column>
      </Row>
      <Row style={{ alignItems: 'center' }}>
        <Column>
          <FormItem
            {...args}
            prefix={
              <div style={{ height: '100%', alignItems: 'center', display: 'flex' }}>@troyo</div>
            }
            suffix={
              <div style={{ height: '100%', alignItems: 'center', display: 'flex' }}>@troyo</div>
            }
          >
            <input
              id='empresarial-email'
              name='empresarial-email'
              placeholder='example.com'
              required
            />
            <label htmlFor='empresarial-email'>Empresarial email:</label>
          </FormItem>
        </Column>
      </Row>
      <Row style={{ alignItems: 'center' }}>
        <Column>
          <FormItem
            {...args}
            prefix={<User color='#3f373c' size={16} />}
            suffix={<Cube color='#3f373c' size={16} />}
          >
            <input id='nickname' name='nickname' disabled />
            <label htmlFor='nickname'>Nickname:</label>
          </FormItem>
        </Column>
      </Row>
      <Row>
        <Column xs={12} md={6}>
          <FormItem {...args} suffix={<Horse color='#3f373c' size={16} />}>
            <input placeholder='last-name' id='last-name' name='last-name' />
            <label htmlFor='last-name'>Last name:</label>
          </FormItem>
        </Column>
        <Column xs={12} md={4}>
          <FormItem {...args}>
            <input id='username' name='username' />
            <label htmlFor='username'>Username:</label>
          </FormItem>
        </Column>
        <Column xs={12} md={4}>
          <FormItem {...args}>
            <input
              placeholder='disabled-input'
              id='disabled-input'
              name='disabled-input'
              disabled
              required
            />
            <label htmlFor='disabled-input'>Disabled input:</label>
          </FormItem>
        </Column>
        <Column xs={12} md={4}>
          <FormItem {...args}>
            <input id='readonly-input' name='readonly-input' readOnly value='Just for reading' />
            <label htmlFor='readonly-input'>readOnly input:</label>
          </FormItem>
        </Column>
      </Row>
      <Row>
        <Column xs={12} md={4}>
          <FormItem {...args}>
            <select id='select' required>
              <option> ----- </option>
              <option value='male'>male</option>
              <option value='female'>female</option>
              <option value='other'>other</option>
            </select>
            <label htmlFor='select'>select</label>
          </FormItem>
        </Column>
        <Column xs={12} md={4}>
          <Row>
            <FormItem {...args}>
              <select id='Country' required disabled>
                <option> </option>
                <option value='MX'>MX</option>
                <option value='USA'>USA</option>
              </select>
              <label htmlFor='Country'>Country</label>
            </FormItem>
          </Row>
        </Column>
      </Row>
      <Row>
        <Column xs={12} md={4}>
          <FormItem {...args}>
            <input type='number' min={0} max={100} id='select-1-to-100' />
            <label htmlFor='select-1-to-100'>1 to 100</label>
          </FormItem>
        </Column>
      </Row>
    </Grid>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  border: 'default',
  borderColor: '#d9d9d9',
  family: '',
  inputSize: 'default',
  isValid: null,
  darkDecoration: false,
};

const Template2 = ({ ...args }: any) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const handleActive = () => {
    setActive(!active);
  };
  const items = ['Jorge', 'Juan', 'Ra??l', 'Cano'];
  const handleChange = (ev) => {
    setValue(ev.target.value);
    setActive(true);
  };
  const handleSelect = (value: string) => {
    setValue(value);
    setActive(false);
    console.log(value);
  };
  return (
    <ConfigProvider>
      <Grid expanded>
        <Row style={{ alignItems: 'center' }}>
          <Column xs={12} md={4}>
            <FormItem {...args} ref={ref} padding='1.563rem 0 0 0' suffix={<CaretDown size={24} />}>
              <label htmlFor='select'>select</label>
              <input
                type='text'
                onFocus={() => {
                  console.log('focus');
                  setActive(true);
                }}
                value={value}
                onChange={handleChange}
                placeholder='select something'
                id='select'
                readOnly
              />
            </FormItem>
            <Popover
              target={ref}
              active={active}
              handleActive={handleActive}
              position='left'
              content={
                <div>
                  {items.map((s, i) => (
                    <Button key={s + i} block onClick={(ev) => handleSelect(s)} label={s} />
                  ))}
                </div>
              }
            />
          </Column>
        </Row>
        <Row style={{ alignItems: 'center' }}>
          <Column>
            <FormItem {...args} prefix={<User color='#3f373c' size={16} />} padding='3rem 0 0 0'>
              <label htmlFor='first-name'>First name:</label>
              <input id='first-name' name='first-name' required />
            </FormItem>
          </Column>
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
