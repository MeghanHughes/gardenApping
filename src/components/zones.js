const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const Zones = (props) => {
  console.log('zone props', props);
  return (
    <div>
    <p>This is the zone component</p>
    </div>
  )
}

module.exports = connect((state) => state)(Zones)
