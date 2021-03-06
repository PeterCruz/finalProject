import React, {Component} from 'react';
import {login} from "../../service";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../logo1.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) return this.props.history.push('/');
    }

    handleChange = (e) => {
        const {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        login(this.state.user, this.props.history);
    };

    render() {
        const { classes } = this.props;
        let {email, password} = this.state.user;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <img src={logo} alt="logo" />
                    <br/>
                    <br/>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={this.handleSubmit} className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" type="email" autoComplete="email" autoFocus onChange={this.handleChange} value={email} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password" type="password" autoComplete="current-password" onChange={this.handleChange} value={password} />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sig in
                        </Button>
                        <br/>
                        <br/>
                        <span>You are not yet registered <Link to={"/signup"}>Sign up</Link></span>
                    </form>
                </Paper>
            </main>
        );

    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
