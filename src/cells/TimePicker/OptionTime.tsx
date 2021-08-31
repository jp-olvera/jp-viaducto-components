import React, { useContext } from 'react';
import { ConfigContext } from '../../providers';
import { Container, Paragraph } from '..';
import { Option } from './StyledTimePicker';
import { getTimeProps, handleOnClick } from './timePickerFunctions';

const OptionTime = ({
  timeSet,
  shapeColor,
  selected,
  array,
  options: {
    setTimeSelected,
    onTimeSelected,
    setSelected,
    timeSelected,
    timeFormat,
  },
}) => {
  const { configuration: config } = useContext(ConfigContext);
  const { colors } = config;
  const classN = timeSet === 'h' ? 'hour' : timeSet === 's' ? 'second' : 'minute';

  return (
    <Container
      className={`time-column t-${classN}`}
      expandHorizontal
      expandVertical
    >
      {array.map((num: number) => {
        const {
          response: {
            className, numberString, num: numb, selectedOpt,
          },
        } = getTimeProps(timeSet, num, selected, timeFormat);

        return (
          <Option
            data-testid={`${numberString}-${timeSet}`}
            shapeColor={shapeColor}
            className={className}
            config={config}
            key={numb}
            onClick={() => handleOnClick(timeSet, setTimeSelected, onTimeSelected, numb, {
              setSelected,
              time: timeSelected,
              timeString: numberString,
              format: timeFormat,
            })}
          >
            <Paragraph
              align='center'
              size='sm'
              color={selectedOpt === numb ? colors[shapeColor].text : 'dark'}
            >
              {numberString}
            </Paragraph>
          </Option>
        );
      })}
    </Container>
  );
};

export default OptionTime;
