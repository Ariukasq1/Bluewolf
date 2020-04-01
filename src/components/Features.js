import React from 'react';
// import Config from "../config";
// import WPAPI from 'wpapi';
import { getData } from '../utils';
import axios from 'axios';

// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Features extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(`http://bluewolftravel.local/wp-json/wp/v2/posts?categories=61`)
            .then(res => this.setState({
                posts: res.data
            }))
            .catch(err => console.log(err));
    };

    render() {
        const { posts } = this.state;
        console.log('post:', posts);

        return (
            <div className={`feature-area-wrapper sp-top`}>
                <div className="container">
                    <div className="row mtn-sm-60 mtn-md-5">
                        {
                            posts.map(post => (
                                <div className="col-md-4">
                                    <div className="icon-box-item">
                                        <div className="icon-box__icon">
                                            <img src={getData(post._embedded, 'image')} alt={post.title} />
                                        </div>
                                        <div className="icon-box__info">
                                            <h5>{post.title.rendered}</h5>
                                            <p>{post.content.rendered}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;