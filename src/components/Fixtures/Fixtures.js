import React, { Component } from 'react';
import axios from 'axios';
import './Fixtures.css';

class Fixtures extends Component {

    constructor(props){
        super(props);
        this.state = {
            fixtures: '',
        };
        this.fixturesTable = React.createRef();
        this.getFixturesInfo = this.getFixturesInfo.bind(this);
    }

    componentDidMount() {
        this.getFixturesInfo();
    };

    componentDidUpdate() {
        console.log('Fixtures update..');
        let el = this.fixturesTable.current.querySelector('table');
        if(el){
            el.classList.add('table','is-narrow','is-hoverable');
        }
    }

    getFixturesInfo(){
        // Origin URL to get round CORS
        console.log('Getting fixtures..');
        const url = "http://allorigins.me/get?url=http://www.fawsl.com/matches.html";
        axios.get(url)
            .then(res => {
                console.log(res);
                // Response is a HTML dcument, so to read it, we need to attach it to an element
                let el = document.createElement('html');
                el.innerHTML = res.data.contents;
                // Query for the table and get the html
                let results = el.querySelector('table.table-fixtures-results').outerHTML;
                //console.log(results.querySelectorAll('tr'));
                this.setState({fixtures: results, loading: false});
            })
            .catch((error) => console.log("Can’t access " + url + " response. Error:" + error));
    }

    render () {
        return (
            <div className="columns is-multiline">
                <div className="fixtures-container" ref={this.fixturesTable} dangerouslySetInnerHTML={{__html: this.state.fixtures}} />
            </div>
        )
    }
}

export default Fixtures;