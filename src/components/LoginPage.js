import React from 'react'
import { connect } from 'react-redux'

import { startGoogleLogin , startFacebookLogin } from '../actions/auth'

export const LoginPage = ({ startGoogleLogin , startFacebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tag line for app.</p>
      <button className="button" onClick={ startGoogleLogin }>Login with Google</button>
      <button className="button button--login" onClick={ startFacebookLogin } >Login with Facebook</button>      
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)