import React, {Component} from 'react';
import axios from 'axios';
import logo from '../../logo1.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Panel from "./Panel";
import {base_url} from "../../service";

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
            infoLegal:[],
            infoNews:[],
            isSearched: false,
        }
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) return this.props.history.push('/login');
        this.setState({user});
    }

    logout = () =>  {
        localStorage.clear();
        this.props.history.push('/login');
    };

    handleSubmit = (e) => {

        e.preventDefault();

        let url = `${base_url}api/search/`;
        const {form, user} = this.state;
        form['user'] = user._id;
        const token = localStorage.getItem('token');
        if(!token) return this.props.history.push('/login');
        this.setState({isSearched:true});
        axios.post(url,form, {
            headers: {
                "x-access-token": token
            }})
            .then((res) => {
                this.setState({infoLegal:res.data.infoDB.results});
            })
            .catch(err => {
                if(err.response.status === 403) this.logout();
                this.setState({infoLegal:[]});
            });

        let urlNews = `${base_url}api/search/news/`;
        axios.post(urlNews,form, {
            headers: {
                "x-access-token": token
            },
            timeout: 0
        })
            .then((res) => {
                this.setState({infoNews:res.data.newsDB,isSearched:false});
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
                if(err.response.status === 403) this.logout();
                this.setState({infoNews:[],isSearched:false});
            })
    };

    handleChange = (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        this.setState({form});
    };

    onClick = (e) => {
        this.logout();
    };

    render() {
        let {infoLegal, infoNews, isSearched} = this.state;
        return(
            <div>
                <img src={logo} alt="logo" />
                <br />
                <br />
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
                    {/*<TextField*/}
                        {/*name="location"*/}
                        {/*label="Location"*/}
                        {/*style={useStyles.textField}*/}
                        {/*margin="normal"*/}
                        {/*variant="outlined"*/}
                        {/*onChange={this.handleChange}*/}
                    {/*/>*/}
                    <Button variant="contained" color="primary" type="submit" style={useStyles.button}>
                        Search
                    </Button>
                    <Button variant="contained" onClick={this.onClick} color="secondary" type="button" style={useStyles.button}>
                        Logout
                    </Button>
                </form>
                <br/>
                <br/>

                <Panel infoLegal={infoLegal} infoNews={infoNews} isSearched={isSearched}/>
            </div>

        )
    }


}

export default Home;