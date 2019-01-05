import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {LegalTable} from "./LegalTable";
import {NotResults} from "./NotResults";
import {NewsTable} from "./NewsTable";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    root: {
        margin:'0 auto',
        width:"75%",
    },
    heading: {
        fontSize:24,
    },
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    // Reproduce the Facebook spinners.
    facebook: {
        margin: 5,
        position: 'relative',
    },
    facebook1: {
        color: '#eef3fd',
    },
    facebook2: {
        color: '#6798e5',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
};

class Panel extends Component {
    render() {
        const {infoLegal, infoNews, isSearched} = this.props;
        return (
            <div style={styles.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={styles.heading}>News Information</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {!isSearched ? <NewsTable infoNews={infoNews}/> :
                            <div style={styles.facebook}>
                                <CircularProgress
                                    variant="determinate"
                                    value={100}
                                    style={styles.facebook1}
                                    size={24}
                                    thickness={4}
                                />
                                <CircularProgress
                                    variant="indeterminate"
                                    disableShrink
                                    style={styles.facebook2}
                                    size={24}
                                    thickness={4}
                                />
                            </div>
                        }
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={styles.heading}>Legal Information</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={styles.container}>
                        {infoLegal.length > 1 ? <LegalTable infoLegal={infoLegal} /> : <NotResults/>}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);