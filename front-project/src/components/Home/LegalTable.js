import React from "react";
import {Paper, Table, TableHead, TableRow, TableBody, TableCell} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
                    <CustomTableCell>Applicant</CustomTableCell>
                    <CustomTableCell align="right">Defendant</CustomTableCell>
                    <CustomTableCell align="right">Judgement Type</CustomTableCell>
                    <CustomTableCell align="right">State</CustomTableCell>
                    <CustomTableCell align="right">Circuit</CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {infoLegal.map((data, index) =>
                <TableRow key={index}>
                    <CustomTableCell>{data.applicant}</CustomTableCell>
                    <CustomTableCell align="right">{data.defendant}</CustomTableCell>
                    <CustomTableCell align="right">{data.judgement_type}</CustomTableCell>
                    <CustomTableCell align="right">{data.state}</CustomTableCell>
                    <CustomTableCell align="right">{data.circuit}</CustomTableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
    </Paper>
);