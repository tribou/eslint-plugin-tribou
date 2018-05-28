// @flow
import cli from '../../'

const text = `// @flow
import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Link } from 'react-router'

const css = {}

const Home = (props: Object): React$Element<any> => (
  <div className={\`\${css.home} pt7 tc\`}>
    This is the app...
    <ul>
      <li>This is a test item</li>
    </ul>
    <Link to="/somewhere">A Link</Link>
  </div>
)


export default Home
`

it('React view component Home.js', () => {

  const results = cli.executeOnText(text)
    .results[0].messages

  expect(results).toEqual([])

})

export default text
