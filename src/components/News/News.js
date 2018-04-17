import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';    
import NewsSelect from '../NewsSelect/NewsSelect';
import NewsItem from '../NewsItem/NewsItem';
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
    }

    componentDidMount() {
        this.getNewsInfo(this.state.query, this.state.pageSize, this.state.page);
    };

    getNewsInfo(query, pageSize, page){
        console.log('Getting news info...');
        let proxyurl = "https://cors-anywhere.herokuapp.com/";
        let url = 'https://newsapi.org/v2/everything?sources=bbc-sport,talksport&apiKey=' + process.env.REACT_APP_NEWS_API + '&q=' + query + '&pageSize=' + pageSize + '&page=' + page + '&sortBy=publishedAt';
        this.setState({posts: []});
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

        const postItems = this.state.posts.map((post) =>
                <NewsItem post={post} key={post.index}/>
        );

        return (
            <section className="container">
                <div className="columns">
                    <div className="column is-7">
                        <NewsSelect query={'wsl'} callback={this.updatePosts} />
                        <ReactCSSTransitionGroup
                            component="div"
                            className="columns is-mobile is-multiline"
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            {postItems}
                        </ReactCSSTransitionGroup>
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