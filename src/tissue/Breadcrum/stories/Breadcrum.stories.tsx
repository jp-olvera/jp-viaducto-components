/* eslint-disable no-alert */
import React from 'react';
import { SBConfigI } from '../../../sb';
import { Breadcrums, Breadcrum } from '..';
import { ConfigProvider } from '../../../providers';
import { House, CaretRight } from 'phosphor-react';
const config: SBConfigI = {
  title: 'FronteraUI/Navigation/Breadcrum',
  component: Breadcrums,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    separatorSpacing: {
      description: 'The horizontal spacing between the label and the diagonal',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['none', 'nano', 'micro', 'tiny', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: {
        type: 'select',
      },
    },
    family: {
      type: {
        summary: 'string',
        required: false,
      },
      control: {
        type: 'text',
      },
    },
    fontSize: {
      type: {
        summary: 'string',
        required: false,
      },
      control: {
        type: 'select',
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
    },
  },
};

export default config;

const Template = (args: typeof Default) => (
  <ConfigProvider>
    <Breadcrums {...args}>
      <Breadcrum onClick={() => {}}>1</Breadcrum>
      <Breadcrum onClick={() => {}}>2</Breadcrum>
      <Breadcrum href='#'>3</Breadcrum>
      <Breadcrum href='#'>4</Breadcrum>
      <Breadcrum href='#'>5</Breadcrum>
      <Breadcrum href='#'>6</Breadcrum>
      <Breadcrum href='#'>7</Breadcrum>
      <Breadcrum href='#'>8</Breadcrum>
      <Breadcrum href='#' showSeparator={false}>
        9
      </Breadcrum>
    </Breadcrums>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  separatorSpacing: 'sm',
  fontSize: 'md',
};

const Template2 = (args: typeof Custom) => (
  <ConfigProvider>
    <Breadcrums {...args}>
      <Breadcrum onClick={() => {}}>
        <House />
      </Breadcrum>
      <Breadcrum onClick={() => {}}>2</Breadcrum>
      <Breadcrum href='#'>3</Breadcrum>
      <Breadcrum href='#'>4</Breadcrum>
      <Breadcrum href='#'>5</Breadcrum>
      <Breadcrum href='#'>6</Breadcrum>
      <Breadcrum href='#'>7</Breadcrum>
      <Breadcrum href='#'>8</Breadcrum>
      <Breadcrum href='#'>9</Breadcrum>
      <button
        type='button'
        onClick={() => {
          alert('You clicked');
        }}
        style={{
          padding: '0',
          margin: '0',
          border: '1px solid black',
          borderRadius: 15,
          marginLeft: 2,
          backgroundColor: 'violet',
          color: 'white',
        }}
      >
        <Breadcrum active showSeparator={false}>
          This could be the Router Link
        </Breadcrum>
      </button>
    </Breadcrums>
    <Breadcrums {...args} separator={<CaretRight />}>
      <Breadcrum onClick={() => {}}>
        <House />
      </Breadcrum>
      <Breadcrum onClick={() => {}}>2</Breadcrum>
      <Breadcrum href='#'>3</Breadcrum>
      <Breadcrum href='#'>4</Breadcrum>
      <Breadcrum href='#'>5</Breadcrum>
      <Breadcrum href='#'>6</Breadcrum>
      <Breadcrum href='#'>7</Breadcrum>
      <Breadcrum href='#'>8</Breadcrum>
      <Breadcrum href='#'>9</Breadcrum>
      <button
        type='button'
        onClick={() => {
          alert('You clicked');
        }}
        style={{ padding: '0', margin: '0', border: 'none' }}
      >
        <Breadcrum active showSeparator={false}>
          This could be the Router Link
        </Breadcrum>
      </button>
    </Breadcrums>
    <Breadcrums {...args} separator={<CaretRight />} itemsToShow={2}>
      <Breadcrum onClick={() => {}}>
        Show 2 of 4
      </Breadcrum>
      <Breadcrum href='#'>2</Breadcrum>
      <Breadcrum href='#'>3</Breadcrum>
      <Breadcrum href='#'>4</Breadcrum>
    </Breadcrums>
    <Breadcrums {...args} separator={<CaretRight />} itemsToShow={3}>
      <Breadcrum onClick={() => {}}>
        Show 3 of 5
      </Breadcrum>
      <Breadcrum href='#'>2</Breadcrum>
      <Breadcrum href='#'>3</Breadcrum>
      <Breadcrum href='#'>4</Breadcrum>
      <Breadcrum href='#'>5</Breadcrum>
    </Breadcrums>
    <Breadcrums {...args} separator={<CaretRight />} itemsToShow={1}>
      <Breadcrum onClick={() => {}}>
        Show 3 of 7
      </Breadcrum>
      <Breadcrum href='#'>2</Breadcrum>
      <Breadcrum href='#'>3</Breadcrum>
      <Breadcrum href='#'>4</Breadcrum>
      <Breadcrum href='#'>5</Breadcrum>
      <Breadcrum href='#'>6</Breadcrum>
      <Breadcrum href='#'>7</Breadcrum>
    </Breadcrums>
  </ConfigProvider>
);

export const Custom = Template2.bind({});

Custom.args = {
  separatorSpacing: 'sm',
  fontSize: 'md',
};

const Template3 = (args: typeof Individual) => (
  <ConfigProvider>
    <Breadcrums {...args}>
      <Breadcrum href='https://www.google.com'>Visit google</Breadcrum>
    </Breadcrums>
  </ConfigProvider>
);

export const Individual = Template3.bind({});

Individual.args = {
  separatorSpacing: 'sm',
  fontSize: 'md',
};
