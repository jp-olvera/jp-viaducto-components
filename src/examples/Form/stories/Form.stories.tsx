import React from 'react';
import styled from 'styled-components';
import { ConfigProvider } from '../../../providers';
import {
  Input, Select, Grid, Row, Column,
} from '../../../cells';

const config: any = {
  title: 'Examples/Form',
};
export default config;

const FormControl = styled.div`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
`;

const Template = () => (
  <ConfigProvider>
    <Grid>
      <Row>
        <Column>
          <FormControl>
            <Input defaultValue='ho' border='overlap' label='name' id='name' />
          </FormControl>
          <FormControl>
            <Input
              defaultValue='ho'
              border='overlap'
              label='Last name last name last name last'
              id='last-name'
            />
          </FormControl>
        </Column>
        <Column>
          <FormControl>
            <Input defaultValue='ho' border='overlap' label='age' id='age' />
          </FormControl>
          <FormControl>
            <Select label='City' labelPosition='overlap'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </Select>
          </FormControl>
        </Column>
      </Row>
    </Grid>
    <Grid>
      <Row>
        <Column>
          <FormControl>
            <Input
              defaultValue='ho'
              border='overlap'
              inputSize='xsmall'
              label='name'
              id='name2'
            />
          </FormControl>
          <FormControl>
            <Input
              defaultValue='ho'
              border='overlap'
              inputSize='xsmall'
              label='Last name last name last name last'
              id='last-name2'
            />
          </FormControl>
        </Column>
        <Column>
          <FormControl>
            <Input
              defaultValue='ho'
              border='overlap'
              inputSize='xsmall'
              label='age'
              id='age2'
            />
          </FormControl>
          <FormControl>
            <Select
              inputSize='xsmall'
              label='City2'
              id='City2'
              labelPosition='overlap'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </Select>
          </FormControl>
        </Column>
      </Row>
    </Grid>
    <Grid>
      <Row>
        <Column>
          <FormControl>
            <Input border='overlap' inputSize='small' label='name' id='name2' />
          </FormControl>
          <FormControl>
            <Input
              border='overlap'
              inputSize='small'
              label='Last name last name last name last'
              id='last-name2'
            />
          </FormControl>
        </Column>
        <Column>
          <FormControl>
            <Input border='overlap' inputSize='small' label='age' id='age2' />
          </FormControl>
          <FormControl>
            <Select
              inputSize='small'
              label='City2'
              id='City2'
              labelPosition='overlap'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </Select>
          </FormControl>
        </Column>
      </Row>
    </Grid>
    <Grid>
      <Row>
        <Column>
          <FormControl>
            <Input
              defaultValue='ho'
              border='overlap'
              inputSize='large'
              label='name'
              id='name2'
            />
          </FormControl>
          <FormControl>
            <Input
              defaultValue='ho'
              border='overlap'
              inputSize='large'
              label='Last name last name last name last'
              id='last-name2'
            />
          </FormControl>
        </Column>
        <Column>
          <FormControl>
            <Input
              defaultValue='ho'
              border='overlap'
              inputSize='large'
              label='age'
              id='age2'
            />
          </FormControl>
          <FormControl>
            <Select
              inputSize='large'
              label='City2'
              id='City2'
              labelPosition='overlap'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </Select>
          </FormControl>
        </Column>
      </Row>
    </Grid>
  </ConfigProvider>
);

export const Form = Template.bind({});
