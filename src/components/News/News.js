import React, { Component } from 'react';

class News extends Component {
    render () {
        return (
            <div>
                <section className="container">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            Here be the main content
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