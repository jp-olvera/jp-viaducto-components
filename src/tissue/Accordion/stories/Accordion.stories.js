import React from 'react';
import { Paragraph } from '../../../cells';
import { ConfigProvider } from '../../../providers';
import { Accordion, AccordionItem } from '..';

export default {
  title: 'Andamio/Tissues/Accordion',
  component: Accordion,
  argTypes: {
    defaultIndex: {
      description: 'Index of the section to be expanded, ti defaults to -1',
      type: { summary: 'number', required: false },
      table: {
        defaultValue: { summary: -1 },
      },
      control: {
        type: 'number',
      },
    },
    expandMultiple: {
      description: 'Allow expand multiple sections',
      type: { summary: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    paddingY: {
      description: 'The vertical padding for the title and the content',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: [
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
      ],
      control: {
        type: 'select',
      },
    },
    paddingX: {
      description: 'The horixontal padding for the title and the content',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: [
        'none',
        'nano',
        'micro',
        'tiny',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
      ],
      control: {
        type: 'select',
      },
    },
    transition: {
      description: 'Overrides the transitionTimingFunction prop',
      type: {
        summary: 'string',
        required: false,
      },
      table: {
        defaultValue: { summary: 'ease' },
      },
      control: 'text',
    },
  },
};

const Template = (args) => (
  <ConfigProvider>
    <Accordion {...args}>
      <AccordionItem title='Hola, no olvides revisar los Docs arriba' {...args}>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </AccordionItem>
      <AccordionItem
        title='Presiona la D para que aparezcan los controles'
        {...args}
      >
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </AccordionItem>
      <AccordionItem
        title='Aquí puedes poner un texto o un componente'
        {...args}
      >
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </AccordionItem>
    </Accordion>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  defaultIndex: 0,
  transition: 'cubic-bezier(.92,.03,.56,.36)',
};
