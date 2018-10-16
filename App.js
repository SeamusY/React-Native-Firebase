import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { connect, dispatch } from 'react-redux';
import { AddingToRedux, ReadFromFirebase } from './components/store/actions/action';


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
    this.props.GetFirebase();
    this.setState({
      FirstName:this.props.reducer.user.FirstName,
      LastName:this.props.reducer.user.LastName,
      CompanyName:this.props.reducer.user.CompanyName,
      Department:this.props.reducer.user.Department,
      Position:this.props.reducer.user.Position,
      Email:this.props.reducer.user.Email
    })
  }
  Save(){
    var information = {
        'FirstName': this.state.FirstName,
        'LastName': this.state.LastName,
        'CompanyName': this.state.CompanyName,
        'Department': this.state.Department,
        'Position': this.state.Position,
        'Email': this.state.Email
      }
    this.props.setuser(information);
  }
  render() {
    return (
      <View style={{flex: 1,flexDirection: 'column'}}>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
              <View style={styles.text}>
                <Text>First Name</Text>
              </View>
              <View style={{flex:0.5}}>
                <TextInput style={{textAlign:"right"}} onChangeText={(FirstName)=>this.setState({FirstName})} value={this.state.FirstName} defaultValue={this.props.reducer.user.FirstName}></TextInput>
              </View>
        </View>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
        <View style={styles.text}>
                <Text>Last Name</Text>
              </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(LastName)=>this.setState({LastName})} value={this.state.LastName}  defaultValue={this.props.reducer.user.LastName}></TextInput>
              </View>
        </View>
        <View style={styles.filler}/>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
        <View style={styles.text}>
              <Text>Company</Text>
              </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(CompanyName)=>this.setState({CompanyName})} value={this.state.CompanyName} defaultValue={this.props.reducer.user.CompanyName}></TextInput>
              </View>      
        </View>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
          <View style={styles.text}>
              <Text>Department</Text>
                </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(Department)=>this.setState({Department})} value={this.state.Department} defaultValue={this.props.reducer.user.Department}></TextInput>
              </View>
        </View>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
          <View style={styles.text}>
                <Text>Position</Text>
              </View>
              <View style={{flex:0.5}}>
              <TextInput style={{textAlign:"right"}} onChangeText={(Position)=>this.setState({Position})} value={this.state.Position} defaultValue={this.props.reducer.user.Position}></TextInput>
              </View>
        </View>
        <View style={{height: 10, flexDirection:"row", backgroundColor: 'lightgray'}}/>
        <View style={{height: 40, flexDirection:"row", borderBottomWidth:1, borderBottomColor:"gray"}}>
        <View style={styles.text}>
                <Text>Email</Text>
              </View>
              <View style={{flex:0.5}}>
                <TextInput style={{textAlign:"right"}} onChangeText={(Email) =>this.setState({Email})} value={this.state.Email} defaultValue={this.props.reducer.user.Email}/>
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
const mapDispatchToProps = dispatch =>({
  setuser: (data) => dispatch(AddingToRedux(data)),
  GetFirebase: () => dispatch(ReadFromFirebase())
})

const mapStateToProps = ({reducer})=>({
  reducer
})

export default connect(mapStateToProps,mapDispatchToProps)(App);