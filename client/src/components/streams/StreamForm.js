import React, { Component } from 'react'

// Field is capitalise because it is a React component
// redux form on the other hand is a function
import { Field, reduxForm } from 'redux-form'

class StreamForm extends Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }


//destructing version
  renderInput = ({ input, label, meta }) => { //Important meta contains error message
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
      return (
      <div className={className}>{/* IMPORTANT class error is only here because of semantic UI */}
        <label>{label}</label>
        <input {...input} autoComplete="off"/> {/* {...input} passes the props from input to the </input>*/}
        {/* Manages how error messages display */}
        {this.renderError(meta)}
      </div>
      )
  }


  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">{/* IMPORTANT class error is only here because of semantic UI */}
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
            />
          <button className="ui button primary">submit</button>
      </form>
    )
  }

}

// Handles Form error
const validateForm = (formValues) => {
  const errors = {}

  if(!formValues.title){
    errors.title = 'You must enter a title'
  }

  if(!formValues.description){
    errors.description = 'You must enter a description'
  }

  return errors
}


export default reduxForm({
  form: 'streamFrom', //chosen name of the form
  validate: validateForm
})(StreamForm)
