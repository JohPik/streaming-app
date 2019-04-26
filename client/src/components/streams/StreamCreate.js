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
  renderInput({ input, label }){
      return (
      <div className="field">
        <label>{label}</label>
        <input {...input}/>
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

export default reduxForm({
  form: 'streamCreate' //chosen name of the form
})(StreamCreate)
