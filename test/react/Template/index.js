// @flow
import { connect } from 'react-redux'
import Template from './Template'


type StateProps = {
  url: string,
}

const mapStateToProps = ({ env: { ROOT_URL } }): StateProps =>
  ({ url: ROOT_URL })


type DispatchProps = {
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Template)
export type ReduxProps = StateProps & DispatchProps
