import React from 'react';
import './App.css'
import ContactApp from "./components/ContactApp";

let App = (props) => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm" >
                <div className="container">
                    <a className="navbar-brand" href="/">React hooks with component interaction</a>
                </div>
            </nav>
            <ContactApp/>


            <div style={{marginBottom:'200px'}}/>

        </React.Fragment>
    )
}
export default App;