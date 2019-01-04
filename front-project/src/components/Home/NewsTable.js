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

export const NewsTable = ({infoNews}) => (
    <Paper style={useStyles.root}>
        <Table style={useStyles.table}>
            <TableHead>
                <TableRow>
                    <CustomTableCell>Category</CustomTableCell>
                    <CustomTableCell>% Confidence</CustomTableCell>
                    <CustomTableCell>Searcher</CustomTableCell>
                    <CustomTableCell>Link</CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {infoNews.map((data, index) =>
                <TableRow key={index}>
                    <CustomTableCell>{data.class.class_name}</CustomTableCell>
                    <CustomTableCell>{data.class.confidence}</CustomTableCell>
                    <CustomTableCell>{data.searcher}</CustomTableCell>
                    <CustomTableCell>{data.url}</CustomTableCell>
                </TableRow>
            )}
            </TableBody>
        </Table>
    </Paper>
);