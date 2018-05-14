import React, { Component } from 'react'
import '../assets/App.css'
import Header from './Header'
import NavigationForm from './NavigationForm'
import ResourceTypes from './ResourceTypes'
import Resource from './Resource'
import Config from '../Config'
import Versions from './Versions'
import Audit from './Audit'
import Client from '../utils/Client'

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      types: [],
      identifier: '',
      err: '',
      audit: '',
      resource: ''
    }
  }

  submit = values => {
    const url = Config.BASE_URL + (values.identifier || '');
    const client = new Client(url);
    client.fetchHead().then(headers => {
      const state = {
        identifier: values.identifier,
        err: headers.err,
        types: headers.types,
        mementos: headers.mementos,
        resource: '',
        audit: ''
      };
      if (headers.err) {
        this.setState(() => state);
      } else {
        Promise.all([client.fetchResource(), client.fetchAudit()]).then(([resource, audit]) => {
             state.resource = resource;
             state.audit = audit;
             this.setState(() => state)
           });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header identifier={this.state.identifier}/>
        <NavigationForm onSubmit={this.submit}/>
        <ResourceTypes types={this.state.types}/>
        <Resource text={this.state.resource} err={this.state.err}/>
        <Versions versions={this.state.mementos}/>
        <Audit text={this.state.audit}/>
      </div>
    );
  }
}

export default App
