import React from "react";
import Cell from "./Cell";
import './index.css';

function Row(props) {
  const { row, columns, rowId, rowIndex, onRowClick } = props;

  const cells = columns.map((column) => {
    const { renderCell, field } = column;

    return (<Cell
        key={`${row[rowId]}_${field}`}
        rowId={rowId}
        row={row}
        rowIndex={rowIndex}
        renderCell={renderCell}
        field={field}
      />)
  });

  return (
    <tr
      onClick={() => {
        if (typeof onRowClick === "function") {
          onRowClick(row);
        }
      }}
      className="table-row"
    >
      {cells}
    </tr>
  );
}

export default Row;
