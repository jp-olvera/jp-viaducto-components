import React, { useState } from 'react';
import {
  Container, Paragraph, AvatarWithText, Spacer,
} from '../..';
import { Parent, UserInformation, Example } from './Styled';

const UserManagement = () => {
  const [offset, setScrolling] = useState<boolean>(false);
  const scrollTop = 144;

  const onScroll = (e) => {
    const element = e.target;
    const currentPosition = element.scrollTop;
    if (currentPosition >= scrollTop) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div
      onScroll={(e) => onScroll(e)}
      style={{ overflow: 'auto', maxHeight: '90vh' }}
    >
      <Parent>
        <img
          src='https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt='cover'
        />
        <Example className='head' off={offset}>
          <Container
            vertical={offset ? 'lg' : 'md'}
            horizontal={offset ? 'xxxl' : 'xl'}
            expandHorizontal={!offset}
          >
            <UserInformation off={offset}>
              <AvatarWithText
                avatar={{
                  src: 'https://picsum.photos/1000',
                  alt: 'user_info',
                  width: offset ? '50px' : '112px',
                  height: offset ? '50px' : '112px',
                }}
                spacing='xl'
              >
                <Container className='user-data' expandHorizontal>
                  <Paragraph
                    color='#262626'
                    size='lg'
                    lineHeight='28px'
                    weight='900'
                  >
                    Jackie Richards
                  </Paragraph>
                  <Spacer size='sm' />
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: 230 }} className='hide'>
                      <Paragraph lineHeight='22px' color='#595959'>
                        Efficiently network progressive ROI and multifunctional
                        metrics.
                      </Paragraph>
                    </div>
                    <div className='hide'>
                      <Spacer direction='horizontal' size='xxl' />
                      <Spacer direction='horizontal' size='xxl' />
                    </div>
                    <div>
                      <Paragraph
                        weight='900'
                        lineHeight='22px'
                        className='hide'
                      >
                        Contact Information
                      </Paragraph>
                      <div style={{ display: 'flex' }}>
                        <Paragraph lineHeight='22px'>
                          💻 jackie@doe.com
                        </Paragraph>
                        <Spacer direction='horizontal' size='xs' />
                        <Paragraph lineHeight='22px'>
                          ☕ +1 245 878 7878
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                </Container>
              </AvatarWithText>
            </UserInformation>
          </Container>
        </Example>
        <div
          className='content'
          style={{ height: 5000, width: '100%', backgroundColor: '#fafafa' }}
        />
      </Parent>
    </div>
  );
};

export default UserManagement;
