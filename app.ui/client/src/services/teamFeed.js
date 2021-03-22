import axios from 'axios';

export function getFeed(res) {
    axios.get('http://localhost:3001/teamfeed')
        .then((val) => {
            res(null, val.data);
        }).catch((e) => {
            console.log('[getFeed] caught error:', e);
            res(e, null);
        });
}