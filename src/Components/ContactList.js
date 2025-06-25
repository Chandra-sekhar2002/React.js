import React from "react";
import Axios from "axios";
class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            errorMessage:''
        }
    }
    componentDidMount() {
        let dataURL ='https://randomuser.me/api/?results=10'
        Axios.get(dataURL).then((response) => {
            this.setState({
                ...this.state,
                contacts: response.data.results
            });
        }).catch((error) => {
            this.setState({
                ...this.state,
                errorMessage:error.message
            });
        })
    }
    clickContact=(contact)=>{
        this.props.sendContact(contact)
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped table-primary table-hover">
                                <thead className="thead-dark">
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phn No</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.contacts.length > 0 ?
                                        <React.Fragment>
                                            {
                                                this.state.contacts.map((contact,idx) => {
                                                    return (
                                                        <tr key={idx} onClick={this.clickContact.bind(this, contact)}>
                                                            <td>{idx+1}</td>
                                                            <td>{contact.name.title}.{contact.name.first} {contact.name.last}</td>
                                                            <td>{contact.email}</td>
                                                            <td>{contact.phone}</td>
                                                            <td>{contact.location.country}</td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </React.Fragment>:null
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactList;