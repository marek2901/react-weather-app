import React, {Component} from 'react';
import '../styles/index.css';

import {connect} from 'react-redux'

import {triggerMainReq} from '../../actions/creators'

import CitySearchForm from '../forms/city-search-form'

class CitySearch extends Component {
  formSubmitted = () => {
    this.props.dispatch(triggerMainReq())
  }

  render() {
    return (<CitySearchForm handleSubmit={(e)=>{
      e.preventDefault()
      this.formSubmitted()
    }} />);
  }
}

CitySearch = connect()(CitySearch)

export default CitySearch;
