import * as React from 'react';
import styled from 'styled-components';
import * as flexify from './flexify'

interface ITableProps {
  Header: any[]
  Data : any
  filterDataList : (e: any) => void
  getInputValue : (e:any) => void
  handleReferredValue : (e:any) => void
  onBlurTest : () => void
}



const TableComponent: React.FunctionComponent<ITableProps> = 
  ({ 
    Header, 
    Data, 
    filterDataList, 
    getInputValue,
    handleReferredValue
  }) => {

  // const { catalogList } = Data;

  // return <div>new Catalog data</div>

  // console.log(Data);

  return (
    <TableStyled>
      <thead>
        <TableRow >
          { Header.map(
              head =>
                <TableHeaderCell 
                  key={head.title} 
                  width={head.width}>

                  <input 
                    placeholder={head.title} 
                    name="testName"
                    style={{width : '100%', border: 'none'}}
                    onChange={e=>filterDataList(e)}
                  />
                </TableHeaderCell>
            )
          }
        </TableRow>
      </thead>

    

    <tbody>

      {Data.length < 1 ? 
      
        <TableRow><TableBodyCell>Loading ...</TableBodyCell></TableRow>

        :

        Data.map((list : any)=>

        <TableRow key={list.id} datatype={list.id} >
          

            <TableBodyCell width="50%" >

              {list.name.fr} 
              
            </TableBodyCell>   
          
          
          <TableBodyCell width="10%" > {list.finance[0] ? list.finance[0].Bcode : "-"} </TableBodyCell>
          <TableBodyCell width="10%" > {list.finance[0] ? Math.floor(list.finance[0].Bcode * 1.34)  : "-"} </TableBodyCell>
          <TableBodyCell width="10%" > 
            <input 
              style={{width : '100%', border: 'none'}}
              name={list.name.fr}
              onBlur={e=>getInputValue(e)}
            /> 
          </TableBodyCell>
          <TableBodyCell width="10%">  
            <select id="referredPrice"
              style={{width : '100%', border: 'none'}} 
              onChange={e=>handleReferredValue(e)}
            >
              <option>oui</option>
              <option>non</option>
            </select>  
          </TableBodyCell>
          <TableBodyCell width="10%">  
            <input 
              style={{width : '30%', border: '1px solid #000000'}} 
              onChange={e=>handleReferredValue(e)}
            /> 
            <select id="reportedUnit"
              style={{width : '70%', border: 'none'}}
              onChange={e=>handleReferredValue(e)}
            >
              <option>Heures</option>
              <option>Jours</option>
              <option>Mois</option>
            </select> 
          </TableBodyCell>
        </TableRow>
        )}
      </tbody>
    </TableStyled>

  );
};

export default TableComponent;


export const TableStyled = styled('table').attrs({})`

  ${flexify.Parent()}

  ${flexify.Column()}

`

export const TableRow = styled('tr')`

  ${flexify.Parent()}

`
export const TableHeaderCell = styled('th')<{width? : string}>`

  border: 1px solid #000000;

  ${props => 
      
      props.width ? 

      flexify.Box({grow : '0', shrink : '0', basis : props.width})

      :

      flexify.Box({grow : '1', shrink : '0', basis : ''})

  }

` 
export const TableBodyCell = styled('td')<{width? : string}>`

  border: 1px solid #e7ecf1;

  ${props => 
      
    props.width ? 

    flexify.Box({grow : '0', shrink : '0', basis : props.width})

    :

    flexify.Box({grow : '1', shrink : '0', basis : ''})

  }
`
const ConfirmCancelMessage = styled.span`
  width: 90px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
`