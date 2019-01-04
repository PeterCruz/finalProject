import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = {
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    root: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    }
};

export const NotResults = () => (
    <div style={useStyles.container}>
        <Paper style={useStyles.root} elevation={1}>
            <Typography variant="h3" component="h3">
                Legal Results
            </Typography>
            <Typography variant="h5" component="h5">
                In this space the results of the legal databases will be shown.
            </Typography>
            <Typography variant="h5" component="h5">
                In case of not finding legal information, this space will be empty
            </Typography>
        </Paper>
    </div>
);