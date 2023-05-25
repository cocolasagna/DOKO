import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'

export const MuiTable = () => {
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
                tableData.map((row)=>(
                    <TableRow key={row.product_name}
                    sx={{'&:last-child td, &:last-child th':{border:0}}}
                    >
                        <TableCell>{row.product_name}</TableCell>
                        <TableCell>{row.product_category}</TableCell>
                        <TableCell>{row.product_price}</TableCell>
                        <TableCell align='center'>{row.product_sold}</TableCell>
                    </TableRow>
                ))
               }
            </TableBody>
        </Table>
    </TableContainer>
}

const tableData = [{
    "product_name": "table",
    "product_category": "furniture",
    "product_price": 742.25,
    "product_sold": 794
}, {
    "product_name": "bulb",
    "product_category": "home",
    "product_price": 389.7,
    "product_sold": 434
}, {
    "product_name": "shirt",
    "product_category": "clothing",
    "product_price": 453.27,
    "product_sold": 618
}, {
    "product_name": "iphone",
    "product_category": "electronics",
    "product_price": 555.42,
    "product_sold": 915
}, {
    "product_name": "sock",
    "product_category": "clothing",
    "product_price": 59.42,
    "product_sold": 763
}, {
    "product_name": "fam",
    "product_category": "electronics",
    "product_price": 423.23,
    "product_sold": 437
}, {
    "product_name": "chair",
    "product_category": "furniture",
    "product_price": 277.56,
    "product_sold": 554
}, {
    "product_name": "uas",
    "product_category": "home",
    "product_price": 923.1,
    "product_sold": 62
}, {
    "product_name": "sasda",
    "product_category": "clothing",
    "product_price": 880.59,
    "product_sold": 317
}, {
    "product_name": "asd",
    "product_category": "electronics",
    "product_price": 601.52,
    "product_sold": 885
}]

export default MuiTable;