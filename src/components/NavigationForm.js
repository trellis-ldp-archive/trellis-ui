import React from 'react';

class NavigationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(evt) {
    this.setState({identifier: evt.target.value})
  }

  handleSubmit(evt) {
    this.props.onSubmit(this.state.identifier);
    evt.preventDefault();
    this.setState({identifier: ''});
  }

  render() {
    return (
      <nav>
        <i title="Home" onClick={this.handleSubmit} className="fa fa-home"/>
        <form id="ldpNavigation" className="NavForm-input" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.identifier} onChange={this.handleInputChange} size="50"/>
          <button>Go</button>
        </form>
      </nav>);
  }
}

export default NavigationForm
