import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    /*createPosts = function(articles) {
        console.log(articles);
        let i;
        let posts = [];
        for(i = 0; i < articles.length; ++i){
            let article = articles[i];
            posts.push({
                article
            });
        }
        console.log(posts);
    }*/

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=' + process.env.REACT_APP_NEWS_API + '&q=wsl&pageSize=2&page=2&sortBy=publishedAt';
        axios.get(proxyurl + url)
            .then(res => {
                console.log(res.data.articles);
                this.setState({posts: res.data.articles});
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
    }

    render () {
        const postItems = this.state.posts.map((post) =>
            <div className="card">
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
        );
        return (
            <div>
                <section className="container">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            { postItems }
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