import React, { Component } from 'react';
import Job from './Job';
import uuid from 'uuid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const style = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  padding: 40
};

const Stats = () => (
  <div>
    <Paper style={style} zDepth={2} rounded={true} children="Applied: 120" /> 
    <Paper style={style} zDepth={2} rounded={true} children="Interviews: 12" />
    <Paper style={style} zDepth={2} rounded={true} children="Onsite: 2" />
    <Paper style={style} zDepth={2} rounded={true} children="Active: 50" />
  </div>
);

export default Stats;