import React from 'react'
import {iterateFocusableElements} from '@primer/behaviors/utils'
import {useMenuInitialFocus} from './useMenuInitialFocus'
import {useTypeaheadFocus} from './useTypeaheadFocus'
import {MenuContextProps} from '../ActionMenu'

/**
 * Keyboard navigation is a mix of 4 hooks
 * 1. useMenuInitialFocus
 * 2. useTypeaheadFocus
 * 3. useCloseMenuOnTab
 * 4. useMoveFocusToMenuItem
 */
export const useMenuKeyboardNavigation = (
  open: boolean,
  onOpen: MenuContextProps['onOpen'],
  onClose: MenuContextProps['onClose'],
  containerRef: React.RefObject<HTMLElement>,
  anchorRef: React.RefObject<HTMLElement>
) => {
  const {openWithFocus} = useMenuInitialFocus(open, onOpen, containerRef, anchorRef)
  useTypeaheadFocus(open, containerRef, anchorRef)
  useCloseMenuOnTab(open, onClose, containerRef, anchorRef)
  useMoveFocusToMenuItem(open, containerRef, anchorRef)

  return {openWithFocus}
}

/**
 * When Tab or Shift+Tab is pressed, the menu should close
 * and the focus should naturally move to the next item
 */
const useCloseMenuOnTab = (
  open: boolean,
  onClose: MenuContextProps['onClose'],
  containerRef: React.RefObject<HTMLElement>,
  anchorRef: React.RefObject<HTMLElement>
) => {
  React.useEffect(() => {
    const container = containerRef.current
    const anchor = anchorRef.current

    const handler = (event: KeyboardEvent) => {
      if (open && event.key === 'Tab') onClose?.('tab')
    }

    container?.addEventListener('keydown', handler)
    anchor?.addEventListener('keydown', handler)
    return () => {
      container?.removeEventListener('keydown', handler)
      anchor?.removeEventListener('keydown', handler)
    }
  }, [open, onClose, containerRef, anchorRef])
}

/**
 * When Arrow Keys are pressed and the focus is on the anchor,
 * focus should move to a menu item
 */
const useMoveFocusToMenuItem = (
  open: boolean,
  containerRef: React.RefObject<HTMLElement>,
  anchorRef: React.RefObject<HTMLElement>
) => {
  React.useEffect(() => {
    const container = containerRef.current
    const anchor = anchorRef.current

    const handler = (event: KeyboardEvent) => {
      if (!open || !container) return

      const iterable = iterateFocusableElements(container)

      if (event.key === 'ArrowDown') {
        const firstElement = iterable.next().value
        /** We push imperative focus to the next tick to prevent React's batching */
        setTimeout(() => firstElement?.focus())
      } else if (event.key === 'ArrowUp') {
        const elements = [...iterable]
        const lastElement = elements[elements.length - 1]
        setTimeout(() => lastElement.focus())
      }
    }

    anchor?.addEventListener('keydown', handler)
    return () => anchor?.addEventListener('keydown', handler)
  }, [open, containerRef, anchorRef])
}
