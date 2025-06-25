import React from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedcontact:{},
        }

    }
    reciverContact = (contact) => {
        this.setState({selectedcontact: contact});
    }
    render() {
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
                            <ContactList sendContact={this.reciverContact} />
                        </div>
                        <div className="col-md-3">
                            <ContactCard selectedcontact={this.state.selectedcontact}/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default ContactApp;