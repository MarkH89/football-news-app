import React, { Component } from 'react';
import NewsItems from '../NewsItems/NewsItems';
import Fixtures from '../Fixtures/Fixtures';

class News extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <section className="container">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <NewsItems />
                        </div>
                        <div className="column is-one-third">
                             <Fixtures />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default News;