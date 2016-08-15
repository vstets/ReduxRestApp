// import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PageActions from '../actions/PageActions'
import ItemsList from '../components/ItemsList'


function mapStateToProps(state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
