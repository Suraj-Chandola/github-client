import *  as actionType from '../constant'

const initialState={
	user:[],
	repo:{
  "id": 58881349,
  "name": "",
  "full_name": "mayankchd/intersectionObserverAPI",
  "owner": {
    "login": "mayankchd",
    "id": 5843024,
    "avatar_url": "",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mayankchd",
    "html_url": "https://github.com/mayankchd",
    "followers_url": "https://api.github.com/users/mayankchd/followers",
    "following_url": "https://api.github.com/users/mayankchd/following{/other_user}",
    "gists_url": "https://api.github.com/users/mayankchd/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mayankchd/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mayankchd/subscriptions",
    "organizations_url": "https://api.github.com/users/mayankchd/orgs",
    "repos_url": "https://api.github.com/users/mayankchd/repos",
    "events_url": "https://api.github.com/users/mayankchd/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mayankchd/received_events",
    "type": "User",
    "site_admin": false
  }
},
 searchBy:"",
 showError:false
};

export default function (state=initialState,action){
switch(action.type)
{
 case 'ADD_USER':
  return Object.assign({}, state, { user: action.user});
 case 'ADD_REPO':
 return Object.assign({},state,{repo: action.repo});
 case 'CHANGE_SEARCHBY':
  return Object.assign({},state,{searchBy: action.searchBy});
 case 'ADD_ISSUES' :
 let newUser = state.user.map(repo => {
  if(repo.full_name === action.fullname) {
    return Object.assign({}, repo, {issues: action.issues});
  }
  return repo;
 });
 return Object.assign({}, state, {
  user: newUser
 })
 case 'RESET_STATE':
 return Object.assign({},initialState);
 case 'SHOW_ERROR':
 return Object.assign({},initialState,{showError:true});
 default:
 return state;
}
return state;
}