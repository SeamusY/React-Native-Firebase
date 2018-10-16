const firebase = require('firebase');
import {dispatch} from 'react-redux';
const firebaseConfig = {
  databaseURL: "https://react-native-391b9.firebaseio.com/",
};

const data = firebase.initializeApp(firebaseConfig);

export const AddingToRedux =  (information) => {
  return (dispatch)=>{
    var ref = data.database().ref("Item1");
    ref.set(information).then(()=>{
        dispatch(SetUser(information))
        // dispatch({type:'setuser',user:{FirstName:'hi'}})
      })
  }

}
export const ReadFromFirebase = () => { 
  return (dispatch)=>{
    var ref = data.database().ref("Item1");
    ref.once("value").then((snapshot)=>{
      // dispatch({type:'setuser',user:{
      //   FirstName:'testing'
      // }});
      // return;
      var information = {
        FirstName: snapshot.child("FirstName").val(),
        LastName: snapshot.child("LastName").val(),
        CompanyName: snapshot.child("CompanyName").val(),
        Department: snapshot.child("Department").val(),
        Position: snapshot.child("Position").val(),
        Email: snapshot.child("Email").val()
      }
      dispatch(SetUser(information))
    })
  }
}

const SetUser = (user) => {
    return{
    type: 'setuser',
    user
    }
}