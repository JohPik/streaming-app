import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {

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

          /*** Set State if Signed In status of user first time ***/
          // BEFORE REDUX
          // this.setState({
          //   isSignedIn: this.auth.isSignedIn.get()
          // })

          this.onAuthChange(this.auth.isSignedIn.get())

          /*** IMPORTANT | listen() = Event listener provided by gapi -> ***/
          // listen() takes callBack function that We choose
          // function gets automatically passed a boolean variale !
          // this variable is equal to loginUser Status - true or False!
          this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }


/*** Update State -> SigneIN ***/
// this Function is called when signeIn Status of user changes

onAuthChange = (isSignedIn) => {
  if(isSignedIn){
    this.props.signIn(this.auth.currentUser.get().getId())
  } else {
    this.props.signOut( )
  }
}

/** Shorter version Before using redux **/
// onAuthChange = isSignedIn => this.setState({ isSignedIn });
/** longer version **/
//  onAuthChange = () => {
//    this.setState({ isSignedIn: this.auth.isSignedIn.get()})
//  }


// SignIn SigOut Button
onSignInClick = () => {
  this.auth.signIn()
}

onSignOutClick = () => {
  this.auth.signOut()
}


/**** Render SignIn/SignOut Button ****/
  renderAuthButton(){
    switch (this.props.isSignedIn) {
      case true:
        return (
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon" />
            Sign Out
          </button>
        )
      case false:
        return(
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign In with google
          </button>
        )
      default: return

    }

    // if (this.props.isSignedIn === null) {
    //   return
    // } else if (this.props.isSignedIn) {
    //   return (
    //     <button onClick={this.onSignOutClick} className="ui red google button">
    //       <i className="google icon" />
    //       Sign Out
    //     </button>
    //   )
    // } else {
    //   return (
    //     <button onClick={this.onSignInClick} className="ui red google button">
    //       <i className="google icon" />
    //       Sign In with google
    //     </button>
    //   )
    // }
  }

  render(){
    console.log(this.props);
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("state",state);
  return {
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut})(GoogleAuth)
