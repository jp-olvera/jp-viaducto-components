const documentTags = ['html', 'body'];

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
    if (
      result.length &&
      documentTags.includes((result[0] as Element).tagName.toLowerCase())
    ) {
      result.length = 0;
    }
    // last scrollable element will be the document
    result.push(document);
  }
  return result;
}
