import React from 'react';
import { getData } from '../utils';
import axios from 'axios';
import Config from "../config";

class Features extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(`${Config().apiUrl}/wp/v2/posts?_embed&categories=10`)
            .then(res => this.setState({
                posts: res.data
            }))
            .catch(err => console.log(err));
    };

    render() {
        const { posts } = this.state;

        return (
            <div className={`feature-area-wrapper sp-top`}>
                <div className="container">
                    <div className="row mtn-sm-60 mtn-md-5">
                        {
                            posts.map(post => (
                                <div key={post.slug} className="col-md-4">
                                    <div className="icon-box-item">
                                        <div className="icon-box__icon">
                                            <img src={getData(post._embedded, 'image')} alt={post.title} />
                                        </div>
                                        <div className="icon-box__info">
                                            <h5>{post.title.rendered}</h5>
                                            <div dangerouslySetInnerHTML={{
                                                __html: post.content.rendered
                                            }} />
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