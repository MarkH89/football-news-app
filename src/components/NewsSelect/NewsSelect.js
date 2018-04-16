import React, {Component} from 'react';

class NewsSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {query: this.props.query};
        this.updateNews = this.updateNews.bind(this);
    }

    updateNews(event) {
        this.setState({query: event.target.value});
        this.props.callback(event.target.value);
    }

    render () {
        return (
            <div className="column is-12">
                <form className="news-form">
                    <label className="label" htmlFor="query">Search for:</label>
                    <select value={this.state.query} onChange={this.updateNews} className="select" id="query" name="query">
                        <option value="">All</option>
                        <option value="wsl">WSL</option>
                        <option value="uefa">UEFA</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default NewsSelect;