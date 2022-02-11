import HotTable from "@handsontable/react";
import React from "react";
import ReactDom from "react-dom";

//////////////////////////////////////////

// THIS WORKS - try it by uncommenting
// import {
//   registerCellType,
//   AutocompleteCellType,
//   HandsontableCellType,
// } from "handsontable/cellTypes";

// THIS DOESN'T WORK
const {
  registerCellType,
  AutocompleteCellType,
  HandsontableCellType,
} = require("handsontable/cellTypes");

//////////////////////////////////////////

registerCellType(AutocompleteCellType);
registerCellType(HandsontableCellType);

const data = [[1, 2, 3]];

const hot = React.createElement(HotTable, {
  columns: [
    {
      type: "autocomplete",
      source: ["BMW", "Chrysler", "Nissan", "Suzuki", "Toyota", "Volvo"],
      strict: false,
    },
    {},
    {},
  ],
  data,
  colHeaders: true,
  rowHeaders: true,
  height: "auto",
  licenseKey: "non-commercial-and-evaluation",
});

ReactDom.render(hot, document.getElementById("hot"));
