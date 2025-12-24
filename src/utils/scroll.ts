/**
 * Scroll to a section smoothly by its ID
 */
export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Get the current scroll position
 */
export const getScrollPosition = (): number => {
  return window.scrollY || document.documentElement.scrollTop;
};

/**
 * Check if an element is in the viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
