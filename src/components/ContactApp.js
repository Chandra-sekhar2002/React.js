import React, {useState} from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
let ContactApp=(props)=>{
    let [selectedcontact,setselectedcontact]=useState(
        {}
    )
    let reciverContact=(contact)=>{
        setselectedcontact(contact)
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Contact App</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur autem distinctio dolor dolorem doloremque eaque eius est, fugit in laborum laudantium libero, minima mollitia, nesciunt quos tempore vero voluptate.</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-9">
                        <ContactList sendContact={reciverContact} />
                    </div>
                    <div className="col-md-3">
                        <ContactCard selectedcontact={selectedcontact}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContactApp;