import React from 'react';
import { getFeed } from '../services/teamFeed';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            teamFeed: []
        }
    }

    teamFeed() {
        getFeed((err, feedItems) => {
            if (err) {
                return console.log('[Home.teamFeed()] returned error:', err);
            }

            console.log('[Home.teamFeed()] returned items', feedItems)
            this.setState({ teamFeed: feedItems });
        });
    }

    render() {
        return (
            <div>
                <h1>Home: Welcome {this.state.username}!</h1>
                <div className="team-feed">
                    <h2 className="team-feed">Team Feed</h2>
                    <button onClick={this.teamFeed.bind(this)}>Load</button>
                    <div>
                        {
                            this.state.teamFeed?.length === 0 && '(empty)'
                        }
                    </div>
                    <div>
                        {
                            this.state.teamFeed?.map((feedItem) =>
                                <li key={feedItem.id}>
                                    <h3>{feedItem.event.title}</h3>
                                    <h4>{feedItem.event.message}</h4>
                                </li>
                            )
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;