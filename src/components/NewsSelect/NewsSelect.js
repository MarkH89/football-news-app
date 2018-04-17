import React, {Component} from 'react';

class NewsSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {query: this.props.query};
        this.updateNews = this.updateNews.bind(this);
    }

    updateNews(event) {
        this.setState({query: event.target.value});
        this.props.callback(encodeURI(event.target.value));
    }

    render () {
        return (
            <div className="column is-12">
                <form className="news-form  has-text-right">
                    <label className="label" htmlFor="query">Show latest for:</label>
                    <select value={this.state.query} onChange={this.updateNews} className="select" id="query" name="query">
                        <option value="">All News</option>
                        <option value="wsl">WSL</option>
                        <option value="FA Women's Cup">FA Women's Cup</option>
                        <option value="FIFA Women's World Cup">FIFA Women's World Cup</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default NewsSelect;