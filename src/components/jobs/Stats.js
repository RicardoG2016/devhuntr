import React, { Component } from 'react';
import Job from './Job';
import Paper from 'material-ui/Paper';

class Stats extends React.Component {

render() {

const style = {
  height: '170px',
  width: '170px',
  margin: '15px',
  textAlign: 'center',
  display: 'inline-block',
  paddingTop: '60px',
  paddingLeft: '40px',
  paddingRight: '40px',
  top: '0'
};

const myjobs = this.props.jobs
const interviews = myjobs.filter((job) => {
    if (job.response == 'Phone Interview' || job.response == 'Technical Interview' || job.response == 'On site'){
      return job.response
    }
})

const offers = myjobs.filter((job) => {
    if (job.response == 'Offer'){
      return job.response
    }
})

const jobs = {
  count: this.props.jobs.length,
  interviews: interviews.length,
  offers: offers.length
}

console.log(this.props.jobs.length) 
  return (
    <div>
      <Paper style={style} zDepth={2} rounded={true} children={"Applications " + jobs.count} /> 
      <Paper style={style} zDepth={2} rounded={true} children={ "Interviewing " + jobs.interviews} />
      <Paper style={style} zDepth={2} rounded={true} children={ "Job Offers " + jobs.offers} />
    </div>
  )}
};

export default Stats;