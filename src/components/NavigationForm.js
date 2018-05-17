import React from 'react';
import { Field, reduxForm } from 'redux-form'

let NavigationForm = ({handleSubmit, onClick}) => (
  <nav>
    <i title="Home" onClick={() => onClick(null, '')} className="fa fa-home"/>
    <form id="ldpNavigation" className="NavForm-input" onSubmit={handleSubmit}>
      <Field name="identifier" placeholder="Enter Identifier" component="input" size="50" type="text"/>
      <button>Go</button>
    </form>
  </nav>
)

NavigationForm = reduxForm({
  form: 'resource'
})(NavigationForm)

export default NavigationForm
