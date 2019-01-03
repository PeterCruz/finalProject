import axios from 'axios';

const base_url = 'http://localhost:3000/';

export const login = (auth, history) => {
    axios.post(`${base_url}api/auth/login`, auth)
        .then(res => {
            //console.log(res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            history.push('/');
        })
        .catch(err => {
            console.log('Error: ',err.response.data);
        });
};

export const getPost = (token) => {
    return axios.get(`${base_url}/post/`,{
        headers:{
            "x-access-token": token
        }
    })
};

export const updateUser = (id, form) => {
    console.log(form);
    let formData = new FormData();
    Object.keys(form).forEach(key => {
       formData.append(key, form[key])
    });
    axios.patch(`${base_url}/auth/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(user => {
        console.log(user);
    })
};