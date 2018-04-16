import React, { Component } from 'react';
import NewsSelect from '../NewsSelect/NewsSelect';
import NewsItems from '../NewsItems/NewsItems';
import Fixtures from '../Fixtures/Fixtures';
import axios from 'axios';

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            query: this.props.query,
            page: this.props.page,
            pageSize: this.props.pageSize
        }
        this.updatePosts = this.updatePosts.bind(this);
        this.getNewsInfo = this.getNewsInfo.bind(this);
       /* this.state = {
            pageSize: 6,
            page: 1,
            q: '',
            posts: []
        }*/
    }

    componentDidMount() {
        this.getNewsInfo(this.state.query, this.state.pageSize, this.state.page);
    };

    getNewsInfo(query, pageSize, page){
        console.log('Getting news info...');
        let proxyurl = "https://cors-anywhere.herokuapp.com/";
        let url = 'https://newsapi.org/v2/everything?sources=bbc-sport,talksport&apiKey=' + process.env.REACT_APP_NEWS_API + '&q=' + query + '&pageSize=' + pageSize + '&page=' + page + '&sortBy=publishedAt';
        axios.get(proxyurl + url)
            .then(res => {
                for(let i = 0; i < res.data.articles.length; i++){
                    let article = res.data.articles[i]
                    article.index = res.data.articles.indexOf(article);
                }
                this.setState({posts: res.data.articles});
            })
            .catch((error) => console.log("Can’t access " + url + " response. Error:" + error));
    }

    updatePosts(query){
        this.getNewsInfo(query, this.state.pageSize, this.state.page);
    }

    render () {
        return (
            <section className="container">
                <div className="columns">
                    <div className="column is-7">
                        <NewsSelect query={'wsl'} callback={this.updatePosts} />
                        <NewsItems posts={this.state.posts} />
                    </div>
                    <div className="column is-5">
                        <Fixtures />
                    </div>
                </div>
            </section>
        )
    }
}

export default News;