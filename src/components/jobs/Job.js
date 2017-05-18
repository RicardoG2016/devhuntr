import React, { Component } from 'react';

class Job extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      editing: false,
      id: this.props.job.id,
      user: this.props.user.user_id,
      title: this.props.job.title,
      company: this.props.job.company,
      source: this.props.job.source,
      status: this.props.job.status,
      response: this.props.job.response
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteJob(id){
    this.props.onDelete(id);
  }

  editJob(id){
    this.setState({editing: true});
  }

  handleSubmit(event, jobs){
    this.setState({editing: false});
    this.setState({jobs})
    event.preventDefault();
  }

  handleChange(event){
    const target = event.target;
    const val = target.value;
    const name = target.name;
    const id = target.id;
    this.setState({
      [name]: val,
    });
  }

  static defaultProps = {
    statuses: ['Active', 'Archive'],
    responses: ['Awaiting Response', 'Not Selected', 'Phone Interview', 'Technical Interview', 'On site', 'Offer'],
    sources: ['Indeed', 'Linkedin', 'Jobs.com', 'CareerBuilder', 'Facebook', 'Referral', 'Networking Event', 'Other']
  }

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

    const normal = {
      title: <span>{this.state.title}</span>,
      company: <span>{this.state.company}</span>,
      source: <span>{this.state.source}</span>,
      status: <span>{this.state.status}</span>,
      response: <span>{this.state.response}</span>,
      btn: <span><a onClick={this.deleteJob.bind(this, this.props.job.id)}><button>Delete</button></a> <a onClick={this.editJob.bind(this, this.props.job.id)}><button>Edit</button></a></span>
    };
      
    const edit = {
      title: <input name="title" value={this.state.title} onChange={this.handleChange} />,
      company: <input name="company" value={this.state.company} onChange={this.handleChange} />,  
      source: <select name="source" value={this.state.source} onChange={this.handleChange}>{sourceOptions}</select>,
      status: <select name="status" value={this.state.status} onChange={this.handleChange}>{statusOptions} </select>,
      response: <select name="response" value={this.state.response} onChange={this.handleChange}>{responseOptions} </select>,
      btn: <span><a onClick={this.deleteJob.bind(this, this.state.id)}><button>Delete</button></a> <a onClick={this.handleSubmit}><button type="submit">Save</button></a></span>
    };

    const view = this.state.editing ? edit : normal;

    return (
    
      <tr>
        <td>{view.title}</td>
        <td>{view.company}</td>
        <td>{view.source}</td>
        <td>{view.status}</td>
        <td>{view.response}</td>
        <td>{view.btn}</td>
      </tr>
    );
  }
}

export default Job;
