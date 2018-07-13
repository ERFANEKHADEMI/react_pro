import React from 'react'
import PropTypes from 'prop-types'
import {MergeStatus, CaretBox} from '../../src'
import MergeDetail from './MergeDetail'
import MergeActions from './MergeActions'

const stateColorMap = {
  ready: 'green',
  invalid: 'invalid',
  merged: 'purple',
  pending: 'yellow'
}

const MergeBox = ({state, repoUrl, branchName, numCommits}) => {
  return (
    <div className="d-flex flex-items-start">
      <MergeStatus state={state} />
      <CaretBox ml={3} border={[true, stateColorMap[state]]} caret="left-top">
        <MergeDetail state={state} />
        <MergeActions state={state} numCommits={numCommits} repoUrl={repoUrl} branchName={branchName} />
      </CaretBox>
    </div>
  )
}

MergeBox.propTypes = {
  branchName: PropTypes.string.isRequired,
  numCommits: PropTypes.number.isRequired,
  repoUrl: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['ready', 'invalid', 'merged', 'pending']).isRequired
}

export default MergeBox
