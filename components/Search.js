import React,{Component} from 'react';
import {fetchRepo,fetchUser,changeSearchBy,resetState} from '../actions/action';

class Search extends Component {

	constructor(props, context)
	{
       super(props,context);
	}
	handleClick(e){
     e.preventDefault();
     console.log("onclick");
     const repo = this.refs.name.value;
     const searchBy="byName";
     this.props.dispatch(resetState());
     this.props.dispatch(changeSearchBy(searchBy));
     this.props.dispatch(fetchUser(repo));
    
     
	}
	handleClickRepo(e){
     e.preventDefault();
     console.log("onclick");
     const repo = this.refs.name.value;
    const searchBy="byRepo";
    this.props.dispatch(resetState());
     this.props.dispatch(changeSearchBy(searchBy));
     this.props.dispatch(fetchRepo(repo));
     
	}

render(){
return(
	<div>
	 <input type="text" ref="name" placeholder="Search Repo"/>
	 <button  onClick={this.handleClick.bind(this)}>By username</button>
	 <button  onClick={this.handleClickRepo.bind(this) }>By FullName</button>
	</div>
	)
}
}
export default Search;