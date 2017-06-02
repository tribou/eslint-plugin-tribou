// @flow
import { connect } from 'react-redux'
import Home from './Home'


import type { GlobalReducerState, InitState } from '../reducer'

type HomeStateProps = {
  init: InitState,
}

export type Props = HomeStateProps


function mapStateToProps (state: GlobalReducerState): HomeStateProps {

  const { init } = state

  return {
    init,
  }

}


export default connect(mapStateToProps)(Home)
