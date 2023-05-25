import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export const MuiTable = (props) => {
  const total = props.analysis.reduce((sum, row) => sum + row.bidAmount, 0);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '400px', backgroundColor: "#eba28c4a" }}>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', padding: '8px' }}>
        Total Sales: {total}
      </Typography>
      <Table aria-label='Items Sold' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: "#b5948c83" }}>Name</TableCell>
            <TableCell sx={{ backgroundColor: "#b5948c83" }}>Category</TableCell>
            <TableCell sx={{ backgroundColor: "#b5948c83" }}>Price</TableCell>
            <TableCell sx={{ backgroundColor: "#b5948c83" }} align='center'>Sold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.analysis.map((row) => (
            <TableRow
              key={row.product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.product.name}</TableCell>
              <TableCell>{row.product.category}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align='center'>{row.bidAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
