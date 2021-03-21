import axios from 'axios'

export function createUser(username, createUserRes) {
    console.log(`From axios createUser: ${username}`);
    axios.post('http://localhost:3001/users', {
        username: username
    }, {
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost'
        }
    }).then((res) => {
        console.log(`axios create response: ${res}`)
        createUserRes(null, res);
    }).catch((e) => {
        console.log('[createUser] caught error', e);
        createUserRes(e, null);
    });
}

export async function userExists(username, userExistsRes) {
    console.log(`From axios userExists: ${username}`);
    axios.get(`http://localhost:3001/users/username/${username}`)
        .then((res) => {
            console.log(`axios user get response: ${res.username}`);
            return userExistsRes(res.data);
        }).catch((e) => {
            console.log(e);
            return {
                exists: null,
                user: null
            }
        })
}
