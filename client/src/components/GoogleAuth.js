import React, { Component } from 'react'

class GoogleAuth extends Component {

  componetDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '826681317156-r3q74kh9dtbk76n6dkql44q3ok58ve2i.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render(){
    return (
      <div>GoogleAuth</div>
    )
  }
}

export default GoogleAuth
