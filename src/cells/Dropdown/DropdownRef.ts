/* istanbul ignore file */

export const refs = {
  clickOutsideHandler: (
    event: any,
    activatorRef: any,
    dropdownListRef: any,
    setIsOpen: Function,
  ) => {
    if (dropdownListRef.current && activatorRef.current) {
      if (
        dropdownListRef.current.contains(event.target)
        || activatorRef.current.contains(event.target)
      ) {
        return;
      }
    }
    setIsOpen(false);
  },
  clickHandler: (
    setIsOpen: Function,
    isOpen: boolean,
    dropdownListRef: any,
    wrapperRef: any,
  ) => {
    setIsOpen(!isOpen);
    if (dropdownListRef && dropdownListRef.current && wrapperRef.current) {
      const bounding = dropdownListRef.current.getBoundingClientRect();
      const bottom = wrapperRef.current.clientHeight || '2.4rem';
      if (
        bounding.bottom
        > (window.innerHeight || document.documentElement.clientHeight)
      ) {
        // eslint-disable-next-line no-param-reassign
        dropdownListRef.current.style.bottom = `calc(${bottom}px + 0.5rem`;
      }
    }
  },
};
