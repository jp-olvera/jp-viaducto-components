const documentTags = ['html', 'body'];

/**
 * Returns a list of all scrollable parents for an Element
 */
export function findScrollParents(element: Element | null) {
  const result: (Element | Document)[] = [];
  if (element && element.parentNode) {
    let parent = <Element>element.parentNode;
    while (parent && parent.getBoundingClientRect) {
      const rect = parent.getBoundingClientRect();
      // 10px is to account for borders and scrollbars in a lazy way
      if (rect.height && parent.scrollHeight > rect.height + 10) {
        // add if has vertical scroll
        result.push(parent);
      } else if (rect.width && parent.scrollWidth > rect.width + 10) {
        // add if don't have vertical scroll but horizontal
        result.push(parent);
      }
      parent = <Element>parent.parentNode;
    }
    if (result.length && documentTags.includes((result[0] as Element).tagName.toLowerCase())) {
      result.length = 0;
    }
    // last scrollable element will be the document
    result.push(document);
  }
  return result;
}

/**
 * Returns the top-level document object of the node.
 */
export function ownerDocument(node: Node | null | undefined): Document {
  return (node && node.ownerDocument) || document;
}

export function ownerWindow(node: Node | undefined): Window {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

/**
 * Tells if the window of the top-level document of the element has vertical scroll
 */
export function isWindowOverflowing(container: Element): boolean {
  const doc = ownerDocument(container);
  return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
}

export function getScrollbarSize(doc: Document): number {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth#example
  const documentWidth = doc.documentElement.clientWidth; // the viewport's width, scroll width is not considered
  return window ? Math.abs(window.innerWidth - documentWidth) : 0;
  // window.innerWidth returns the interior width of the window in pixels.
}

export function getPaddingRight(element: Element): number {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
