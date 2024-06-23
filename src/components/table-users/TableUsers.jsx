import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';


export default function TableUsers({ users }) {
    console.log(users);
    return (
        <Container maxWidth='xl' sx={{mt: '50px'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.address.city}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{(user.phone).split(" ")[0]}</TableCell>
                                <TableCell>{user.company.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
