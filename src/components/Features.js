import React from 'react';
import { getData } from '../utils';
import axios from 'axios';
import { LanguageConsumer } from './LanguageContext';

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  getData = () => {
    const { apiUrl } = this.props;

    axios.get(`${apiUrl}/wp/v2/categories?slug=features`)
      .then(res => {
        const categories = res.data;

        if (categories && categories.length > 0) {
          axios.get(`${apiUrl}/wp/v2/posts?_embed&categories=${categories[0].id}`)
            .then(res => this.setState({
              posts: res.data
            }))
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getData()
  };

  componentDidUpdate(prevProps) {
    if (this.props.apiUrl !== prevProps.apiUrl) {
      this.getData()
    }
  }

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

export default (props) => (
  <LanguageConsumer>
    {({ apiUrl }) => (<Features {...props} apiUrl={apiUrl} />)}
  </LanguageConsumer>);