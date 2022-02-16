import React, { useRef, useContext, useState, useEffect } from 'react';
import { StyledAccordionItem, AccordionHeader, Chevron } from './StyledAccordion';
import { ConfigContext } from '../../providers';
import { AccordionContext } from './Accordion';
export interface AccordionItem extends React.HTMLAttributes<HTMLDivElement> {
  /** children component */
  children: React.ReactNode;
  /** Inidcates if it is open */
  expanded?: boolean;
  /** id  */
  id?: string;
  /** Icon to use instead of the chevron */
  icon?: React.ReactNode;
  /** color for default chevron icon, must be without # symbol */
  iconColor?: string;
  /** Class to apply to the icon when the accordion is open */
  iconOpen?: string;
  /** Class to apply to the icon when the accordion is closed */
  iconClosed?: string;
  /** Horizontal padding to apply based on the spacing configuration */
  paddingX?: string;
  /** Vertical padding to apply based on the spacing configuration */
  paddingY?: string;
  /**  Content to use as the title */
  titleItem: any;
  /** timing function to use when closing and opening */
  transition?: string;
  enabled?: boolean;
  handleOpen?: (id: number) => void;
}

/**
 * Accordion Item component
 @param {React.ReactNode} children children component
  @param {boolean} Inidcates if it is open
  @param {string} Id id
  @param {React.ReactNode} Icon to use instead of the chevron
  @param {string} iconColor color for default chevron icon, must be without # symbol
  @param {string} Class to apply to the icon when the accordion is open
  @param {string} Class to apply to the icon when the accordion is closed
  @param {string} Horizontal padding to apply based on the spacing configuration
  @param {string} Vertical padding to apply based on the spacing configuration
  @param {React.ReactNode}  Content to use as the title
  @param {string} timing function to use when closing and opening
 */

const AccordionItem = ({
  children,
  expanded = false,
  id,
  titleItem = '',
  paddingX,
  paddingY,
  transition,
  icon = null,
  iconOpen = '',
  iconClosed = '',
  iconColor = 'dark',
  enabled = true,
  handleOpen,
  ...rest
}: AccordionItem) => {
  const { configuration } = useContext(ConfigContext);
  const [isOpen, setisOpen] = useState(false);
  // const [isOpen, setisOpen] = useState(expanded || false);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(expanded ? undefined : 0);
  useEffect(() => {
    /* istanbul ignore else */
    if (!height || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].target.clientHeight);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  const { openIds } = useContext(AccordionContext);
  useEffect(() => {
    const index = Number(id?.charAt(id.length - 1)) || 0;
    let isabierto = false;
    if (openIds[index] !== undefined) {
      setisOpen(() => openIds[index]);
      isabierto = openIds[index];
    }
    if (isabierto) {
      setHeight(ref.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [openIds]);

  const handleClick = () => {
    if (handleOpen) {
      const index = Number(id?.charAt(id.length - 1)) || 0;
      handleOpen(index);
    }
  };
  const className = rest.className || '';
  return (
    <StyledAccordionItem
      {...rest}
      paddingX={paddingX}
      paddingY={paddingY}
      expanded={expanded}
      transition={transition}
      configuration={configuration}
      className={`fui-redlines ${className}`}
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
            width: 'calc(100% - 25px)',
          }}
        >
          {titleItem}
        </span>
        <span
          style={{
            paddingLeft: '5px',
            width: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}
          className={isOpen ? iconOpen : iconClosed}
        >
          {icon !== null ? (
            icon
          ) : (
            <Chevron
              expanded={isOpen}
              transition={transition}
              config={configuration}
              iconColor={iconColor}
            />
          )}
        </span>
      </AccordionHeader>
      <section id={`accordion-body-${id}`} className='section' style={{ height }}>
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
