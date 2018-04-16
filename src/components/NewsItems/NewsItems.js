import React, { Component } from 'react';
import axios from 'axios';

class NewsItems extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loading: true
        };
        this.getNewsInfo = this.getNewsInfo.bind(this);
    }

    componentDidMount() {
        //this.getNewsInfo();
    };

    getNewsInfo(pageSize = '6', page = '1', q = ''){
        let query = '&q='+q+'&pageSize='+pageSize+'&page='+page;
        let proxyurl = "https://cors-anywhere.herokuapp.com/";
        let url = 'https://newsapi.org/v2/everything?sources=bbc-sport,talksport&apiKey=' + process.env.REACT_APP_NEWS_API + query + '&sortBy=publishedAt';
        axios.get(proxyurl + url)
            .then(res => {
                for(let i = 0; i < res.data.articles.length; i++){
                    let article = res.data.articles[i]
                    article.index = res.data.articles.indexOf(article);
                }
                this.setState({posts: res.data.articles, loading: false});
            })
            .catch((error) => console.log("Can’t access " + url + " response. Error:" + error));
    }

    render () {
        const Loading = this.state.loading ? (
            <div className="loading">
                loading...
            </div>
        ) : '';

        const postItems = this.state.posts.map((post) =>
            <div className="column is-one-third" key={post.index}>
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
            </div>
        );
        return (
            <div className="columns is-multiline">
                {Loading}
                {postItems}
            </div>
        )
    }
}

export default NewsItems;