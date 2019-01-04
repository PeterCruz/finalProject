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

const styles = {
    root: {
        margin:'0 auto',
        width:"75%",
    },
    heading: {
        fontSize:15,
    },
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
};

class Panel extends Component {
    render() {
        const {infoLegal} = this.props;
        return (
            <div style={styles.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={styles.heading}>News Information</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
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