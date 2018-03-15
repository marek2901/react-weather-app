import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export default class MainWeatherTable extends Component {
  tableOpts = {
    fixedHeader: false,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: false,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: false,
    showCheckboxes: false,
  };

  render() {
    return (
      <Table fixedHeader={this.tableOpts.fixedHeader} fixedFooter={this.tableOpts.fixedFooter} selectable={this.tableOpts.selectable} multiSelectable={this.tableOpts.multiSelectable}>
        <TableHeader displaySelectAll={this.tableOpts.showCheckboxes} adjustForCheckbox={this.tableOpts.showCheckboxes} enableSelectAll={this.tableOpts.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Temperature</TableHeaderColumn>
            <TableHeaderColumn>Wind</TableHeaderColumn>
            <TableHeaderColumn>Weather</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.tableOpts.showCheckboxes} deselectOnClickaway={this.tableOpts.deselectOnClickaway} showRowHover={this.tableOpts.showRowHover} stripedRows={this.tableOpts.stripedRows}>
          {
            this.props.records.map((row, index) => (<TableRow key={index}>
              <TableRowColumn>{row.data}</TableRowColumn>
              <TableRowColumn>{row.temp}</TableRowColumn>
              <TableRowColumn>{row.wind}</TableRowColumn>
              <TableRowColumn>{row.weather}</TableRowColumn>
            </TableRow>))
          }
        </TableBody>
      </Table>);
  }
}
