import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loading: true
        };
        this.getNewsInfo = this.getNewsInfo.bind(this);
        this.getFixturesInfo = this.getFixturesInfo.bind(this);
    }

    componentDidMount() {
        //this.getNewsInfo();
        this.getFixturesInfo();
    };

    getNewsInfo(pageSize = '6', page = '1', q = ''){
        let query = '&q='+q+'&pageSize='+pageSize+'&page='+page;
        /*const*/let proxyurl = "https://cors-anywhere.herokuapp.com/";
        /*const*/let url = 'https://newsapi.org/v2/everything?sources=bbc-sport,talksport&apiKey=' + process.env.REACT_APP_NEWS_API + query + '&sortBy=publishedAt';
        axios.get(proxyurl + url)
            .then(res => {
                for(let i = 0; i < res.data.articles.length; i++){
                    let article = res.data.articles[i]
                    article.index = res.data.articles.indexOf(article);
                }
                console.log(res.data.articles);
                this.setState({posts: res.data.articles, loading: false});
                //this.setState({loading: false});
            })
            .catch((error) => console.log("Can’t access " + url + " response. Blocked by browser?:" + error));
    }

    getFixturesInfo(){
        const url = "http://allorigins.me/get?url=http://www.fawsl.com/matches.html";
        axios.get(url)
            .then(res => {
                let el = document.createElement('html');
                el.innerHTML = res.data.contents;
                console.log(el.querySelector('table.table-fixtures-results'));
            })
            .catch((error) => console.log("Can’t access " + url + " response. Blocked by browser?:" + error));
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
            <div>
                <section className="container">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <div className="columns is-multiline">
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