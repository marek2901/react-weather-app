import React from 'react';
import { TableRow } from 'material-ui/Table';
import styled from 'styled-components';

let ClickableRow = (props) => {
  const {
    rowData,
    onClicked,
    ...restProps
  } = props;
  return (<TableRow {...restProps}
    onMouseDown={onClicked}>
    {props.children}
  </TableRow>)
};

ClickableRow = styled(ClickableRow)`
  cursor: pointer;
  &:hover {
   background: #efefef;
  }
`

export default ClickableRow
