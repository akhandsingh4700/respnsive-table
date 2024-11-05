import * as React from "react";
import {
  useMediaQuery,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const data = [
  {
    id: 1,
    machine: "0ACKA OP201",
    date: "20-11-22",
    time: "10:45:00",
    breakdown: "Shift A",
    unit: 0.19,
    phenomenon: 0.19,
    cause: "High",
  },
  {
    id: 2,
    machine: "0ACKB OP202",
    date: "21-11-22",
    time: "12:30:00",
    breakdown: "Shift B",
    unit: 0.25,
    phenomenon: 0.2,
    cause: "Medium",
  },
  {
    id: 3,
    machine: "0ACKC OP203",
    date: "22-11-22",
    time: "14:00:00",
    breakdown: "Shift C",
    unit: 0.3,
    phenomenon: 0.22,
    cause: "Low",
  },
  {
    id: 4,
    machine: "0ACKD OP204",
    date: "23-11-22",
    time: "15:30:00",
    breakdown: "Shift D",
    unit: 0.35,
    phenomenon: 0.25,
    cause: "Critical",
  },
  {
    id: 5,
    machine: "0ACKE OP205",
    date: "24-11-22",
    time: "16:45:00",
    breakdown: "Shift E",
    unit: 0.4,
    phenomenon: 0.28,
    cause: "High",
  },
];

const ResponsiveTable = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const columns = [
    { id: "sno", label: "S.no", getValue: (row, index) => index + 1 },
    { id: "machine", label: "Machine", getValue: (row) => row.machine },
    { id: "date", label: "Date", getValue: (row) => row.date },
    { id: "time", label: "Time", getValue: (row) => row.time },
    {
      id: "breakdown",
      label: "Breakdown Duration",
      getValue: (row) => row.breakdown,
    },
    { id: "unit", label: "Unit", getValue: (row) => row.unit },
    {
      id: "phenomenon",
      label: "Phenomenon",
      getValue: (row) => row.phenomenon,
    },
    { id: "cause", label: "Cause", getValue: (row) => row.cause },
  ];

  return (
    <TableContainer component={Paper} style={{ overflowX: "auto" }}>
      {isMobile ? (
        // Mobile view - Headers and data in the same row
        <Table aria-label="mobile responsive table">
          <TableBody>
            {columns.map((column) => (
              <TableRow
                key={column.id}
                style={{ borderBottom: "1px solid #e0e0e0" }}
              >
                <TableCell style={{ fontWeight: "bold", color: "#555" }}>
                  {column.label}
                </TableCell>
                {data.map((row, index) => (
                  <TableCell key={row.id}>
                    {column.getValue(row, index)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        // Desktop view - Standard column layout
        <Table aria-label="desktop responsive table">
          <TableBody>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ fontWeight: "bold" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            {data.map((row, index) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.getValue(row, index)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ResponsiveTable;
