import React from 'react'
import Client from '../utils/Client'
import { LDP } from '../utils/Vocab'
import Config from '../Config'

class Editor extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      content: '',
      slug: '',
      contentType: undefined,
      ldpType: undefined
    }

    this.renderEditor = this.renderEditor.bind(this);
    this.renderDelete = this.renderDelete.bind(this);
    this.renderCreate = this.renderCreate.bind(this);
    this.renderUpdate = this.renderUpdate.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleContentTypeChange = this.handleContentTypeChange.bind(this);
    this.handleLdpTypeChange = this.handleLdpTypeChange.bind(this);
    this.handleSlugChange = this.handleSlugChange.bind(this);
  }

  handleUpdate(evt) {
    const client = new Client();
    client.updateResource(Config.BASE_URL + (this.props.identifier || ''), this.state.content, this.state.contentType)
        .then(() => this.props.onSubmit(this.props.identifier));

    document.getElementById('modal-root').style.display = 'none';
    evt.preventDefault();
    this.reset();
  }

  reset() {
    this.setState({
      content: '',
      slug: '',
      contentType: undefined,
      ldpType: undefined
    })
  }

  handleContentChange(evt) {
    this.setState({content: evt.target.value});
  }

  handleContentTypeChange(evt) {
    this.setState({contentType: evt.target.value});
  }

  handleLdpTypeChange(evt) {
    this.setState({ldpType: evt.target.value});
  }

  handleSlugChange(evt) {
    this.setState({slug: evt.target.value.replace(" ", "-")});
  }

  handleCreate(evt) {
    const client = new Client();
    client.createResource(Config.BASE_URL + (this.props.identifier || ''),
      this.state.content, this.state.ldpType, this.state.slug,
      this.state.contentType).then(res =>
        this.props.onSubmit(res.headers.get("Location").replace(Config.BASE_URL, "")));

    document.getElementById('modal-root').style.display = 'none';
    evt.preventDefault();
    this.reset();
  }

  handleDelete(evt) {
    const client = new Client();
    if (this.props.identifier && this.props.identifier !== '') {
      const parent = this.props.identifier.split('/').slice(0, -1).join('/');
      client.deleteResource(Config.BASE_URL + (this.props.identifier || ''))
        .then(() => this.props.onSubmit(parent));

      document.getElementById('modal-root').style.display = 'none';
      evt.preventDefault();
      this.reset();
    } else {
      alert("Sorry, I am cowardly refusing to delete the root resource");
    }
  }

  renderUpdate() {
    return (
      <div className="modal-text">
        <form onSubmit={this.handleUpdate}>
          <h2>Update {this.props.identifier}</h2>
          <select value={this.state.contentType} onChange={this.handleContentTypeChange}>
            <option value="application/sparql-update">Sparql-Update</option>
            <option value="text/turtle">Turtle</option>
          </select>
          <p>
            <textarea rows="10" cols="40" value={this.state.content}
              onChange={this.handleContentChange}></textarea>
          </p>
          <button>Update</button>
        </form>
      </div>
    )
  }

  renderCreate() {
    return (
      <div className="modal-text">
        <form onSubmit={this.handleCreate}>
          <h2>Create a new child resource</h2>
          <p>Resource Type: <select value={this.state.ldpType}
              onChange={this.handleLdpTypeChange}>
            <option value={LDP.RDFSource}>RDFSource</option>
            <option value={LDP.BasicContainer}>BasicContainer</option>
            <option value={LDP.DirectContainer}>DirectContainer</option>
            <option value={LDP.IndirectContainer}>IndirectContainer</option>
            <option value={LDP.NonRDFSource}>NonRDFSource</option>
          </select></p>
          <p>Content Type: <select value={this.state.contentType}
              onChange={this.handleContentTypeChange}>
              <option value="text/turtle">Turtle</option>
              <option value="application/ld+json">JSON-LD</option>
              <option value="application/n-triples">N-Triples</option>
            </select>
          </p>
          <p>identifier: <input value={this.state.slug}
              onChange={this.handleSlugChange} type="text"/></p>
          <p>
            <textarea rows="10" cols="60" value={this.state.content} onChange={this.handleContentChange} placeholder="Paste RDF (Turtle) here."></textarea>
          </p>
          <button>Create</button>
        </form>
      </div>
    )
  }

  renderDelete() {
    return (
      <div className="modal-text">
        <form onSubmit={this.handleDelete}>
          <h2>Delete {this.props.identifier}</h2>
          <p>Are you sure?</p>
          <button>Delete</button>
        </form>
      </div>
    )
  }

  renderEditor() {
    switch (this.props.action) {
      case "DELETE":
        return this.renderDelete()
      case "CREATE":
          return this.renderCreate()
      case "UPDATE":
      default:
          return this.renderUpdate();
    }
  }

  render() {
    return (
      <div className="modal">
        {this.renderEditor()}
      </div>
    )
  }
}

export default Editor
