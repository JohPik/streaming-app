import React, { Component } from 'react'

class GoogleAuth extends Component {

  state = { isSignedIn: null }

/****  Manages Authentification by checking status every time componet is mounted  ****/
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      // Initialised the Auth Object
      window.gapi.client.init({
        clientId: '826681317156-r3q74kh9dtbk76n6dkql44q3ok58ve2i.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
          //reference to SignIn method
          this.auth = window.gapi.auth2.getAuthInstance();
          // Set State if Signed In status of user first time
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          })
          // IMPORTANT | listen() = Event listener provided by gapi ->
          // listen() takes callBack function that We choose
          // function gets automatically passed a boolean variale !
          // this variable is equal to loginUser Status - true or False!
          this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }


/*** Update State -> SigneIN ***/
// this Function is called when signeIn Status of user changes
onAuthChange = isSignedIn => this.setState({ isSignedIn });
//longer version
// onAuthChange = () => {
//   this.setState({ isSignedIn: this.auth.isSignedIn.get()})
// }


// SignIn SigOut Button
onSignInClick = () => {
  this.auth.signIn()
}

onSignOutClick = () => {
  this.auth.signOut()
}


/**** Render SignIn/SignOut Button ****/
  renderAuthButton(){
    if (this.state.isSignedIn === null) {
      return
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with google
        </button>
      )
    }
  }

  render(){
    console.log(this.state);
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }

}

export default GoogleAuth
