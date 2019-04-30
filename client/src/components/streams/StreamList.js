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
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )

  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    )
  }

}



const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams)}
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
