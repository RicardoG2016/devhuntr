import React, { Component } from 'react';
import Job from './Job';
import uuid from 'uuid';

class List extends React.Component {
  deleteJob(id){
    this.props.onDelete(id);
  }

  render() {

    const jobs = this.props.jobs
    const listJobs = jobs.map((job) => {
      if (job.user === this.props.user.user_id) {
        return <Job job={job} key={uuid.v4()} onDelete={this.deleteJob.bind(this)} user={this.props.user} />
      }
    }
  );

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Source</th>
            <th>State</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>{listJobs}</tbody>
      </table>
    );
  }
}

export default List;
