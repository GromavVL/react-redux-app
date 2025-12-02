import React from 'react'
import { connect } from 'react-redux'
import { changeTheme } from '../../store/slice/themeSlice'

function ThemeSwicher ({ isLight, setNewTheme }) {
  const themeChangeHandler = () => {
    setNewTheme(!isLight)
  }
  return (
    <button onClick={themeChangeHandler}>
      {isLight ? 'Set Dark' : 'Set Light'}
    </button>
  )
}

const mapSateToProps = state => {
  return state.theme
}

const mapDispatchToProps = dispatch => {
  return {
    setNewTheme: value => dispatch(changeTheme(value))
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(ThemeSwicher)
