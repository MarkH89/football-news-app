import React, { Component } from 'react';
import axios from 'axios';

class Fixtures extends Component {

    constructor(props){
        super(props);
        this.state = {
            fixtures: '',
        };
        this.getFixturesInfo = this.getFixturesInfo.bind(this);
    }

    componentDidMount() {
        this.getFixturesInfo();
    };

    getFixturesInfo(){
        // Origin URL to get round CORS
        const url = "http://allorigins.me/get?url=http://www.fawsl.com/matches.html";
        axios.get(url)
            .then(res => {
                // Response is a HTML dcument, so to read it, we need to attach it to an element
                let el = document.createElement('html');
                el.innerHTML = res.data.contents;
                // Query for the table and get the html
                let results = el.querySelector('table.table-fixtures-results').outerHTML;
 
                /* We need to divide to table into sections so we can create an array of objects.
                    Using the classes on the table, each 'section' starts with a date that has class thead-light and end with a 'blank-row'
                    By getting the index of these rows we can then slice the table up
                */
               /* let sIndexes = [];
                let eIndexes = [];
                Array.prototype.forEach.call(results, function(el, i){
                    // Slice start point
                    if(el.classList.contains('thead-light')){
                        sIndexes.push(i); 
                    }
                    // Slice end point
                    if(el.classList.contains('blank-row')){
                        eIndexes.push(i);
                    }
                });
                // Each start should have an end, if unequal, pop one
                // NOTE: COULD CAUSE AN ERROR HERE
                while(sIndexes.length != eIndexes.length){
                    if(sIndexes.length > eIndexes.length){
                        sIndexes.pop();
                    } else if (eIndexes.length > sIndexes.length){
                        eIndexes.pop();
                    }
                }

                // Convert NodeList to Array
                let resultsArray = Array.prototype.slice.call(results);
                let tableArray = [];

                // Create an array with the slices
                for(let i = 0; i < sIndexes.length; i++){
                    tableArray.push(resultsArray.slice(sIndexes[i], eIndexes[i]));
                }

                // Convert tableArray to useful objects

                let finalArray = {};

                // First index in each item is the date,
                // Second index
                //tableArray.forEach(function(item, i){
                  //  console.log(item[0].querySelector('tr'));
                    //console.log(item);
                //});
                console.log(tableArray[0]);
                console.log(tableArray[0][0].querySelectorAll('th')[0].innerHTML.trim());
                console.log(tableArray[0][1].querySelectorAll('th')[0].innerHTML.trim());*/

                this.setState({fixtures: results, loading: false});
            })
            .catch((error) => console.log("Can’t access " + url + " response. Error:" + error));
    }

    render () {
        return (
            <div className="columns is-multiline">
                <div className="fixtures-container" dangerouslySetInnerHTML={{__html: this.state.fixtures}} />
            </div>
        )
    }
}

export default Fixtures;