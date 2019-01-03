import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {LegalTable} from "./LegalTable";

const useStyles ={
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textField: {
        marginLeft: 5,
        marginRight: 5,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: 5,
    },
    input: {
        display: 'none',
    },
};

class Home extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                name: '',
                firstLastname: '',
                secondLastname: '',
                location: '',
            },
            user: {},
            infoLegal:[]
        }
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) return this.props.history.push('/login');
        this.setState({user});
    }

    handleSubmit = (e) => {
        const base_url = 'http://localhost:3000/api';
        e.preventDefault();

        let url = `${base_url}/search/`;
        const {form, user} = this.state;
        console.log(this.state);
        form['user'] = user._id;
        const token = localStorage.getItem('token');
        if(!token) return this.props.history.push('/login');
        axios.post(url,form, {
            headers: {
                "x-access-token": token
            }})
            .then((res) => {
                this.setState({infoLegal:res.data.infoDB.results});
                console.log(res.data.infoDB.results);
                console.log('exitoso');
            })
            .catch(err => {
                console.log(err);
                alert(err.msg)
            })
    };

    handleChange = (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        this.setState({form});
    };

    render() {
        let {infoLegal} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit} style={useStyles.container} noValidate autoComplete="off">
                    <TextField
                        required
                        name="name"
                        label="Name"
                        style={useStyles.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <TextField
                        required
                        name="firstLastname"
                        label="First Lastname"
                        style={useStyles.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="secondLastname"
                        label="Second Lastname"
                        style={useStyles.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <TextField
                        name="location"
                        label="Location"
                        style={useStyles.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <Button variant="contained" color="primary" type="submit" style={useStyles.button}>
                        Search
                    </Button>
                </form>
                {infoLegal.length > 1 ? <LegalTable infoLegal={infoLegal} /> : ''}
            </div>

        )
    }


}

export default Home;