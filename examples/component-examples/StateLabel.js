import React from 'react'
import Octicon, {GitBranch} from '@githubprimer/octicons-react'
import {LiveEditor} from '@compositor/kit'
import {Block, StateLabel} from '../../src'
import ExampleHeading from '../doc-components/ExampleHeading'

const example1 = `<Block mb={2}>
  <StateLabel state="open">Open</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel state="closed">Closed</StateLabel>
</Block>
<Block mb={4}>
  <StateLabel state="merged">Merged</StateLabel>
</Block>`

const example2 = `<Block mb={2}>
  <StateLabel>Unknown</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel state="open">Open</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel state="closed">Closed</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel state="merged">Merged</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel state="reopened">Reopened</StateLabel>
</Block>
`

const example3 = `<Block mb={2}>
  <StateLabel scheme="invalid">Invalid</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel scheme="green">Green</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel scheme="red">Red</StateLabel>
</Block>
<Block mb={2}>
  <StateLabel scheme="purple">Purple</StateLabel>
</Block>`

const example4 = `<Block mb={2}>
  <StateLabel mr={2} small>Unknown</StateLabel>
  <StateLabel mr={2} small state="open">
    Open
  </StateLabel>
  <StateLabel mr={2} small state="closed">
    Closed
  </StateLabel>
  <StateLabel mr={2} small state="merged">
    Merged
  </StateLabel>
  <StateLabel mr={2} small state="reopened">
    Reopened
  </StateLabel>
</Block>`

const example5 = `<Block mb={2}>
  <StateLabel mr={2} small scheme="invalid">
    Invalid
  </StateLabel>
  <StateLabel mr={2} small scheme="green">
    Green
  </StateLabel>
  <StateLabel mr={2} small scheme="red">
    Red
  </StateLabel>
  <StateLabel mr={2} small scheme="purple">
    Purple
  </StateLabel>
  <StateLabel mr={2} small scheme="green" icon={<Octicon icon={GitBranch} />}>
    Custom Octicon
  </StateLabel>
</Block>`

const StateLabelExample = {
  name: 'StateLabel',
  element: (
    <div>
      <LiveEditor code={example1} scope={{Block, StateLabel}} />
      <Block mb={4}>
        <ExampleHeading>By state (Octicons built in)</ExampleHeading>
        <LiveEditor code={example2} scope={{Block, StateLabel}} />
      </Block>
      <Block mb={4}>
        <ExampleHeading>By color</ExampleHeading>
        <LiveEditor code={example3} scope={{Block, StateLabel}} />
      </Block>
      <Block mb={4}>
        <ExampleHeading>Small, by state</ExampleHeading>
        <LiveEditor code={example4} scope={{Block, StateLabel}} />
      </Block>
      <Block mb={4}>
        <ExampleHeading>Small, by color</ExampleHeading>
        <LiveEditor code={example5} scope={{Block, StateLabel, Octicon, GitBranch}} />
      </Block>
    </div>
  )
}

export default StateLabelExample
