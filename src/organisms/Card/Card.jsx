import React, { useContext, useState } from 'react';

import { Anchor, Avatar, Button, Paragraph, Spacer, Title } from '../../cells';
import { ArrowRight, Time } from 'react-ikonate';

import { ConfigContext } from '../../providers/';
import {
  StyledNormalCard,
  StyledContent,
  StyledCollapsibleCard,
  Collapse,
} from './StyledCard';

const Card = ({
  collapsible = false,
  collapse = false,
  src = null,
  content = null,
  footer = null,
  onlyImage = false,
}) => {
  const { configuration } = useContext(ConfigContext);
  const normalCard = () => (
    <StyledNormalCard
      configuration={configuration}
      onlyImage={(content === null && footer === null) || onlyImage}
      noImage={src === null}
    >
      {(src !== null || onlyImage) && (
        <img className="img" src={src} alt={src} />
      )}

      {content !== null && !onlyImage && (
        <StyledContent noImage={src === null}>
          <div className="fakeContent">
            <div style={{ marginBottom: '1.063rem' }}>
              <Title family="Roboto" level="5" weight="500">
                Motion Graphics: Create a Nice Typography Animation
              </Title>
              <Spacer size="xs" />
              <Paragraph color="gray" size="sm" family="Roboto">
                Give color to everything you want to say and turn it into
                amazing messages with...
              </Paragraph>
            </div>
            {/* avatar */}
            <div className="contentWithAvatar">
              {/* avatar */}
              <div className="avatarWrapper">
                <Avatar src="https://i.pravatar.cc/50" alt="avatar" />
                <div>
                  <Paragraph size="xs" color="gray" family="Roboto">
                    Created by:
                  </Paragraph>
                  <Paragraph size="sm" family="Roboto" weight="500">
                    Joe Pearson
                  </Paragraph>
                </div>
              </div>
              {/* time */}
              <div className="time">
                <Time fontSize="16px" color="gray" />
                <Paragraph align="right" size="sm" family="Roboto" color="gray">
                  45 min
                </Paragraph>
              </div>
            </div>
          </div>
        </StyledContent>
      )}

      {footer !== null && !onlyImage && (
        <div className="footer">
          <div className="fakeFooter">
            <Button label="Apply" type={'success'} />
          </div>
        </div>
      )}
    </StyledNormalCard>
  );
  const collapsibleCard = () => (
    <StyledCollapsibleCard isActive={collapsible} configuration={configuration}>
      <div className="size main-description">
        <div className="avatarWrapper">
          <Avatar src="https://i.pravatar.cc/50" alt="avatar" />
          <div className="description">
            <Paragraph size="lg" weight="500" family="Roboto">
              Designer
            </Paragraph>
            <Paragraph size="sm" color="gray" family="Roboto">
              Hays | City of London, United Kingdom
            </Paragraph>
          </div>
        </div>
        <div className="actions">
          <div className="sub">
            <div className="imgs">
              <img src="https://i.pravatar.cc/28" alt="avatar" />
              <img src="https://i.pravatar.cc/28" alt="avatar" />
              <img src="https://i.pravatar.cc/28" alt="avatar" />
              <Paragraph family="Roboto" color="gray" size="sm">
                3 people you know work here!
              </Paragraph>
            </div>
            <Button label="New" type="success" size="sm" />
          </div>
        </div>
      </div>
      <Collapse collapse={collapse}>
        <div className="collapse">
          <div className="size full-description">
            <Paragraph family="Roboto" color="#6B6C6F" size="sm">
              Mid-weight/senior designer to create status-quo-challenging design
              work across a wide range of media for marketing efforts, including
              large scale, high profile branded conferences and events, product
              launch campaigns, presentations, web content, ads, videos,
              infographics, DM and marketing material.
            </Paragraph>
            <Spacer size="sm" />
            <Anchor
              label="Read full Job Spec"
              icon={<ArrowRight />}
              size="sm"
            />
          </div>
          <div className="size footer">
            <div className="blocks">
              <div className="block">
                <Paragraph size="xs" color="gray" family="Roboto">
                  Seniority Level
                </Paragraph>
                <Paragraph size="sm" family="Roboto">
                  Not Applicable
                </Paragraph>
              </div>
              <div className="block">
                <Paragraph size="xs" color="gray" family="Roboto">
                  Industry
                </Paragraph>
                <Paragraph size="sm" family="Roboto">
                  Financial Services
                </Paragraph>
              </div>
              <div className="block">
                <Paragraph size="xs" color="gray" family="Roboto">
                  Employment Type
                </Paragraph>
                <Paragraph size="sm" family="Roboto">
                  Temporary
                </Paragraph>
              </div>
              <div className="block">
                <Paragraph size="xs" color="gray" family="Roboto">
                  Job Functions
                </Paragraph>
                <Paragraph size="sm" family="Roboto">
                  Marketing
                </Paragraph>
              </div>
            </div>
            <Button label="Apply" type="success" />
          </div>
        </div>
      </Collapse>
    </StyledCollapsibleCard>
  );

  return collapsible ? collapsibleCard() : normalCard();
};

export default Card;
