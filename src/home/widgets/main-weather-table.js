import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import ClickableRow from './clickable-row'

const tableOpts = {
  fixedHeader: false,
  fixedFooter: false,
  stripedRows: false,
  showRowHover: false,
  selectable: false,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: false,
  showCheckboxes: false
}

const MainWeatherTable = props => (
  <Table
    fixedHeader={tableOpts.fixedHeader}
    fixedFooter={tableOpts.fixedFooter}
    selectable={tableOpts.selectable}
    multiSelectable={tableOpts.multiSelectable}
  >
    <TableHeader
      displaySelectAll={tableOpts.showCheckboxes}
      adjustForCheckbox={tableOpts.showCheckboxes}
      enableSelectAll={tableOpts.enableSelectAll}
    >
      <TableRow>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Temperature</TableHeaderColumn>
        <TableHeaderColumn>Wind</TableHeaderColumn>
        <TableHeaderColumn>Weather</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={tableOpts.showCheckboxes}
      deselectOnClickaway={tableOpts.deselectOnClickaway}
      showRowHover={tableOpts.showRowHover}
      stripedRows={tableOpts.stripedRows}
    >
      {props.records.map((row, index) => (
        <ClickableRow
          onClicked={() => props.onItemClicked(row.data)}
          key={index}
        >
          <TableRowColumn>{row.data}</TableRowColumn>
          <TableRowColumn>{row.temp}</TableRowColumn>
          <TableRowColumn>{row.wind}</TableRowColumn>
          <TableRowColumn>{row.weather}</TableRowColumn>
        </ClickableRow>
      ))}
    </TableBody>
  </Table>
)

export default MainWeatherTable
