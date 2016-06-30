import React,{Component} from 'react';
import { fetchIssues } from '../actions/action';
import Issues from './Issues';

class RepoLink extends Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			showIssues: false
		}
	}
	handleClick(e){
		e.preventDefault();
		this.setState({
			showIssues: !this.state.showIssues
		})
		if(!this.props.repo.issues) {
		const full_name=this.props.repo.full_name;
        this.props.dispatch(fetchIssues(full_name));			
		}

	}
	render()
	{
		return(
			<div>
                  <a href="#" key={this.props.repo.id} onClick={this.handleClick.bind(this)}>{this.props.repo.name}</a>
                  {this.props.repo.issues && this.state.showIssues? <Issues issues={this.props.repo.issues}/> : null}
             </div>
              );
}
}

export default RepoLink; 