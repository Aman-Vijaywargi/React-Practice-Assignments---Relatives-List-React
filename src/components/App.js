import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.relativeList = [
            { name: 'Kamal', relative: 'Uncle' },
            { name: 'Umesh', relative: 'Uncle' },
            { name: 'Arun', relative: 'Uncle' },
            { name: 'Ayush', country: 'Brother' },
            { name: 'Madhuri', country: 'Sister-in-law' },
        ]
    }
    render() {
        let relatives=this.relativeList;
        let index=-1;
        return(
            <div id="main">
               <ol key="relativeList">
                   {relatives.map(function(relative) {
                       index+=1;
                       <li key={`relativeListItem${index}`}>{relative.name}</li>
                   })}
               </ol>
            </div>
        )
    }
}


export default App;
