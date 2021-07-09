import React, {
  useRef, useEffect, useContext, useState,
} from 'react';
import {
  StyledAccordionItem,
  AccordionHeader,
  Chevron,
} from './StyledAccordion';
import { ConfigContext } from '../../providers';

/**
 * Accordion Item component
 * @param {String} transition Overrides the transitionTimingFunction
 */

export interface AccordionItemProps {
  /** children */
  children: React.ReactNode;
  /** Inidcates if it is open */
  expanded: boolean;
  /** Id  */
  id: string;
  /** Icon to use instead of the chevron */
  icon?: React.ReactNode;
  /** Class to apply to the icon when the accordion is open */
  iconOpen?: string;
  /** Class to apply to the icon when the accordion is closed */
  iconClosed?: string;
  /** Horizontal padding to apply based on the spacing configuration */
  paddingX: string;
  /** Vertical padding to apply based on the spacing configuration */
  paddingY: string;
  /**  Content to use as the title */
  title: React.ReactNode;
  /** timing function to use when closing and opening */
  transition: string;
}

const AccordionItem = ({
  children,
  expanded = false,
  id,
  title = '',
  paddingX,
  paddingY,
  transition = 'ease',
  icon = null,
  iconOpen = '',
  iconClosed = '',
}: AccordionItemProps) => {
  const { configuration } = useContext(ConfigContext);
  const [isOpen, setisOpen] = useState(expanded);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(
    expanded ? undefined : 0,
  );
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].target.clientHeight);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen, expanded]);
  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isOpen]);
  const handleClick = () => {
    setisOpen((prev) => !prev);
  };
  return (
    <StyledAccordionItem
      paddingX={paddingX}
      paddingY={paddingY}
      expanded={expanded}
      transition={transition}
      configuration={configuration}
    >
      <AccordionHeader
        type='button'
        onClick={handleClick}
        id={`accordion-title-${id}`}
        paddingX={paddingX}
        paddingY={paddingY}
        icon={icon}
        expanded={isOpen}
        transition={transition}
      >
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'text-elipsis',
            whiteSpace: 'nowrap',
            marginRight: 'auto',
          }}
        >
          {title}
        </span>
        <span
          style={{
            paddingLeft: '5px',
          }}
          className={isOpen ? iconOpen : iconClosed}
        >
          {icon !== null ? (
            icon
          ) : (
            <Chevron expanded={isOpen} transition={transition} />
          )}
        </span>
      </AccordionHeader>
      <section
        id={`accordion-body-${id}`}
        className='section'
        style={{ height }}
      >
        <div
          ref={ref}
          style={{
            padding: `${paddingX} ${paddingY}`,
            boxSizing: 'border-box',
          }}
        >
          {children}
        </div>
      </section>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
