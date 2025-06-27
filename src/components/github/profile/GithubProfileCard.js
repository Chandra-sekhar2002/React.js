import React from "react";
class GithubProfileCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let {githubProfile}=this.props;
        return (
            <React.Fragment>
              <div className="card">
                  <img src={githubProfile.avatar_url} alt="" className="img-fluid"/>
                  <div className="card-body">
                      <p className="h3">{githubProfile.name}</p>
                      <small>{githubProfile.bio}</small>
                      <a href={githubProfile.html_url} target='_blank' className=' btn btn-success btn-sm'>Profile</a>
                  </div>
              </div>
            </React.Fragment>
        )
    }
}
export default GithubProfileCard;