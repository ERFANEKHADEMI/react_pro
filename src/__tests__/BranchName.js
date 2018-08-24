import React from 'react'
import BranchName from '../BranchName'
import {render, rendersClass} from '../utils/testing'
import {COMMON} from '../system-props'

describe('BranchName', () => {
  xit('is a system component', () => {
    expect(BranchName.systemComponent).toEqual(true)
  })

  it('renders an <a> by default', () => {
    expect(render(<BranchName />).type).toEqual('a')
  })

  it('renders class="branch-name"', () => {
    expect(render(<BranchName />).props.className).toContain('branch-name')
  })

  it('respects the "is" prop', () => {
    expect(render(<BranchName is="span" />).type).toEqual('span')
  })

  it('renders href={null} if "is" != "a"', () => {
    expect(render(<BranchName is="span" href="#" />).props.href).toEqual(null)
  })

  it('implements common system props', () => {
    expect(BranchName).toImplementSystemProps(COMMON)
  })
})
