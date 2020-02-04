import * as React from 'react';

interface ITableProps {
  className: string
}

const Table: React.FunctionComponent<ITableProps> = ({ className }) => {
  return (
    <table className="table table-striped table-hover table-bordered dataTable no-footer" id="sample_editable_1" role="grid" aria-describedby="sample_editable_1_info">
      <thead>
        <tr role="row">
          <th
            className="sorting_desc"
            tabIndex={0}
            aria-controls="sample_editable_1"
            rowSpan={1}
            colSpan={1}
            aria-label=" Username : activate to sort column ascending"
            style={{ width: 172 }}
            aria-sort="descending"> Username </th>
          <th
            className="sorting"
            tabIndex={0}
            aria-controls="sample_editable_1"
            rowSpan={1}
            colSpan={1}
            aria-label=" Full Name : activate to sort column ascending"
            style={{ width: 193 }}
          
          > Full Name </th>
          <th
              className="sorting"
              tabIndex={0}
              aria-controls="sample_editable_1"
              rowSpan={1}
              colSpan={1}
              aria-label=" Points : activate to sort column ascending"
              style={{ width: 121 }}

          > Points </th>

          <th
            className="sorting"
            tabIndex={0}
            aria-controls="sample_editable_1"
            rowSpan={1}
            colSpan={1}
            aria-label=" Notes : activate to sort column ascending"
            style={{ width: 127 }}
            
          > Notes </th>

          <th
            className="sorting"
            tabIndex={0}
            aria-controls="sample_editable_1"
            rowSpan={1}
            colSpan={1}
            aria-label=" Edit : activate to sort column ascending"
            style={{ width: 90 }}
            
          > Edit </th>
          
          <th
            className="sorting"
            tabIndex={0}
            aria-controls="sample_editable_1"
            rowSpan={1}
            colSpan={1}
            aria-label=" Delete : activate to sort column ascending"
            style={{ width: 124 }}>

            Delete

          </th>
        </tr>
      </thead>



      <tbody>
        <tr role="row" className="odd">
          <td className="sorting_1"> webriver </td>
          <td > Antonio Sanches </td>
          <td > 462 </td>
          <td className="center"> new user </td>
          <td>
            <a className="edit" href="javascript:;"> Edit </a>
          </td>
          <td>
            <a className="delete" href="javascript:;"> Delete </a>
          </td>
        </tr>
        <tr 
        role="row" 
        className="odd"
        >
          <td className="sorting_1"><input type="text" className="form-control input-small" defaultValue /></td>
          <td><input type="text" className="form-control input-small" defaultValue /></td>
          <td><input type="text" className="form-control input-small" defaultValue /></td>
          <td><input type="text" className="form-control input-small" defaultValue /></td>
          <td><a className="edit" href>Save</a></td><td><a className="cancel" href>Cancel</a></td>
        </tr>
      </tbody>
    </table>

  );
};

export default Table;
