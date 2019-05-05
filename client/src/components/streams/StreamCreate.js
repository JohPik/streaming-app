import React, { Component } from 'react'
// Field is capitalise because it is a React component
// redux form on the other hand is a function
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render(){
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default connect(null, { createStream })(StreamCreate)
