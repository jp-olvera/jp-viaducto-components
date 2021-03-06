import React from 'react';
import { Paragraph, Title } from '../../../cells';
import { ConfigProvider } from '../../../providers';
import { Accordion, AccordionItem } from '..';

export default {
  title: 'FronteraUI/Content/Accordion',
  component: Accordion,
  argTypes: {
    paddingY: {
      description: 'The vertical padding for the title and the content',
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
    paddingX: {
      description: 'The horixontal padding for the title and the content',
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
      <AccordionItem
        titleItem={<Title level='6'>Hola, no olvides revisar los Docs arriba</Title>}
        icon={<span style={{ fontSize: '22px', lineHeight: 1 }}>+</span>}
      >
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Paragraph>
      </AccordionItem>
      <AccordionItem
        titleItem={<Title level='6'>Presiona la D para que aparezcan los controles</Title>}
        {...args}
      >
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Paragraph>
      </AccordionItem>
      <AccordionItem
        titleItem={<Title level='6'>Aqu?? puedes poner un texto o un componente</Title>}
        {...args}
        icon='X'
      >
        <Paragraph>
          Un andamio es una construcci??n provisional con la que se permite el acceso de los obreros
          a los distintos puntos de una construcci??n, as?? como para llevar material a todos los
          tajos de obra del edificio en construcci??n o en rehabilitaci??n de fachadas.
        </Paragraph>
      </AccordionItem>
    </Accordion>
  </ConfigProvider>
);

export const Default = Template.bind({});

Default.args = {
  transition: 'linear',
  paddingX: 'sm',
  paddingY: 'sm',
  expandMultiple: false,
};
