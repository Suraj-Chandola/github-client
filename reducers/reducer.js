import *  as actionType from '../constant'

const initialState={
	user:[],
	repo:{
  "id": 58881349,
  "name": "",
  "full_name": "",
  "owner": {
    "login": "",
    "id": 5843024,
    "avatar_url": "",
    "gravatar_id": "",
 
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
