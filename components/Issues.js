import React, { Component} from 'react';

class Issues extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		console.log(this.props.issues[0].title);
		return (
			<div>
			   <h3>Issues</h3>
			    {this.props.issues.map((issue) => <p>{issue.title}</p>)}
			</div>
)
	}
}

export default Issues;