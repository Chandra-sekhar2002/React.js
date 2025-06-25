import React from "react";
class ContactCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                {
                    Object.keys(this.props.selectedcontact).length > 0 ?
                        <React.Fragment>
                            <div className="card mt-3 sticky-top">
                                <div className="card-header bg-primary text-white">

                                </div>
                                <div className="card-body text-center">
                                    <img src={this.props.selectedcontact.picture.large} alt="" className='img-thumbnail rounded-circle w-70 contact-img p-1' />
                                    <ul className='list-group mt-3'>
                                        <li className='list-group-item list-group-item-primary'>
                                            NMAE:{this.props.selectedcontact.name.first} {this.props.selectedcontact.name.last}
                                        </li>
                                        <li className='list-group-item list-group-item-primary'>
                                            {this.props.selectedcontact.email}
                                        </li>
                                        <li className='list-group-item list-group-item-primary'>
                                            AGE:{this.props.selectedcontact.dob.age}
                                        </li>
                                        <li className='list-group-item list-group-item-primary'>
                                            STATE:{this.props.selectedcontact.location.state}
                                        </li>
                                        <li className='list-group-item list-group-item-primary'>
                                            COUNTRY:{this.props.selectedcontact.location.country}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>:null
                }
            </React.Fragment>
        )
    }
}
export default ContactCard;