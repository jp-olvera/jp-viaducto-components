import React from 'react';
import { Column, Grid, Row } from '../../cells';

export interface SideToSide extends React.HTMLAttributes<HTMLDivElement> {
  /** Children component */
  children: React.ReactNode;
  /** Background color for children side */
  childrenBackgroundColor?: string;
  /** Set maxWidth prop to children component */
  childrenMaxWidth?: string;
  /** Vertical alignment for children component (works on large screens) "center" | "flex-start" | "flex-end" */
  childrenVerticalAlignment?: 'center' | 'flex-start' | 'flex-end';
  /** Media component (could be Image, Div with image background, another component, etc.) */
  media?: React.ReactNode;
  /** Background color for media side */
  mediaBackgroundColor?: string;
  /** Set the children first/second side */
  reverse?: boolean;
  /** Adds extra columns (xs={12} sm={12} md={2} lg={12} xl={1} sizes) before and after children side */
  columnAlignment?: boolean;
}

/**
 * SideToSide component for Marketing blocks
 * @param {React.ReactNode} children Children component
 * @param {string} childrenBackgroundColor Background color for children side
 * @param {string} childrenMaxWidth Set maxWidth prop to children component
 * @param {string} childrenVerticalAlignment Vertical alignment for children component (works on large screens) "center" | "flex-start" | "flex-end"
 * @param {React.ReactNode} media Media component (could be Image, Div with image background, another component, etc.)
 * @param {string} mediaBackgroundColor Background color for media side
 * @param {boolean} reverse Set the children first/second side
 * @param {boolean} columnAlignment Adds extra columns (xs={12} sm={12} md={2} lg={12} xl={1} sizes) before and after children side
 */

const SideToSide = ({
  children,
  media,
  mediaBackgroundColor = '#89BCC4',
  childrenBackgroundColor = '#264A61',
  childrenVerticalAlignment = 'center',
  reverse = false,
  columnAlignment = true,
  childrenMaxWidth = '473px',
}: SideToSide) => {
  const height: React.CSSProperties = { height: '100%' };
  const sizes = columnAlignment
    ? {
        xs: 12,
        sm: 12,
        md: 8,
        lg: 12,
        xl: 8,
      }
    : {
        xs: 12,
      };
  const styles: React.CSSProperties = columnAlignment
    ? {}
    : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: childrenVerticalAlignment,
      };
  return (
    <Grid expanded gutter={0} style={height}>
      <Row>
        {media && (
          <Column
            xs={12}
            lg={6}
            style={{ background: mediaBackgroundColor, order: reverse ? 2 : 1 }}
          >
            {media}
          </Column>
        )}
        <Column
          xs={12}
          lg={6}
          style={{
            background: childrenBackgroundColor,
            order: !reverse ? 2 : 1,
          }}
        >
          <Grid expanded style={{ background: childrenBackgroundColor, ...height }}>
            <Row>
              {reverse && (
                <>
                  {columnAlignment && <Column xs={12} sm={12} md={2} lg={12} xl={1} />}
                  <Column {...sizes} style={styles}>
                    <div style={{ maxWidth: childrenMaxWidth }}>{children}</div>
                  </Column>
                  {columnAlignment && <Column xs={12} sm={12} md={2} lg={12} xl={3} />}
                </>
              )}
              {!reverse && (
                <>
                  <Column
                    xs={12}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: childrenVerticalAlignment,
                    }}
                  >
                    <div
                      style={{
                        maxWidth: childrenMaxWidth,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'column',
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 95,
                      }}
                    >
                      {children}
                    </div>
                  </Column>
                </>
              )}
            </Row>
          </Grid>
        </Column>
      </Row>
    </Grid>
  );
};

export default SideToSide;
