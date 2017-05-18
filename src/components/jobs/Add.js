import React, { Component } from 'react';
import uuid from 'uuid';
import '../../index.css';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

class Add extends React.Component {
  constructor(){
    super();
    this.state = {
      newJob:{}, 
      title: 'Title...',
      company: 'Company...',
      status: null,
      source: null,
      response: null,
      value: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// Options for status, response and sources
  static defaultProps = {
    statuses: ['Active', 'Archive'],
    responses: ['Awaiting Response', 'Not Selected', 'Phone Interview', 'Technical Interview', 'On site', 'Offer'],
    sources: ['Indeed', 'Linkedin', 'Jobs.com', 'CareerBuilder', 'Facebook', 'Referral', 'Networking Event', 'Other']
  }

    handleChange(event){
      const target = event.target;
      const val = target.value;
      const name = target.name;
      this.setState({
        [name]: val,
      });
    }

  handleStatus = (event, index, value, status) => this.setState({status: value});
  handleSource = (event, index, value, status) => this.setState({source: value});
  handleResponse = (event, index, value, status) => this.setState({response: value});

  handleSubmit(e){
    if(this.refs.title.input.value === ''){
      alert('Ensure all fields are complete')
    }
    else {
      console.log(this.state)
      this.setState({newJob:{
        id: uuid.v4(),
        user: this.props.user.user_id,
        title: this.refs.title.input.value,
        company: this.refs.company.input.value,
        status: this.refs.status.props.value,
        source: this.refs.source.props.value,
        response: this.refs.response.props.value
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
            <TextField 
              type="text" 
              name="title" 
              ref="title"
              hintText={this.state.title}
              onChange={this.handleChange}
             />
             <br />
            <TextField 
              type='text'
              name='company' 
              ref='company'
              hintText={this.state.company}
              onChange={this.handleChange}
             />
             <br />
            <SelectField
              hintText="Source..."
              onChange={this.handleSource}
              value={this.state.source}
              name="source"
              ref="source"
            >
              <MenuItem value="Indeed" primaryText="Indeed" />
              <MenuItem value="Linkedin" primaryText="Linkedin" />
              <MenuItem value="Jobs.com" primaryText="Jobs.com" />
              <MenuItem value="CareerBuilder" primaryText="CareerBuilder" />
              <MenuItem value="Facebook" primaryText="Facebook" />
              <MenuItem value="Referral" primaryText="Referral" />
              <MenuItem value="Networking Event" primaryText="Networking Event" />
              <MenuItem value="Other" primaryText="Other" />
            </SelectField>
            <br />
            <SelectField
              hintText="Status..."
              onChange={this.handleStatus}
              value={this.state.status}
              name="status"
              ref="status"
            >
              <MenuItem value="Active" primaryText="Active" />
              <MenuItem value="Archive" primaryText="Archive" />
            </SelectField>
            <br />
            <SelectField
              hintText="Response..."
              onChange={this.handleResponse}
              value={this.state.response}
              name="response"
              ref="response"
            >
              <MenuItem value="Awaiting Response" primaryText="Awaiting Response" />
              <MenuItem value="Not Selected" primaryText="Not Selected" />
              <MenuItem value="Phone Interview" primaryText="Phone Interview" />
              <MenuItem value="Technical Interview" primaryText="Technical Interview" />
              <MenuItem value="On site" primaryText="On site" />
              <MenuItem value="Offer" primaryText="Offer" />
            </SelectField>
            <br />
          <FlatButton values="Submit" type="submit" label="Submit"/>
        </form>
      </div>
    );
  }
}

export default Add;
