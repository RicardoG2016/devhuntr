import React, { Component } from 'react';
import Add from './Add';
import List from './List';
import Stats from './Stats';
import uuid from 'uuid';
import '../../index.css';
import Divider from 'material-ui/Divider';
import SelectFieldExamlpe from './Select';
import Select from 'material-ui/SelectField';

class JobTracker extends React.Component {

  constructor(){
    super()
    this.state = {
      jobs: [],
    }
  }

  getJobs(){
    this.setState({jobs: [
     {
      id:uuid.v4(),
      title: "front end developer",
      user: 'none',
      company: "Apple",
      status: "Active",
      source: "Indeed",
      response: "Awaiting Response"
     },
     {
      id:uuid.v4(),
      title: "back end developer",
      user: this.props.profile.user_id,
      company: "IBM",
      status: "Active",
      source: "Facebook",
      response: "Awaiting Response"
     }
    ]})
  };

  componentDidMount(){
   this.getJobs(); 
  }

  handleAddJob(job){
    let jobs = this.state.jobs;
    jobs.push(job);
    this.setState({jobs});
  }

  handleDeleteJob(id){
  let jobs = this.state.jobs;
  let index = jobs.findIndex(x => x.id === id);
  jobs.splice(index, 1);
  this.setState({jobs});
  }

  handleSubmit(e){
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

  render() {

    return (
      <div className="App">
        <Stats />
        <Add addJob={this.handleAddJob.bind(this)} user={this.props.profile} />
        <br />
        <br />
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <br />
        <List jobs={this.state.jobs} onDelete={this.handleDeleteJob.bind(this)} user={this.props.profile} />
      </div>
    );
  }

}

export default JobTracker;
