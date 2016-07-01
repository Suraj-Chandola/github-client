import React, { Component} from 'react';
import unique from 'lodash.uniq';

class Issues extends Component {
	constructor(props, context) {
		super(props, context);
		this.tags = unique(this.props.issues.reduce((acc, issue , i , arr) => {
				return acc.concat(issue.labels.map((label => label.name)));
		}, []));
		this.state= {
			issues: this.props.issues,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		if(e.target.value === 'none') {
			this.setState({
				issues: this.props.issues
			});
		}
		else {
			const newState = this.props.issues.filter((issue, i , arr) => {
					return issue.labels.map((label, i, arr) => {
						return label.name
					}).indexOf(e.target.value) !== -1;
			});
			this.setState({
				issues: newState
			});
		}
	}

	render() {
		const tags = this.tags.map((tag) => <option>{tag}</option>);
		const issues = this.state.issues.map((issue) => <p>{issue.title}</p>);


		return (<div>
		 { this.props.issues.length? <div>
			   <h3>Issues</h3>
				 <p>Filter</p>
					 <select defaultValue="none" onChange={this.handleChange}>
						 	<option value="none">None</option>
							{
									tags
							}
  				</select>
			    {issues}
			</div> : "No issues"}
		</div>
		);
	}
}

export default Issues;
