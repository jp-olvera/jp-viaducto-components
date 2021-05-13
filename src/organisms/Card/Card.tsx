import React, { useContext } from 'react';

import { ArrowRight, Time } from 'react-ikonate';
import {
  Anchor,
  Avatar,
  Button,
  Hideable,
  Paragraph,
  Spacer,
  Title,
} from '../../cells';

import { ConfigContext } from '../../providers';
import {
  StyledNormalCard,
  StyledContent,
  StyledCollapsibleCard,
  Collapse,
} from './StyledCard';

/**
 * Card component
 * @param {boolean} collapsible Attribute for render large/short card
 * @param {boolean} collapse Attribute for collapse card
 * @param {any} src Source of the image of top image
 * @param {any} content Body component
 * @param {any} footer Footer component
 * @param {boolean} onlyImage Attribute for make only image card
 * @param {number} elevation Elevation indicator for shadows data
 * @param {string} elevationDirection Light indicator for shadows data
 */
interface CardInterface {
  collapsible: boolean;
  collapse: boolean;
  src: any;
  content: any;
  footer: any;
  onlyImage: boolean;
  elevation: number;
  elevationDirection: string;
  transition?: string;
}

const Card = ({
  collapsible,
  collapse,
  src,
  content,
  footer,
  onlyImage,
  elevation = 1,
  elevationDirection = '',
  ...rest
}: CardInterface) => {
  const { configuration } = useContext(ConfigContext);
  const normalCard = () => (
    <StyledNormalCard
      configuration={configuration}
      onlyImage={(content === null && footer === null) || onlyImage}
      noImage={src === null}
      elevation={elevation}
      elevationDirection={elevationDirection}
      {...rest}
    >
      {(src !== null || onlyImage) && (
        <img className='img' src={src} alt={src} />
      )}

      {content !== null && !onlyImage && (
        <StyledContent noImage={src === null} {...rest}>
          <div className='fakeContent'>
            <div style={{ marginBottom: '1.063rem' }}>
              <Title family='Roboto' level='5' weight='500'>
                Motion Graphics: Create a Nice Typography Animation
              </Title>
              <Spacer size='xs' />
              <Paragraph color='gray' size='sm' family='Roboto'>
                Give color to everything you want to say and turn it into
                amazing messages with...
              </Paragraph>
            </div>
            {/* avatar */}
            <div className='contentWithAvatar'>
              {/* avatar */}
              <div className='avatarWrapper'>
                <Avatar src='https://i.pravatar.cc/50' alt='avatar' />
                <div>
                  <Paragraph size='xs' color='gray' family='Roboto'>
                    Created by:
                  </Paragraph>
                  <Paragraph size='sm' family='Roboto' weight='500'>
                    Joe Pearson
                  </Paragraph>
                </div>
              </div>
              {/* time */}
              <div className='time'>
                <Time fontSize='16px' color='gray' />
                <Paragraph align='right' size='sm' family='Roboto' color='gray'>
                  45 min
                </Paragraph>
              </div>
            </div>
          </div>
        </StyledContent>
      )}

      {footer !== null && !onlyImage && (
        <div className='footer'>
          <div className='fakeFooter'>
            <Button label='Apply' type='success' />
          </div>
        </div>
      )}
    </StyledNormalCard>
  );
  const collapsibleCard = () => (
    <StyledCollapsibleCard
      isActive={collapsible}
      configuration={configuration}
      elevation={elevation}
      elevationDirection={elevationDirection}
      {...rest}
    >
      <div className='size main-description'>
        <div className='avatarWrapper'>
          <Avatar src='https://i.pravatar.cc/50' alt='avatar' />
          <div className='description'>
            <Paragraph size='lg' weight='500' family='Roboto'>
              Designer
            </Paragraph>
            <Hideable visibleOn='sm'>
              <Paragraph size='sm' color='gray' family='Roboto'>
                Hays | City of London, United Kingdom
              </Paragraph>
            </Hideable>
          </div>
        </div>
        <div className='actions'>
          <div className='sub'>
            <Hideable visibleOn='sm'>
              <div className='imgs'>
                <img src='https://i.pravatar.cc/28' alt='avatar' />
                <img src='https://i.pravatar.cc/28' alt='avatar' />
                <img src='https://i.pravatar.cc/28' alt='avatar' />
                <Paragraph family='Roboto' color='gray' size='sm'>
                  3 people you know work here!
                </Paragraph>
              </div>
            </Hideable>
            <Button label='New' type='success' size='sm' />
          </div>
        </div>
      </div>
      <Collapse collapse={collapse} {...rest}>
        <div className='collapse'>
          <div className='size full-description'>
            <Paragraph family='Roboto' color='#6B6C6F' size='sm'>
              Mid-weight/senior designer to create status-quo-challenging design
              work across a wide range of media for marketing efforts, including
              large scale, high profile branded conferences and events, product
              launch campaigns, presentations, web content, ads, videos,
              infographics, DM and marketing material.
            </Paragraph>
            <Spacer size='sm' />
            <Anchor
              label='Read full Job Spec'
              icon={<ArrowRight />}
              size='sm'
            />
          </div>
          <div className='size footer'>
            <Hideable visibleOn='sm'>
              <div className='blocks'>
                <div className='block'>
                  <Paragraph size='xs' color='gray' family='Roboto'>
                    Seniority Level
                  </Paragraph>
                  <Paragraph size='sm' family='Roboto'>
                    Not Applicable
                  </Paragraph>
                </div>
                <div className='block'>
                  <Paragraph size='xs' color='gray' family='Roboto'>
                    Industry
                  </Paragraph>
                  <Paragraph size='sm' family='Roboto'>
                    Financial Services
                  </Paragraph>
                </div>
                <div className='block'>
                  <Paragraph size='xs' color='gray' family='Roboto'>
                    Employment Type
                  </Paragraph>
                  <Paragraph size='sm' family='Roboto'>
                    Temporary
                  </Paragraph>
                </div>
                <div className='block'>
                  <Paragraph size='xs' color='gray' family='Roboto'>
                    Job Functions
                  </Paragraph>
                  <Paragraph size='sm' family='Roboto'>
                    Marketing
                  </Paragraph>
                </div>
              </div>
            </Hideable>
            <Button label='Apply' type='success' />
          </div>
        </div>
      </Collapse>
    </StyledCollapsibleCard>
  );

  return collapsible ? collapsibleCard() : normalCard();
};

export default Card;
