import React from 'react'
import { connect } from 'react-redux'

import { startLogout } from '../actions/auth'
import { setNavOpen } from '../actions/nav'

export const Header = (props) => {
  const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg'

  const onClick = () => {
    const isNavOpen = !props.isNavOpen
    document.body.classList.toggle('is-nav-open', isNavOpen)
    props.setNavOpen()
  }
  return (
    <header>
      <div className="header">
        <div className="header__content">
          <img className="header__nav-toggle" src={navImageSrc} onClick={onClick}/>
          <h1 className="header__title">Notes</h1>
          <button className="button button--link-text" onClick={props.startLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  isNavOpen: state.isNavOpen
})

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  setNavOpen: () => dispatch(setNavOpen())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
