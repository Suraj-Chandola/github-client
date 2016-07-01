import React,{Component} from 'react';
import { fetchIssues } from '../actions/action';
import RepoLink from './RepoLink';

class RepoByUsername extends Component{
	constructor(props, context) {
		super(props, context);
	}

	render() {
	var repos = this.props.user.map((repo) => <RepoLink repo={repo} dispatch={this.props.dispatch} />);
	   return <div>{this.props.user.length?<div> <img src={this.props.user[0].owner.avatar_url} width='40px' height='40px'/><h3>Repositories Name</h3>{repos}</div>: null}</div>;
	}
	}
export default RepoByUsername;
