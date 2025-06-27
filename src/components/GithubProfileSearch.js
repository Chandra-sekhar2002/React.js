import React from "react";
import Axios from "axios";
import {CLIENT_ID, CLIENT_SECRET} from "./credentials/GithubCredentials";
import GithubProfile from "./github/profile/GithubProfile";
import GithubRepos from "./github/repos/GithubRepos";
class GithubProfileSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUsername:"",
            githubProfile: {},
            githubRepos:[],
            errmsg:''
        }

    }
    submitSearchUser=(e)=>{
        e.preventDefault();
        this.searchProfile(this.state.githubUsername);
        this.searchRepos(this.state.githubUsername);

    }
    //SearchProfile
    searchProfile=(githubUsername) => {
        let dataURL=`https://api.github.com/users/${githubUsername}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        Axios.get(dataURL).then((response)=>{
            console.log(response.data);
            this.setState({
                ...this.state,
                githubProfile:response.data});
        }).catch((error)=>{
            this.setState({
                ...this.state,
                errmsg:error.message});
        })
    };
    //serchREPOS
    searchRepos=(githubUsername) => {
        let dataURL=`https://api.github.com/users/${githubUsername}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        Axios.get(dataURL).then((response)=>{
            this.setState({
                ...this.state,
                githubRepos:response.data});
        }).catch((error)=>{
            this.setState({
                ...this.state,
                errmsg:error.message});
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Github Profile Search</p>
                                </div>
                                <div className="card-body bg-light text-white">
                                    <form action="" className='form-inline' onSubmit={this.submitSearchUser}>
                                        <div className="form-group">
                                            <input
                                                value={this.state.githubUsername}
                                                onChange={(e) => this.setState({...this.state,githubUsername: e.target.value})}
                                                size='30' type="text" className='form-control' placeholder='Search for Github Profile' />
                                        </div>
                                        <div>
                                            <button  type="submit" value='serach' className="btn btn-secondary btn-sm">search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            {
                                Object.keys(this.state.githubProfile).length>0?
                                    <React.Fragment>
                                        <GithubProfile githubProfile={this.state.githubProfile}/>
                                    </React.Fragment>:null
                            }
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            {
                                this.state.githubRepos.length>0?
                                    <React.Fragment>
                                        <GithubRepos githubRepos={this.state.githubRepos}/>
                                    </React.Fragment>:null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default GithubProfileSearch;