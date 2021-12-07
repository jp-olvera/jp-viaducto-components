import React, { useEffect, useState } from 'react';

/** Pagination component */
interface PaginationInterface {
  /** Set the number of total pages in the component */
  totalPages: number;
  /** Set the number of siblings of the actual page */
  siblings: 0 | 1;
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
  /** Triggers a function when page is changed */
  onPageChange?: (number: number) => void;
  /** Custom component to render in the pagination */
  itemRender?: (
    current: number,
    type: any,
    element: React.ReactNode,
    extra: { disabled: boolean; isActive: boolean }
  ) => React.ReactNode;
}
const Pagination = ({
  totalPages,
  siblings,
  iconLeft,
  iconRight,
  previousLabel = false,
  nextLabel = false,
  onPageChange,
  position = 'center',
  itemRender,
  ...rest
}: PaginationInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const [active, setActive] = useState<number>(1);
  const [pages, setPages] = useState<any[]>([]);

  function defaultItemRender(
    page: number,
    type: string,
    content: any,
    extra: { disabled: boolean; isActive: boolean }
  ) {
    return <button disabled={extra?.disabled}>{content}</button>;
  }
  let renderButton = itemRender ? itemRender : defaultItemRender;

  const getPage = (page: number) => {
    let extra = {
      isActive: page === active,
      disabled: false,
    };
    let onclick = () => goToPage(page);
    if (!(typeof page === 'number')) {
      // in this case page is ...
      onclick = () => {};
      extra = { ...extra, disabled: true };
    }
    const button = renderButton(page, 'page', page, extra);
    return React.isValidElement(button)
      ? React.cloneElement<any>(button, {
          onClick: onclick,
          title: page.toString(),
        })
      : button;
  };

  const getItemIcon = (icon: any, label: string) => {
    let iconNode = icon;
    if (typeof icon === 'function') {
      iconNode = React.createElement(icon);
    }
    return iconNode;
  };

  const getPrevious = () => {
    let page = active - 1;
    if (page < 0) {
      page = 0;
    }
    const icon = iconLeft ? iconLeft : '<';
    const prevButton = renderButton(page, 'prev', getItemIcon(icon, 'prev page'), {
      isActive: false,
      disabled: 0 === page,
    });
    return React.isValidElement(prevButton)
      ? React.cloneElement<any>(prevButton, {
          onClick: () => {
            goToPage(page);
          },
          title: page.toString(),
        })
      : prevButton;
  };
  const getNext = () => {
    let page = active + 1;
    if (page > totalPages) {
      page = totalPages;
    }
    const icon = iconRight ? iconRight : '>';
    const nextButton = renderButton(page, 'next', getItemIcon(icon, 'next page'), {
      isActive: false,
      disabled: active === totalPages,
    });

    return React.isValidElement(nextButton)
      ? React.cloneElement<any>(nextButton, {
          onClick: () => {
            goToPage(page);
          },
          title: page.toString(),
        })
      : nextButton;
  };

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
  }, [totalPages]);
  const goToPage = (pageNumber: number) => {
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
          if (siblings <= 0) {
            setPages(['...', pageNumber, '...']);
          } else {
            setPages(['...', pageNumber - 1, pageNumber, pageNumber + 1, '...']);
          }
          break;
      }
    }
    setActive((d) => pageNumber);
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };
  return totalPages > 0 ? (
    <div {...rest}>
      {totalPages > 1 && getPrevious()}
      {getPage(1)}
      {pages.map((page: any, index: number) => (
        <React.Fragment key={`${index}-page-${page}`}>{getPage(page)}</React.Fragment>
      ))}
      {totalPages > 1 && getPage(totalPages)}
      {totalPages > 1 && getNext()}
    </div>
  ) : null;
};
export default Pagination;
