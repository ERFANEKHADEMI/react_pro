/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import {Meta} from '@storybook/react'

import {BaseStyles, Box, Portal, registerPortalRoot} from '..'

let renderedOnce = false
export default {
  title: 'Generic behaviors/Portal',
  component: Portal,
  decorators: [
    Story => {
      React.useEffect(() => {
        if (renderedOnce) {
          window.location.reload()
        } else {
          renderedOnce = true
        }
      })
      return (
        <BaseStyles>
          <Box>
            <em>
              Note: Because Portal registers portal roots globally, we must <strong>refresh the page</strong> after
              switching between Portal stories. This should happen automatically.
            </em>
          </Box>
          <Story />
        </BaseStyles>
      )
    }
  ],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    }
  }
} as Meta

export const defaultPortal = () => (
  <>
    Root position
    <Box bg="red.2" p={3}>
      Outer container
      <Box bg="green.2" p={3}>
        Inner container
        <Portal>
          Portaled content rendered at document root, even outside of <code>&lt;BaseStyles&gt;</code>.
        </Portal>
      </Box>
    </Box>
  </>
)

export const customPortalRootById = () => (
  <>
    Root position
    <Box bg="red.2" p={3} id="__primerPortalRoot__">
      Outer container
      <Box bg="green.2" p={3}>
        Inner container
        <Portal>Portaled content rendered at the outer container.</Portal>
      </Box>
    </Box>
  </>
)

export const CustomPortalRootByRegistration: React.FC<Record<string, never>> = () => {
  const outerContainerRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current)
      setMounted(true)
    }
  }, [outerContainerRef])
  return (
    <>
      Root position
      <Box bg="red.2" p={3} ref={outerContainerRef}>
        {mounted && (
          <>
            Outer container
            <Box bg="green.2" p={3}>
              Inner container
              <Portal>Portaled content rendered at the outer container.</Portal>
            </Box>
          </>
        )}
      </Box>
    </>
  )
}

export const MultiplePortalRoots: React.FC<Record<string, never>> = () => {
  const outerContainerRef = React.useRef<HTMLDivElement>(null)
  const innerContainerRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement && innerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current, 'outer')
      registerPortalRoot(innerContainerRef.current, 'inner')
      setMounted(true)
    }
  }, [outerContainerRef])
  return (
    <>
      Root position
      <Box bg="red.2" p={3} ref={outerContainerRef}>
        Outer container
        <Box bg="green.2" p={3} ref={innerContainerRef}>
          {mounted && (
            <>
              <Portal containerName="outer">Portaled content rendered at the outer container.</Portal>
              <Portal containerName="inner">Portaled content rendered at the end of the inner container.</Portal>
              <Portal>
                Portaled content rendered at document root, even outside of <code>&lt;BaseStyles&gt;</code>.
              </Portal>
            </>
          )}
          Inner container
        </Box>
      </Box>
    </>
  )
}
