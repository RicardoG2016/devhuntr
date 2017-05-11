import React, { Component } from 'react';
import uuid from 'uuid';

class Add extends React.Component {
  constructor(){
    super();
    this.state = {
      newJob:{}, 
      valTitle: 'Front End Developer...',
      valCompany: 'Google...'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

// Options for status, response and sources
  static defaultProps = {
    statuses: ['Active', 'Archive'],
    responses: ['Awaiting Response', 'Not Selected', 'Phone Interview', 'Technical Interview', 'On site', 'Offer'],
    sources: ['Indeed', 'Linkedin', 'Jobs.com', 'CareerBuilder', 'Facebook', 'Referral', 'Networking Event', 'Other']
  }

  handleSubmit(e){
    console.log(this.props)
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newJob:{
        id: uuid.v4(),
        user: this.props.user.user_id,
        title: this.refs.title.value,
        company: this.refs.company.value,
        status: this.refs.status.value,
        source: this.refs.source.value,
        response: this.refs.response.value
      }}, function(){
        this.props.addJob(this.state.newJob);
      });
    }

    e.preventDefault();
  }

// options for status, response and source
  render() {

    let statusOptions = this.props.statuses.map(status => {
      return <option key={status} value={status}>{status}</option>
    });
    
    let responseOptions = this.props.responses.map(response => {
      return <option key={response} value={response}>{response}</option>
    });

    let sourceOptions = this.props.sources.map(source => {
      return <option key={source} value={source}>{source}</option>
    });

    return (
      <div>
        <h3> Add Job </h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" placeholder={this.state.valTitle} value={this.state.value} />
          </div>
          <br />
          <div>
            <label>Company</label><br />
            <input type="text" ref="company" placeholder={this.state.valCompany} value={this.state.value} />
          </div>
          <br />
          <div>
            <label>Status</label><br />
              <select ref="status">
                {statusOptions}
              </select>           
          </div>
          <br />
          <div>
            <label>Source</label><br />
              <select ref="source">
                {sourceOptions}
              </select>           
          </div>
          <br />
          <div>
            <label>Response</label><br />
              <select ref="response">
                {responseOptions}
              </select>           
          </div>
          <br />
          <input values="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Add;
