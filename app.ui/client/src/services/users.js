import axios from 'axios'

export function createUser(username) {
    console.log(`From axios createUser: ${username}`);
    axios.post('http://localhost:3001/users', {
        username: username
    }, {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost'
        }
    }).then((res) => {
        console.log(`axios create response: ${res}`)
        return res.userId;
    }).catch((e) => {
        console.log(e);
    });
}
