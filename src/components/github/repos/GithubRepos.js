import React from "react";
class GithubRepos extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let {githubRepos}=this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <p className="lead">Your Repositories</p>
                    </div>
                    <div className="card-body">
                        <ul className='list-group'>
                            {
                                githubRepos.map(repo => {
                                    return (
                                        <React.Fragment >
                                            <li className="list-group-item">
                                                <span className="h5">
                                                    <a href={repo.html_url} target='_blank'>{repo.name}</a>
                                                </span>
                                                <span className='badge badge-danger mx-2'>{repo.stargazers_count}Stars</span>
                                                <span className='badge badge-success mx-2'>{repo.watchers_count}Watchers</span>
                                            </li>

                                        </React.Fragment>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default GithubRepos;