import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchStream } from '../../actions'


class StreamShow extends Component {

  componentDidMount(){
    if (!this.props.stream) {
      const id = this.props.match.params.id
      return this.props.fetchStream(id)
    }
    return
  }


  render(){
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    let { title, description } = this.props.stream

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return ({stream: state.streams[ownProps.match.params.id]})
}
export default connect(mapStateToProps, {fetchStream})(StreamShow)
