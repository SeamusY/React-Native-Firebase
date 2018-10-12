import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { connect, dispatch } from 'react-redux';
import { setUser } from './components/store/actions/user';
const firebase = require('firebase');

const firebaseConfig = {
  databaseURL: "https://react-native-391b9.firebaseio.com/",
};
const data = firebase.initializeApp(firebaseConfig);
class App extends Component {
  constructor(){
    super();
    this.state={
      FirstName:"",
      LastName:"",
      CompanyName:"",
      Department:"",
      Position:"",
      Email:""
    }
  }
  componentDidMount(){
    var ref = data.database().ref("Item1");
    ref.once("value").then((snapshot)=>{
      this.setState({
        FirstName: snapshot.child("FirstName").val(),
        LastName: snapshot.child("LastName").val(),
        CompanyName: snapshot.child("CompanyName").val(),
        Department: snapshot.child("Department").val(),
        Position: snapshot.child("Position").val(),
        Email: snapshot.child("Email").val()
    })
  })
 }
  Save(){
    var ref = data.database().ref("Item1");
    ref.set({
      'FirstName': this.state.FirstName,
      'LastName': this.state.LastName,
      'CompanyName': this.state.CompanyName,
      'Department': this.state.Department,
      'Position': this.state.Position,
      'Email': this.state.Email
      }).then(()=>{
        Alert.alert("Successfully Pushed");
      }).catch((err)=>Alert.alert(
        "Error happened " + err
      ));
  }
  render() {
    return (
      <View style={{flex: 1,flexDirection: 'column'}}>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
              <View style={styles.text}>
                <Text>First Name</Text>
              </View>
              <View style={{flex:0.5}}>
                <TextInput style={{textAlign:"right"}} onChangeText={(FirstName)=>this.setState({FirstName})} value={this.state.FirstName}></TextInput>
              </View>
        </View>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
        <View style={styles.text}>
                <Text>Last Name</Text>
              </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(LastName)=>this.setState({LastName})} value={this.state.LastName}></TextInput>
              </View>
        </View>
        <View style={styles.filler}/>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
        <View style={styles.text}>
              <Text>Company</Text>
              </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(CompanyName)=>this.setState({CompanyName})} value={this.state.CompanyName}></TextInput>
              </View>      
        </View>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
          <View style={styles.text}>
              <Text>Department</Text>
                </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(Department)=>this.setState({Department})} value={this.state.Department}></TextInput>
              </View>
        </View>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
          <View style={styles.text}>
                <Text>Position</Text>
              </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(Position)=>this.setState({Position})} value={this.state.Position}></TextInput>
              </View>
        </View>
        <View style={{height: 10, flexDirection:"row", backgroundColor: 'lightgray'}}/>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
        <View style={styles.text}>
                <Text>Email</Text>
              </View>
              <View style={{flex:0.5}}>
                <TextInput style={{textAlign:"right"}} onChangeText={(Email) =>this.setState({Email})} value={this.state.Email}/>
              </View>
        </View>
        <View style={styles.filler}/>
        <View style={{alignItems:"center", marginTop:25}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.Save.bind(this)}
            >
            <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  filler:{
    height: 10,
    flexDirection:"row",
    backgroundColor: 'lightgray'
  },
  text:{
    flex:0.5,
    fontWeight: 'bold',
    justifyContent: "space-around",
    padding:20
  },
  button:{
    backgroundColor:"blue",
    width:200,
    height:50,
    justifyContent:"center",
    borderRadius:5
  },
  buttonText:{
    color:"white",
    textAlign:"center",
    fontSize:20,
  }
});
function mapDispatchToProps(dispatch){
  return {setuser: dispatch}
}
export default connect(null,mapDispatchToProps(this.state))(App);