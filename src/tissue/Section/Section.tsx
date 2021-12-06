import React, { useEffect, useRef, useState } from 'react';
import { ResponsivePadding } from '../../cells';
import { SectionChild, StyledSection, Subsection } from './StyledSection';

/** Section component */
export interface Section extends React.HTMLAttributes<HTMLDivElement> {
  /** Child for section component */
  children: React.ReactNode;
  /** Sections placed behind the child */
  sections: { background: string }[];
  /** top padding for the child component */
  top?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** bottom padding for the child component */
  bottom?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** vertical padding for the child component */
  vertical?: null | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** set the max-width prop for the child */
  childMaxWidth?: string;
}

/**
 * Section component
 * @param {React.ReactNode} children Child for section component
 * @param {{background:string}[]} sections Sections placed behind the child
 * @param {string} top top padding for the child component
 * @param {string} bottom bottom padding for the child component
 * @param {string} vertical vertical padding for the child component
 * @param {string} childMaxWidth set the max-width prop for the child
 */

const Section = ({
  top = null,
  bottom = null,
  vertical = 'lg',
  sections,
  childMaxWidth = '1136px',
  children,
}: Section) => {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState<number | string>('100%');
  useEffect(() => {
    /* istanbul ignore if */
    if (ref && ref.current) {
      setH(ref.current.clientHeight);
    }
  }, []);
  return (
    <StyledSection sections={sections.length} style={{ height: h }}>
      {sections.map((bg: { background: string }, index: number) => (
        <Subsection
          divided={sections.length}
          background={bg.background}
          className='section'
          key={index}
        />
      ))}
      <SectionChild maxWidth={childMaxWidth} ref={ref}>
        <ResponsivePadding
          top={top}
          bottom={bottom}
          vertical={vertical}
          className='ballena-section-content-child'
        >
          {children}
        </ResponsivePadding>
      </SectionChild>
    </StyledSection>
  );
};

export default Section;
