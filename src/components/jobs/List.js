import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import React, { Component } from 'react';
import Job from './Job';
import uuid from 'uuid';
import {grey200} from 'material-ui/styles/colors';
import './jobstyles.css'

class List extends React.Component {

  deleteJob(id){
    this.props.onDelete(id);
  }

  render() {

  const style = {
    margin: 'auto'
  };

  const jobs = this.props.jobs
  const listJobs = jobs.map((job) => {
    if (job.user === this.props.user.user_id) {
      return <Job job={job} key={uuid.v4()} onDelete={this.deleteJob.bind(this)} user={this.props.user} />
    }
  });

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Company</TableHeaderColumn>
            <TableHeaderColumn>Source</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Response</TableHeaderColumn>
            <TableHeaderColumn>Edit/Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>{listJobs}</TableBody>
      </Table>
    );
  }
}

export default List;

