import * as React from 'react';
import styled from 'styled-components';
import * as flexify from './flexify'

interface ITableProps {
  className?: string
}



const TableComponent: React.FunctionComponent<ITableProps> = ({ className }) => {
  const headers : any[] = [
    {title : 'Bcode'},
    {title : 'Nom de Test'},
    {title : 'Mnemonic'},
    {title : 'Departement'},
    {title : 'Envoi'},
    {title : 'Delai'},
  ]
  return (
    <TableStyled>
      <thead>
        <TableRow >
          {headers.map(head =><TableHeaderCell key={head.title}><input placeholder={head.title} style={{width : '100%', border: 'none'}}/></TableHeaderCell>)}
        </TableRow>
      </thead>



      <tbody>
        <TableRow >
          <TableBodyCell > webriver </TableBodyCell>
          <TableBodyCell > Antonio Sanches </TableBodyCell>
          <TableBodyCell > 462 </TableBodyCell>
          <TableBodyCell > new user </TableBodyCell>
          <TableBodyCell> <a > Edit </a> </TableBodyCell>
          <TableBodyCell> <a > Delete </a> </TableBodyCell>
        </TableRow>
        
      </tbody>
    </TableStyled>

  );
};

export default TableComponent;


const TableStyled = styled('table').attrs({})`

  ${flexify.Parent()}

  ${flexify.Column()}

`

const TableRow = styled('tr')`

  ${flexify.Parent()}

`
const TableHeaderCell = styled('th')`

  ${flexify.Box({grow : '1', shrink : '0', basis : ''})}

  border: 1px solid #000000;

` 
const TableBodyCell = styled('td')`

  ${flexify.Box({grow : '1', shrink : '0', basis : ''})}

  border: 1px solid #e7ecf1;

`