import axios from 'axios'

const module = {
    createUser2(username) {
        console.log(`From axios createUser: ${username}`);
        axios.post('http://localhost:3001/users', {
            username: username
        }, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3001'
            }
        }).then((res) => {
            console.log(`axios create response: ${res}`)
            return res.userId;
        }).catch((e) => {
            console.log(e);
        });
    },
    createUser(username) {
        axios.post('http://localhost:3001/users')
            .catch((e) => {
                console.log(e);
            });
    }
}

export default module;
