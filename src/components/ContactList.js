import React, {useEffect, useState} from "react";
import Axios from "axios";
let ContactList=(props)=>{
    let [state,setstate]=useState({
        contacts:[],
        errormessage:''
    });
    useEffect(()=>{
        let dataURL ='https://randomuser.me/api/?results=10'
        Axios.get(dataURL).then((res)=>{
            setstate({
                ...state,
                contacts:res.data.results
            })

        }).catch((err)=>{
            setstate({
                ...state,
                errormessage:err
            })

        })
    },[])
    let clickContact=(contact)=>{
        props.sendContact(contact)
    }
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
                                state.contacts.length > 0 ?
                                    <React.Fragment>
                                        {
                                            state.contacts.map((contact,idx) => {
                                                return (
                                                    <tr key={idx} onClick={()=>clickContact(contact)}>
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
export default ContactList;