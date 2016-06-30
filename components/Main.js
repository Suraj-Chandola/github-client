import React,{Component} from 'react';
import RepoByFullName from './RepoByFullName';
import RepoByUsername from './RepoByUsername';
import Search from './Search';
import Error from './Error';

class Main extends Component{

	render(){
      	console.log(this.props);
		let result;
	  if(this.props.showError)
	  	   result=<Error/>;
      else 
      	if (this.props.searchBy === "byName") {
              result = <RepoByUsername  user={this.props.user} dispatch={this.props.dispatch} />;
            } 
            else {
     	        if((this.props.searchBy === "byRepo"))
                    result = <RepoByFullName  repo={this.props.repo} />;
      }
return(
	<div>
	<Search dispatch={this.props.dispatch} />
		{result}
	</div>
	)
}
}

export default Main;