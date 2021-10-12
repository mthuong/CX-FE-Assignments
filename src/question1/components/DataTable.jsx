import React from "react";
import Row from "./Row";

function DataTable(props) {
  const {
    columns,
    data,
    onRowClick,
    rowId,
  } = props;

  const tableHeadComponent = React.useMemo(() => {
    return columns.map((column) => {
      return <th key={`header_${column.field}`} scope="col">{column.headerName}</th>;
    });
  }, [columns]);

  const tableRows = React.useMemo(() => {
    return data.map((row, rowIndex) => {
      return (
        <Row
          key={`${row[rowId]}`}
          row={row}
          columns={columns}
          rowId={rowId}
          onRowClick={onRowClick}
        />
      );
    });
  }, [columns, data, onRowClick, rowId]);

  return (
    <table id="data-table" className="table table-striped table-bordered">
      <thead>
        <tr>{tableHeadComponent}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export default DataTable;
