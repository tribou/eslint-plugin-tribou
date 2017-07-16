// @flow
import cli from '../'


const reactComponent = `
// @flow
import React, { Component } from 'react'

class Test extends Component {

  render () {

    return (
      <div className="test">
        My test
      </div>
    )

  }

}

export default Test
`

const reactPureComponent = `
// @flow
import React, { PureComponent } from 'react'

class Test extends PureComponent {

  render () {

    return (
      <div className="test">
        My Test
      </div>
    )

  }

}

export default Test
`


it('Warns when using React.Component', () => {

  const results = cli.executeOnText(reactComponent)
    .results[0].messages

  expect(results).not.toEqual([])
  expect(results[0].ruleId).toEqual('no-restricted-syntax')
  expect(results[0].severity).toEqual(1)

})


it('Accepts React.PureComponent', () => {

  const results = cli.executeOnText(reactPureComponent)
    .results[0].messages

  expect(results).toEqual([])

})
