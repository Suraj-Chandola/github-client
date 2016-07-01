import *  as actionType from '../constant';


export function fetchUser(user) {
	return function(dispatch) {
		console.log(user);
		return fetch(`https://api.github.com/users/${user}/repos`).then(res => res.json()).then(data => dispatch(addUser(data)))
                 .catch(err => {console.log(err);dispatch(addError(err))});
	}
}

export const fetchRepo= (repo)=> {
	return dispatch => {
		console.log(repo);
    return fetch(`https://api.github.com/repos/`+repo)
      .then(response => response.json())
      .then(json => dispatch(addRepo(json))).catch(err => dispatch(addError(err)));
  }
}

export function addRepo(repo) {
  return {
    	type:actionType.ADD_REPO,
    repo
  }
}
export function addUser(user) {
  return {
    	type:actionType.ADD_USER,
    user
  }
}
export function changeSearchBy(searchBy) {
  return {
    	type:actionType.CHANGE_SEARCHBY,
    searchBy
  }
}

export function fetchIssues(fullname) {
  return function(dispatch){
  return fetch(`https://api.github.com/repos/${fullname}/issues`).then(res => res.json()).
     then(issues => dispatch(addIssues(fullname, issues))).catch(err => dispatch(addError(err)));
}
}

export function addIssues(fullname, issues) {
  return {
    type:actionType.ADD_ISSUES,
    fullname,
    issues
  }
}
export function resetState() {
  return {
    type:actionType.RESET_STATE,
  }
}

export function addError() {
  return {
    type:actionType.SHOW_ERROR,
  }
}
