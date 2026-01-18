import { useCallback, useRef } from 'react';

interface KeyboardNavigationOptions {
  onEnter?: () => void;
  onEscape?: () => void;
  onArrowKey?: (direction: 'up' | 'down' | 'left' | 'right') => void;
  onTab?: (shiftKey: boolean) => void;
  enabled?: boolean;
}

export const useKeyboardNavigation = (options: KeyboardNavigationOptions = {}) => {
  const { onEnter, onEscape, onArrowKey, onTab, enabled = true } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      // Only handle arrow keys for navigation, let other keys work normally
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          const direction = event.key.replace('Arrow', '').toLowerCase() as
            | 'up'
            | 'down'
            | 'left'
            | 'right';
          onArrowKey?.(direction);
          break;

        case 'Enter':
          event.preventDefault();
          onEnter?.();
          break;

        case 'Escape':
          event.preventDefault();
          onEscape?.();
          break;

        case 'Tab':
          onTab?.(event.shiftKey);
          // Don't prevent default - allow normal tab navigation
          break;

        default:
          break;
      }
    },
    [enabled, onEnter, onEscape, onArrowKey, onTab]
  );

  // Function to add keyboard navigation to specific elements
  const addKeyboardNavigation = useCallback(
    (element: HTMLElement | null) => {
      if (!element || !enabled) return;

      element.addEventListener('keydown', handleKeyDown);

      return () => {
        element.removeEventListener('keydown', handleKeyDown);
      };
    },
    [handleKeyDown, enabled]
  );

  return { addKeyboardNavigation };
};

/**
 * Hook for managing focus between multiple form elements
 */
export const useFocusManagement = (elementIds: string[]) => {
  const currentFocusIndex = useRef(0);

  const focusElement = useCallback(
    (index: number) => {
      const element = document.getElementById(elementIds[index]);
      if (element && element instanceof HTMLSelectElement) {
        element.focus();
        currentFocusIndex.current = index;
      }
    },
    [elementIds]
  );

  const focusNext = useCallback(() => {
    const nextIndex = (currentFocusIndex.current + 1) % elementIds.length;
    focusElement(nextIndex);
  }, [elementIds.length, focusElement]);

  const focusPrevious = useCallback(() => {
    const prevIndex =
      currentFocusIndex.current === 0 ? elementIds.length - 1 : currentFocusIndex.current - 1;
    focusElement(prevIndex);
  }, [elementIds.length, focusElement]);

  const focusFirst = useCallback(() => {
    focusElement(0);
  }, [focusElement]);

  const focusLast = useCallback(() => {
    focusElement(elementIds.length - 1);
  }, [elementIds.length, focusElement]);

  const updateCurrentFocusIndex = useCallback(
    (elementId: string) => {
      const index = elementIds.indexOf(elementId);
      if (index !== -1) {
        currentFocusIndex.current = index;
      }
    },
    [elementIds]
  );

  return {
    focusNext,
    focusPrevious,
    focusFirst,
    focusLast,
    focusElement,
    updateCurrentFocusIndex,
    currentFocusIndex: currentFocusIndex.current,
  };
};
