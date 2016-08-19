// import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PageActions from '../actions/PageActions'
import OnOff from '../components/OnOff'


function mapStateToProps(state) {
  return {
    onOff: state.onOff
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OnOff)
