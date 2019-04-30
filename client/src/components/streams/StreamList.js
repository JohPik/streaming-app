import React, {Component} from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchStreams } from '../../actions'


class StreamList extends Component {

  componentDidMount(){
    this.props.fetchStreams()
  }

// Long Version
/*
  renderList = () => {
    return (
      this.props.streams.map( el => {
        return (
          <div key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
          </div>
        )}
      )
    )
  }
  */

// Short Version
renderList = () =>
    this.props.streams.map( stream =>
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream.userId)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          {/* Buttons Should be displayed here but because of semantic UI add them to the top */}
          {/* {this.renderAdmin(stream.userId)} */}
        </div>
      )

renderAdmin = (streamID) => {
  if (streamID === this.props.currentUserId){
    return (
      <div className="right floated content">
        <Link to="/streams/edit" className="ui button primary">EDIT</Link>
        <Link to="/streams/delete" className="ui button negative">DELETE</Link>
      </div>
    )
  }
}

renderCreate = () => {
  if (this.props.isSignedIn){
    return (
      <div style={{ textAlign: 'right'}}>
        <Link to="/streams/new" className="ui button primary">CREATE STREAM</Link>
      </div>
    )
  }
}

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }

}



const mapStateToProps = (state) => {
    return {
      streams: Object.values(state.streams),
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
