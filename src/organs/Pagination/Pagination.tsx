/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { Anchor } from '../../cells';
import { ConfigContext } from '../../providers';
import { StyledPagination } from './StyledPagination';

/** Pagination component */
interface PaginationInterface {
  /** Set the number of total pages in the component */
  totalPages: number;
  /** Set the number of sibilings of the actual page */
  sibilings: 0 | 1;
  /** Set an icon to prev page */
  iconLeft?: any | null;
  /** Set a label to prev page */
  previousLabel?: boolean;
  /** Set an icon to next page */
  iconRight?: any | null;
  /** Set a label to next page */
  nextLabel?: boolean;
  /** Align the component to center, start, end */
  position?: 'center' | 'start' | 'end';
  /** Set font family */
  family?: string;
  /** Set font size */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Set the active color page */
  activeColor?: string;
  /** Set the hover color page */
  hoverColor?: string;
  /** Set font color */
  textColor?: string;
  /** Set border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** Set spacing in page component */
  spacing?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl';
  /** Triggers a function when page is changed */
  onPageChange?: Function;
  /** Set button color variant */
  variant?: 'normal' | 'outline';
}

/**
 * Pagination component
 * @param {number} totalPages Set the number of total pages in the component
 * @param {number} sibilings Set the number of sibilings of the actual page
 * @param {any | null} iconLeft Set an icon to prev page
 * @param {boolean} previousLabel Set a label to prev page
 * @param {any | null} iconRight Set an icon to next page
 * @param {boolean} nextLabel Set a label to next page
 * @param {string} position Align the component to center, start, end
 * @param {string} family Set font family
 * @param {string} fontSize Set font size
 * @param {string} activeColor Set the active color page
 * @param {string} hoverColor Set the hover color page
 * @param {string} textColor Set font color
 * @param {string} radius Set border radius
 * @param {string} spacing Set spacing in page component
 * @param {Function} onPageChange Triggers a function when page is changed
 * @param {string} variant Set button color variant
 */

const Pagination = ({
  totalPages,
  sibilings,
  iconLeft,
  iconRight,
  previousLabel = false,
  nextLabel = false,
  family,
  fontSize = 'md',
  activeColor = '#bdbdbd',
  hoverColor = '#acacac',
  textColor,
  radius,
  spacing = 'xs',
  onPageChange,
  position = 'center',
  variant = 'normal',
  ...rest
}: PaginationInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [active, setActive] = useState<number>(1);
  const [pages, setPages] = useState<any[]>([]);
  useEffect(() => {
    const fillPages: any = [];
    if (totalPages <= 5) {
      for (let i = 2; i <= totalPages - 1; i++) {
        fillPages.push(i);
      }
      setPages(fillPages);
    } else {
      setPages([2, '...']);
    }
  }, []);
  const goToPage = (pageNumber: any) => {
    if (totalPages > 5) {
      switch (pageNumber) {
        case 1:
          setPages([2, '...']);
          break;
        case 2:
          setPages([2, 3, '...']);
          break;
        case 3:
          setPages([2, 3, 4, '...']);
          break;
        case totalPages - 2:
          setPages(['...', totalPages - 3, totalPages - 2, totalPages - 1]);
          break;
        case totalPages - 1:
          setPages(['...', totalPages - 2, totalPages - 1]);
          break;
        case totalPages:
          setPages(['...', totalPages - 1]);
          break;
        default:
          if (sibilings <= 0) {
            setPages(['...', pageNumber, '...']);
          } else {
            setPages([
              '...',
              pageNumber - 1,
              pageNumber,
              pageNumber + 1,
              '...',
            ]);
          }
          break;
      }
    }
    if (onPageChange) onPageChange();
    setActive(pageNumber);
  };
  return totalPages > 0 ? (
    <StyledPagination
      configuration={configuration}
      family={family}
      fontSize={fontSize}
      activeColor={activeColor}
      hoverColor={hoverColor}
      textColor={textColor}
      radius={radius}
      spacing={spacing}
      position={position}
      variant={variant}
      {...rest}
    >
      <ul>
        {totalPages > 1 && (
          <li
            data-testid='l-icon'
            className={`${active === 1 ? 'disabled' : ''}`}
            onClick={() => {
              /* istanbul ignore else */
              if (active !== 1) {
                goToPage(active - 1);
              }
            }}
          >
            <Anchor
              href=''
              label={previousLabel ? 'Previous Page' : ''}
              color={textColor}
              size={fontSize}
              icon={iconLeft && iconLeft}
            />
          </li>
        )}
        <li
          onClick={() => goToPage(1)}
          role='button'
          className={`${active === 1 ? 'active' : ''}`}
        >
          <Anchor label={(1).toString()} href='' />
        </li>
        {pages.map((page: any, index: number) => (
          <li
            key={page.toString() + index.toString()}
            onClick={() => page !== '...' && goToPage(page)}
            role='button'
            className={`${active === page && page !== '...' ? 'active' : ''} ${
              page === '...' && 'dots'
            }`}
          >
            <Anchor label={page.toString()} href='' />
          </li>
        ))}
        {totalPages > 1 && (
          <li
            onClick={() => goToPage(totalPages)}
            role='button'
            className={`${active === totalPages ? 'active' : ''}`}
          >
            <Anchor label={totalPages.toString()} href='' />
          </li>
        )}
        {totalPages > 1 && (
          <li
            data-testid='r-icon'
            className={`${active === totalPages ? 'disabled' : ''}`}
            onClick={() => {
              /* istanbul ignore else */
              if (active !== totalPages) {
                goToPage(active + 1);
              }
            }}
          >
            <Anchor
              href=''
              label={nextLabel ? 'Next Page' : ''}
              color={textColor}
              size={fontSize}
              icon={iconRight && iconRight}
            />
          </li>
        )}
      </ul>
    </StyledPagination>
  ) : null;
};

export default Pagination;
