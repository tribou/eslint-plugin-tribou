// @flow
import cli from '../../'

const text = `// @flow
import { connect } from 'react-redux'

const Home = {}

function mapStateToProps (state: Object): Object {

  const { init } = state

  return {
    init,
  }

}


export default connect(mapStateToProps)(Home)
`

it('React container Home.index.js', () => {

  const results = cli.executeOnText(text)
    .results[0].messages

  expect(results).toEqual([])

})
