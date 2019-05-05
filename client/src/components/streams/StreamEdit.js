import React, { Component } from "react"
import { connect } from 'react-redux'

import { fetchStream } from '../../actions'





class StreamEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchStream(id)
  }

  render(){
    console.log(this.props);
      if (!this.props.stream) {
        return <div>...loading</div>
      }
    return(
      <div>{this.props.stream.title}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchStream} )(StreamEdit)
