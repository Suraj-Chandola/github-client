import React,{Component} from 'react';

class RepoByFullName extends Component{
	constructor(props, context) {
		super(props, context);
	}
render(){
return (
	<div >
	  <img src={this.props.repo.owner.avatar_url}  height="200" width="200"/>
	  <h4>Repository Name-{this.props.repo.name}</h4>
	</div>
	);
	
}
}
export default RepoByFullName;