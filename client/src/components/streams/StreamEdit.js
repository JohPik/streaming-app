import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'

import StreamForm from './StreamForm'





class StreamEdit extends Component {
  componentDidMount() {
    if(!this.props.stream){
      const id = this.props.match.params.id
      return this.props.fetchStream(id)
    }
    return
  }

  onSubmit = (formValues) => {
    let streamId = this.props.stream.id
    this.props.editStream(streamId, formValues)
  }

  render(){
    // console.log("props:", this.props);
      if (!this.props.stream) {
        return <div>...loading</div>
      }
    return(
        <div>
          <h3>Edit Stream</h3>
          {/* IMPORTANT !!! Special Props for React Form */}
           {/*
             <StreamForm
             //Original Statement
               initialValues={title: this.props.stream.title, description: this.props.stream.description}
               onSubmit={this.onSubmit} />
             */}
          <StreamForm
            initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
            onSubmit={this.onSubmit} />
        </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
