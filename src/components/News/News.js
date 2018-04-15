import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loading: true
        };
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=' + process.env.REACT_APP_NEWS_API + '&q=wsl&pageSize=2&page=2&sortBy=publishedAt';
        axios.get(proxyurl + url)
            .then(res => {
                for(let i = 0; i < res.data.articles.length; i++){
                    let article = res.data.articles[i]
                    article.index = res.data.articles.indexOf(article);
                }
                this.setState({posts: res.data.articles, loading: false});
                //this.setState({loading: false});
            })
            .catch((error) => console.log("Can’t access " + url + " response. Blocked by browser?:" + error));
    };

    
    render () {

        const Loading = this.state.loading ? (
            <div class="loading">
                loading...
            </div>
        ) : '';

        const postItems = this.state.posts.map((post) =>
            <div className="column is-half">
                <div className="card" key={post.index}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={`${post.urlToImage}`} alt={`${post.title}`} />
                        </figure>
                    </div>
                    <div className="card-header">
                        <h3 className="card-header-title">{post.title}</h3>
                    </div>
                    <div className="card-content">
                        <p>{post.source.name}</p>
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                <section className="container">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <div className="columns">
                            { Loading }
                            { postItems }
                            </div>
                        </div>
                        <div className="column is-one-third">
                             Here be a sidebar
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default News;