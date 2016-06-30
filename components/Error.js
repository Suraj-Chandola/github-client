import React,{Component} from 'react'

class Error extends Component{
	constructor(props, context) {
		super(props, context);
	}
	render(){
		return(
             <div>
             <p>Error While Fetching Data (Please Check you network connection or enter correct username,Repository Name)  </p>
             </div>
			)
	}
}
export default Error;