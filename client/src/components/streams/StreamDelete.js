import React, { Component, Fragment } from 'react'
import { connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream} from '../../actions'

class StreamDelete extends Component {

  componentDidMount() {
    if(!this.props.stream){
      const id = this.props.match.params.id
      return this.props.fetchStream(id)
    }
    return
  }

  renderActions(){
    const streamId = this.props.match.params.id
    // refactored
    // const { id } = this.props.match.params.id
    return (
      <Fragment>
        <button
          className="ui negative button"
          onClick={ () => this.props.deleteStream(streamId) }>
          Delete
        </button>
        <Link
          className="ui button"
          to="/">
          Cancel
        </Link>
      </Fragment>
    )
  }


  renderContent(){
    if(!this.props.stream){
      return "Are you sure you want to delete this steam?"
    }
    return (
      <Fragment>
        Are you sure you want to delete this steam with title: <span className="stream-title-delete">{this.props.stream.title}</span>?
      </Fragment>
    )
  }

  render(){
    console.log(this.props);
    return (
        <Modal
          title="Delete Stream"
          content= {this.renderContent()}
          actions= {this.renderActions()}
          onDismiss = { () => history.push('/') }
          />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)
