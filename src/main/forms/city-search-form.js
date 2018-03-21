import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'

const validate = values => {
  const errors = {}
  if (!values['location']) {
    errors['location'] = 'Please provide city location'
  }
  return errors
}

const renderTextField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  ...custom
}) => (<TextField
  hintText={label}
  floatingLabelText={label}
  errorText={touched && error} {...input} {...custom}/>)

let CitySearchForm = props => {
  const {handleSubmit} = props
  return (<form onSubmit={handleSubmit}>
    <div>
      <Field name="location" component={renderTextField} label="Location"/>
    </div>
    <RaisedButton icon={<ActionSearch />} type="submit"/>
  </form>)
}

CitySearchForm = reduxForm({
  form: 'citySearchForm',
  validate,
  initialValues: {
    location: 'London'
  }
})(CitySearchForm)

export default CitySearchForm
