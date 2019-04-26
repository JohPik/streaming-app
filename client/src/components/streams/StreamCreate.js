import React, { Component } from 'react'
// Field is capitalise because it is a React component
// redux form on the other hand is a function
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {


//long version
  // renderInput(formProps){
  //   return <input {...formProps.input}/>
  // }
//destructing version
  renderInput({ input, label, meta }){ //Important meta contains error message
      return (
      <div className="field">
        <label>{label}</label>
        <input {...input}/>
        <div>{meta.error}</div>
      </div>
      )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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


  /*render(){
    return (
      <form>
        <Field
          name="title"
          component="input"
          type="text"
          placeholder="First Name"
          />
        <Field
          name="description"
          component="input"
          type="text"
          placeholder="First Name"
          />
      </form>
    )
  }*/
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
  form: 'streamCreate', //chosen name of the form
  validate: validateForm
})(StreamCreate)
