// @flow
import cli from '../'

const statelessNoProps = `
// @flow
import React from 'react'

const Component = props => (
  <div className="test">
    This has no props used.
  </div>
)

export default Component
`

const statelessProps = `
// @flow
import React from 'react'

const Component = (props: { test: string }) => (
  <div className="test">
    {props.test}
  </div>
)

export default Component
`

const pureNoProps = `
// @flow
import React, { PureComponent } from 'react'

class Component extends PureComponent {

  render () {

    return (
      <div className="test">
        This uses no props
      </div>
    )

  }

}

export default Component
`

const pureProps = `
// @flow
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Component extends PureComponent {

  render () {

    return (
      <div className="test">
        {this.props.test}
      </div>
    )

  }

}

Component.propTypes = {
  test: PropTypes.string.isRequired,
}

export default Component
`


it('prefer-stateless-function: stateless, no props', () => {

  const results = cli.executeOnText(statelessNoProps)
    .results[0].messages

  expect(results).toEqual([])

})


it('prefer-stateless-function: stateless, with props', () => {

  const results = cli.executeOnText(statelessProps)
    .results[0].messages

  expect(results).toEqual([])

})


it('prefer-stateless-function: pure, no props', () => {

  const results = cli.executeOnText(pureNoProps)
    .results[0].messages

  expect(results).toEqual([])

})


it('prefer-stateless-function: pure, with props', () => {

  const results = cli.executeOnText(pureProps)
    .results[0].messages

  expect(results).toEqual([])

})
