const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

class Zones extends React.Component {
  render() {
    return(
      <div>
      <p>This is the zone component</p>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Zones)
// <Table>
//   <TableHeader>
//     <TableRow>
//       <TableHeaderColumn>Name</TableHeaderColumn>
//       <TableHeaderColumn>Aspect</TableHeaderColumn>
//       <TableHeaderColumn>Soil Condition</TableHeaderColumn>
//       <TableHeaderColumn>Landscape</TableHeaderColumn>
//       <TableHeaderColumn>Exposure</TableHeaderColumn>
//       <TableHeaderColumn>Access</TableHeaderColumn>
//       <TableHeaderColumn>Weed Control</TableHeaderColumn>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     <TableRow>
//       <TableRowColumn>Patio</TableRowColumn>
//       <TableRowColumn>East</TableRowColumn>
//       <TableRowColumn>Good</TableRowColumn>
//       <TableRowColumn>Planterbox</TableRowColumn>
//       <TableRowColumn>Sheltered</TableRowColumn>
//       <TableRowColumn>Easy</TableRowColumn>
//       <TableRowColumn>Under control</TableRowColumn>
//     </TableRow>
//     <TableRow>
//     <TableRowColumn>Back of house (kitchen)</TableRowColumn>
//     <TableRowColumn>North/South</TableRowColumn>
//     <TableRowColumn>Improving</TableRowColumn>
//     <TableRowColumn>Planterbox</TableRowColumn>
//     <TableRowColumn>Sheltered</TableRowColumn>
//     <TableRowColumn>Easy</TableRowColumn>
//     <TableRowColumn>Under control</TableRowColumn>
//     </TableRow>
//     <TableRow>
//     <TableRowColumn>Side of house (bathroom)</TableRowColumn>
//     <TableRowColumn>West</TableRowColumn>
//     <TableRowColumn>Improving</TableRowColumn>
//     <TableRowColumn>Flat</TableRowColumn>
//     <TableRowColumn>Sheltered</TableRowColumn>
//     <TableRowColumn>Easy</TableRowColumn>
//     <TableRowColumn>Under control</TableRowColumn>
//     </TableRow>
//   </TableBody>
// </Table>

//
//
