import React, { Component } from 'react';

class NewsItems extends Component {

    constructor(props){
        super(props);
        /*this.state = {
            posts: [],
            pageSize: 6,
            page: 1,
            q: '',
            loading: true
        };
        this.getNewsInfo = this.getNewsInfo.bind(this);
        this.updateNews = this.updateNews.bind(this);*/
    }

/*    componentDidMount() {
        this.getNewsInfo();
    };

    componentDidUpdate() {
        //this.getNewsInfo();
    }

    getNewsInfo(){
        let proxyurl = "https://cors-anywhere.herokuapp.com/";
        let url = 'https://newsapi.org/v2/everything?sources=bbc-sport,talksport&apiKey=' + process.env.REACT_APP_NEWS_API + '&q='+this.state.q+'&pageSize='+this.state.pageSize+'&page='+this.state.page + '&sortBy=publishedAt';
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

    updateNews(event){
        this.setState({q: event.target.value});
    }
*/
    render () {
        /*const Loading = this.state.loading ? (
            <div className="loading">
                loading...
            </div>
        ) : '';*/

        const postItems = this.props.posts.map((post) =>
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
                {postItems}
            </div>
        )
    }
}

export default NewsItems;