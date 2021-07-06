/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-ikonate';
import { Anchor } from '../../cells';
import { ConfigContext } from '../../providers';
import { StyledPagination } from './StyledPagination';

/**
 * Pagination component
 * @param {number} totalPages
 * @param {number} sibilings
 * @param {any | null} iconLeft
 * @param {boolean} previousLabel
 * @param {any | null} iconRight
 * @param {boolean} nextLabel
 * @param {string} position
 * @param {string} family
 * @param {string} fontSize
 * @param {string} activeColor
 * @param {string} hoverColor
 * @param {string} textColor
 * @param {number | string | null} radius
 * @param {string} spacing
 * @param {Function} onPageChange
 * @param {string} variant
 */
interface PaginationInterface {
  totalPages: number;
  sibilings: number;
  iconLeft?: any | null;
  previousLabel?: boolean;
  iconRight?: any | null;
  nextLabel?: boolean;
  position?: string;
  family?: string;
  fontSize?: string;
  activeColor?: string;
  hoverColor?: string;
  textColor?: string;
  radius?: number | string | null;
  spacing?: string;
  onPageChange?: Function;
  variant?: string;
}

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
  radius = 0,
  spacing = 'xs',
  onPageChange,
  position = 'center',
  variant = 'normal',
  ...rest
}: PaginationInterface) => {
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
            {iconLeft ? (
              <a>{iconLeft}</a>
            ) : previousLabel ? (
              <Anchor
                label='Previous Page'
                lead
                icon={<ChevronLeft />}
                color={textColor}
                size={fontSize}
              />
            ) : (
              <a>
                <ChevronLeft />
              </a>
            )}
          </li>
        )}
        <li
          onClick={() => goToPage(1)}
          role='button'
          className={`${active === 1 ? 'active' : ''}`}
        >
          <Anchor label={(1).toString()} />
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
            <Anchor label={page.toString()} />
          </li>
        ))}
        {totalPages > 1 && (
          <li
            onClick={() => goToPage(totalPages)}
            role='button'
            className={`${active === totalPages ? 'active' : ''}`}
          >
            <Anchor label={totalPages.toString()} />
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
            {iconRight ? (
              <a>{iconRight}</a>
            ) : nextLabel ? (
              <Anchor
                label='Next Page'
                icon={<ChevronRight />}
                color={textColor}
                size={fontSize}
              />
            ) : (
              <a>
                <ChevronRight />
              </a>
            )}
          </li>
        )}
      </ul>
    </StyledPagination>
  ) : null;
};

export default Pagination;
