import React from "react";
import { getProperty } from "./functions";

function Cell(props) {
  const { row, rowIndex, field, renderCell } = props;

  if (renderCell && typeof renderCell === "function") {
    return (
      <td>
        <div className="text-break">
          {renderCell({
            field: field,
            value: row,
            index: rowIndex,
          })}
        </div>
      </td>
    );
  } else {
    const propertyValue = getProperty(row, field);

    return (
      <td>
        <div className="text-break">
          {typeof propertyValue !== "object" ? propertyValue : ""}
        </div>
      </td>
    );
  }
}

export default Cell;
