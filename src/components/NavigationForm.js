import React from 'react';
import { Field, reduxForm } from 'redux-form'

let NavigationForm = ({handleSubmit}) => (
  <form className="Form-input" onSubmit={handleSubmit}>
    <Field name="identifier" placeholder="Enter Identifier" component="input" size="50" type="text"/>
    <button>Go</button>
  </form>
)

NavigationForm = reduxForm({
  form: 'resource'
})(NavigationForm)

export default NavigationForm
