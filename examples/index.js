import React from 'react'
import {
  Detail,
  Example,
  Library
} from '@compositor/kit'
import {
  Avatar,
  Block,
  Box,
  Button,
  ButtonDanger,
  ButtonPrimary,
  ButtonOutline,
  ButtonLink,
  BranchName,
  CounterLabel,
  Details,
  DonutChart,
  DonutSlice,
  Flash,
  Heading,
  Label,
  Link,
  Page,
  StateLabel,
  Text,
  Tooltip,
  theme
} from '../src'
import Octicon from '@github/octicons-react'

import Swatch from './Swatch'
import GitHubAvatar from './GitHubAvatar'

const Index = props => (
  <Page>
    <Library title={<Text fontSize={3}>primer-react</Text>}>
      <Example name='Avatar'>
        <Block mb={2}>
          <GitHubAvatar username='primer' size={128} />
        </Block>
        <Block mb={2}>
          <GitHubAvatar username='github' size={64} />
        </Block>
        <Block mb={2}>
          <GitHubAvatar username='reactjs' size={32} />
          {' '}
          <GitHubAvatar username='npm' />
        </Block>
      </Example>
      <Example name='Block'>
        <table>
          {[
            // 'black',
            'white',
            'gray-dark',
            'gray',
            'gray-light',
            'blue',
            'blue-light',
            'green',
            'green-light',
            'red',
            'red-light',
            'yellow',
            'yellow-light',
            'purple',
            'purple-light',
            // 'shade-gradient'
          ].map((bg, i, style) => (
            <tr key={i}>
              <td>
                <Text>{`bg='${bg}'`}</Text>
              </td>
              {['white', 'gray', 'black'].map((fg, j) => (
                <td>
                  <Block p={3} mb={2} bg={bg}>
                    <Text color={fg}>{fg}</Text>
                  </Block>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </Example>
      <Example name='BranchName'>
        <BranchName>a_new_feature_branch</BranchName>
        <Detail>
          <Heading tag='h3' fontSize={3} mb={2} mt={3}>Linked BranchName</Heading>
          <BranchName tag='a' href='/'>a_new_feature_branch</BranchName>
          <Heading tag='h3' fontSize={3} mb={2} mt={3}>BranchName with Octicon</Heading>
          <BranchName><Octicon name='git-branch' /> a_new_feature_branch</BranchName>
        </Detail>
      </Example>
      <Example name='Buttons'>
        <Block mb={2}>
          <Button> Button </Button>
        </Block>
        <Block mb={2}>
          <Button size='small'> Button small </Button>
        </Block>
        <Block mb={2}>
          <Button size='large'> Button large </Button>
        </Block>
        <Block mb={2}>
          <ButtonDanger> ButtonDanger </ButtonDanger>
        </Block>
        <Block mb={2}>
          <ButtonPrimary> ButtonPrimary </ButtonPrimary>
        </Block>
        <Block mb={2}>
          <ButtonOutline> ButtonOutline </ButtonOutline>
        </Block>
        <Block mb={2}>
          <Button block> Button block </Button>
        </Block>
        <Block mb={2}>
          <Button linkStyle> Button linkStyle </Button>
        </Block>
        <Block mb={2}>
          <ButtonLink href='https://www.goatslive.com/'>This is an {'<a>'} styled as a button</ButtonLink>
        </Block>
      </Example>
      <Example name='Colors'>
        {['gray', 'blue', 'green', 'purple', 'yellow', 'orange'].map((hue, i) => (
          <div className='d-flex' key={i}>
            {theme.colors[hue].map((color, j) => (
              <Swatch name={hue} index={j} key={j} color={color}/>
            ))}
          </div>
        ))}
        <div className='d-flex'>
          <Block bg='blue' p={4} m={1} />
          <Block bg='green' p={4} m={1} />
          <Block bg='purple' p={4} m={1} />
          <Block bg='yellow' p={4} m={1} />
          <Block bg='red' p={4} m={1} />
          <Block bg='white' p={4} m={1} border />
          <Block bg='gray' p={4} m={1} />
          <Block bg='gray-light' p={4} m={1} />
          <Block bg='blue-light' p={4} m={1} />
          <Block bg='purple-light' p={4} m={1} />
          <Block bg='red-light' p={4} m={1} />
        </div>
      </Example>
      <Example name='CounterLabel'>
        <CounterLabel>
          12
        </CounterLabel>
        <CounterLabel theme={'gray'}>
          13
        </CounterLabel>
        <CounterLabel theme={'gray-light'}>
          13
        </CounterLabel>
      </Example>
      <Example name='Details'>
        <Block mb={4}>
          <Heading tag='h2'>With static children</Heading>
          <Details>
            <summary className='btn'>Click me</summary>
            <p>This should show and hide</p>
          </Details>
        </Block>
        <Block my={4}>
          <Heading tag='h2'>With render prop</Heading>
          <Details>{({open, toggle}) => (
            <React.Fragment>
              <summary className='btn' onClick={toggle}>{open ? 'Hide' : 'Show'}</summary>
              <p>This should show and hide</p>
            </React.Fragment>
          )}
          </Details>
        </Block>
      </Example>
      <Example name='DonutChart'>
        <Box mb={2}>
          <Heading tag='h2' fontSize={3} mb={1}>With <Text mono>data</Text> prop</Heading>
          <DonutChart data={{error: 2, pending: 3, success: 5}} />
          {' '}
          <DonutChart data={{error: 1, pending: 4, success: 2}} />
          {' '}
          <DonutChart data={{pending: 2, success: 6}} />
          {' '}
          <DonutChart data={{pending: 0, success: 1}} />
          {' '}
          <DonutChart data={{pending: 1, queued: 1}} />
          {' '}
          <DonutChart data={{unknown: 1}} />
        </Box>
        <Box mb={2}>
          <Heading tag='h2' fontSize={3} mb={1}>With <Text mono>DonutSlice</Text> children</Heading>
          <DonutChart>
            <DonutSlice value={1} state='pending' />
            <DonutSlice value={1} state='success' />
            <DonutSlice value={1} state='error' />
          </DonutChart>
          {' '}
          <DonutChart>
            <DonutSlice value={1} state='error' />
            <DonutSlice value={4} state='pending' />
            <DonutSlice value={2} state='success' />
          </DonutChart>
          {' '}
          <DonutChart>
            <DonutSlice value={2} state='pending' />
            <DonutSlice value={6} state='success' />
          </DonutChart>
          {' '}
          <DonutChart>
            <DonutSlice value={0} state='pending' />
            <DonutSlice value={1} state='success' />
          </DonutChart>
          {' '}
          <DonutChart>
            <DonutSlice value={1} state='pending' />
            <DonutSlice value={1} state='queued' />
          </DonutChart>
          {' '}
          <DonutChart>
            <DonutSlice value={1} state='queued' />
          </DonutChart>
        </Box>
        <Box mb={2}>
          <Heading tag='h2' fontSize={3} mb={1}>With custom <Text mono>fill</Text> colors</Heading>
          <DonutChart>
            <DonutSlice value={1} fill={theme.colors.purple[0]} />
            <DonutSlice value={1} fill={theme.colors.purple[1]} />
            <DonutSlice value={1} fill={theme.colors.purple[2]} />
            <DonutSlice value={1} fill={theme.colors.purple[3]} />
            <DonutSlice value={1} fill={theme.colors.purple[4]} />
          </DonutChart>
        </Box>
      </Example>
      <Example name='Flash'>
        <Block mb={3}>
          <Flash> Flash </Flash>
        </Block>
        <Block mb={3}>
          <Flash yellow> Flash yellow </Flash>
        </Block>
        <Block mb={3}>
          <Flash red> Flash red </Flash>
        </Block>
        <Block mb={3}>
          <Flash green> Flash green </Flash>
        </Block>
        <Block mb={3}>
          <Flash full> Flash full </Flash>
        </Block>
      </Example>
      <Example name='Font sizes'>
        {[/* 7, 6, */ 5, 4, 3, 2, 1, 0].map((fontSize, i) => (
          <Text tag='div' key={i} fontSize={fontSize}>fontSize {fontSize}</Text>
        ))}
      </Example>
      <Example name='Heading'>
        <Heading mb={2}>Default Heading</Heading>
        <Detail>
          {[0, 1, 2, 3, 4, 5, /* 6, 7, */ '00-light', '0-light', '1-light', '2-light', '3-light'].map((fontSize, i) => (
            <Heading key={i} fontSize={fontSize} mb={2}>With fontSize={fontSize}</Heading>
          ))}
        </Detail>
      </Example>
      <Example name='Label'>
        <Block mb={3}>
          <Label>Default label</Label>
          <Label scheme='gray-darker'>Darker gray label</Label>
          <Label scheme='orange'>Orange label</Label>
          <Label scheme='green'>Green label</Label>
        </Block>
        <Block mb={3}>
          <Label outline>Default outline label</Label>
          <Label outline scheme='green'>Green outline label</Label>
        </Block>
      </Example>
      <Example name='Link'>
        <Link href='https://github.com'>
          Link
        </Link>
      </Example>
      <Example name='StateLabel'>
        <Block mb={2}>
          <StateLabel state='open'>Open</StateLabel>
        </Block>
        <Block mb={2}>
          <StateLabel state='closed'>Closed</StateLabel>
        </Block>
        <Block mb={4}>
          <StateLabel state='merged'>Merged</StateLabel>
        </Block>
        <Detail>
          <Block mb={4}>
            <Heading tag='h2' mb={1}>By state (Octicons built in)</Heading>
            <Block mb={2}>
              <StateLabel>Unknown</StateLabel>
            </Block>
            <Block mb={2}>
              <StateLabel state='open'>Open</StateLabel>
            </Block>
            <Block mb={2}>
              <StateLabel state='closed'>Closed</StateLabel>
            </Block>
            <Block mb={2}>
              <StateLabel state='merged'>Merged</StateLabel>
            </Block>
            <Block mb={2}>
              <StateLabel state='reopened'>Reopened</StateLabel>
            </Block>
          </Block>
          <Block mb={4}>
            <Heading tag='h2' mb={1}>By color</Heading>
            <Block mb={2}>
              <StateLabel scheme='invalid'>Invalid</StateLabel>
            </Block>
            <Block mb={2}>
              <StateLabel scheme='green'>Green</StateLabel>
            </Block>
            <Block mb={2}>
              <StateLabel scheme='red'>Red</StateLabel>
            </Block>
            <Block mb={2}>
              <StateLabel scheme='purple'>Purple</StateLabel>
            </Block>
          </Block>
          <Block mb={4}>
            <Heading tag='h2' mb={2}>Small, by state</Heading>
            <Block mb={2}>
              <span className='mr-2'>
                <StateLabel small>Unknown</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small state='open'>Open</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small state='closed'>Closed</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small state='merged'>Merged</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small state='reopened'>Reopened</StateLabel>
              </span>
            </Block>
          </Block>
          <Block mb={4}>
            <Heading tag='h2' mb={1}>Small, by color</Heading>
            <Block mb={2}>
              <span className='mr-2'>
                <StateLabel small scheme='invalid'>Invalid</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small scheme='green'>Green</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small scheme='red'>Red</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small scheme='purple'>Purple</StateLabel>
              </span>
              <span className='mr-2'>
                <StateLabel small scheme='green' icon={<Octicon name='git-branch'/>}>
                  Custom Octicon
                </StateLabel>
              </span>
            </Block>
          </Block>
        </Detail>
      </Example>
      <Example name='Text'>
        <Text tag='div'>Text</Text>
        <Text tag='div' fontWeight='bold'>Text bold</Text>
        <Text tag='div' color='green'>Text green</Text>
        <Text tag='div' lineHeight='condensed'>Text lineHeight "condensed"</Text>
        <Text tag='div' fontSize={4}>Text fontSize 4</Text>
        <Text tag='div' p={4}>Text padding 4</Text>
      </Example>
      <Example name='Tooltip'>
        <Box p={3}>
          <Tooltip text='Hello, Tooltip!'>Text with a tooltip</Tooltip>
        </Box>
        <Detail>
          <Heading tag='h3' fontSize={3} mb={2} mt={3}>Directions</Heading>
          {Tooltip.directions.map((d, i) => (
            <Box p={3}>
              <Tooltip text='Hello, Tooltip!' direction={d}>Tooltip direction={d}</Tooltip>
            </Box>
          ))}
          <Heading tag='h3' fontSize={3} mb={2} mt={3}>Alignment</Heading>
          <Box p={3}>
            <Tooltip text='Hello, Tooltip!' direction='ne' align='left'>Tooltip align left</Tooltip>
          </Box>
          <Heading tag='h3' fontSize={3} mb={2} mt={3}>Word wrap</Heading>
          <Box p={3}>
            <Tooltip text='Hello, Tooltip! This tooltip has a sentence that will wrap to a newline.' wrap  direction='ne' align='left'>Word wrapping tooltip</Tooltip>
          </Box>
          <Heading tag='h3' fontSize={3} mb={2} mt={3}>No Delay</Heading>
          <Box p={3}>
            <Tooltip noDelay text='Hello, Tooltip!'>Text with a tooltip</Tooltip>
          </Box>
        </Detail>
      </Example>
    </Library>
  </Page>
)

export default Index
