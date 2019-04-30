import React, {Component} from "react"
import { connect } from "react-redux"
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
        <buton className="ui button primary">EDIT</buton>
        <buton className="ui button negative">DELETE</buton>
      </div>
    )
  }
}

renderCreate = () => {

}

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  }

}



const mapStateToProps = (state) => {
    return {
      streams: Object.values(state.streams),
      currentUserId: state.auth.userId,
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
