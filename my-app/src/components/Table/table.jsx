import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'
import {useState} from 'react'

export const MuiTable = (props) => {
  //  {console.log('table',props.analysis)}
   
    return <TableContainer component={Paper}sx={{maxHeight:'400px',backgroundColor:"#eba28c4a"}}>
        <Table ariaa-label='Items Sold' stickyHeader>
            <TableHead >
                <TableRow >
                    <TableCell sx={{backgroundColor:"#b5948c83"}}>Name</TableCell>
                    <TableCell sx={{backgroundColor:"#b5948c83"}}>Category</TableCell>
                    <TableCell sx={{backgroundColor:"#b5948c83"}}>Price</TableCell>
                    <TableCell sx={{backgroundColor:"#b5948c83"}} align='center'>Sold</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
               {
                props.analysis.map((row)=>(
                    <TableRow key={row.product.name}
                    sx={{'&:last-child td, &:last-child th':{border:0}}}
                    >
                        <TableCell>{row.product.name}</TableCell>
                        <TableCell>{row.product.category}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell align='center'>{row.bidAmount}</TableCell>
                    </TableRow>
                ))
               }
            </TableBody>
        </Table>
    </TableContainer>
}



export default MuiTable;