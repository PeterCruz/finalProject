import React from "react";
import {Paper, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';

const useStyles ={
    root: {
        width: '100%',
        marginTop: 5,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'blue',
        },
    },
};

export const LegalTable = ({infoLegal}) => (
    <Paper style={useStyles.root}>
        <Table style={useStyles.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Applicant</TableCell>
                    <TableCell align="right">Defendant</TableCell>
                    <TableCell align="right">Judgement Type</TableCell>
                    <TableCell align="right">State</TableCell>
                    <TableCell align="right">Circuit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {infoLegal.map((data, index) =>
                <TableRow key={index}>
                    <TableCell>{data.applicant}</TableCell>
                    <TableCell align="right">{data.defendant}</TableCell>
                    <TableCell align="right">{data.judgement_type}</TableCell>
                    <TableCell align="right">{data.state}</TableCell>
                    <TableCell align="right">{data.circuit}</TableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
    </Paper>
);