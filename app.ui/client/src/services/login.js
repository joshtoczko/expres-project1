const axios = require('axios');


export function login(username, spass, loginRes) {
    axios.post('/login', {
        username: username,
        spass: spass
    }).then((res) => {
        console.log('[login] service called with response', res);
        loginRes(null, res);
    }).catch((e) => {
        console.log('[login] service error', e);
        loginRes(e, null);
    })
}