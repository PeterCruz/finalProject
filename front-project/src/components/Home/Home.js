import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Panel from "./Panel";

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

    getNews() {
        const base_url = 'http://bgcnews-balancer-1054525291.us-west-1.elb.amazonaws.com/news?name=';
        let fullname = this.state.form.name + ' ' + this.state.form.firstLastname + ' ' + this.state.form.secondLastname;
        let url = `${base_url}${fullname}`;
        console.log(url);

        axios.get(url).then((res) => console.log(res.data));
    }

    handleSubmit = (e) => {
        const base_url = 'http://localhost:3000/api';
        e.preventDefault();
        this.getNews();

        let url = `${base_url}/search/`;
        const {form, user} = this.state;
        form['user'] = user._id;
        const token = localStorage.getItem('token');
        if(!token) return this.props.history.push('/login');
        axios.post(url,form, {
            headers: {
                "x-access-token": token
            }})
            .then((res) => {
                this.setState({infoLegal:res.data.infoDB.results});
            })
            .catch(err => {
                this.setState({infoLegal:[]})
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
                <br/>
                <br/>

                <Panel infoLegal={infoLegal}/>
            </div>

        )
    }


}

export default Home;