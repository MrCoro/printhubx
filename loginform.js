import React, { Component } from 'react';
import { StyleSheet, Modal, Alert} from 'react-native';
import { Container, Header, Text, Form, Item, Input, Label, Button, Left, Body, Right, Title, Card, View } from 'native-base';
import firebase from 'firebase';
import { Spinner } from './src/components/spinner';
// unused component    

export default class FloatingLabel extends Component {
    state={
      userEmail:'',
      userPassword:'',
      error: '',
      loading: false,
      modalVisible: false
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

  onButtonPress(){
    const { userEmail, userPassword } = this.state; 

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
      .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then(this.onLoginSuccess.bind(this)) 
              .catch(this.onLoginFailed.bind(this));
    });
  }

  onSignUpPress(){
    const { userEmail, userPassword } = this.state;
    this.setState({error: '', loading: true});
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then(this.onLoginSuccess.bind(this));
	
		this.setState({
			userEmail: '',
			userPassword: '',
			});
		}

  onLoginSuccess(){
      this.setState({
        userEmail: '',
        userPassword: '',
        loading: false,
        error: ''
      });
  }

  onLoginFailed(){
    this.setState({
      userEmail: '',
      userPassword: '',
      error: 'autentication error, something went wrong',
      loading: false
    });
  }
  
  renderButton(){
    if(this.state.loading){
      return <Spinner />;
    } 

    return(
      <View><Text>Test Printhub Beta v0.11</Text></View>
    );
  }


  render() {
    return (
        <Container>
        <Header style={styles.header}>
          <Left/>
          <Body>
            <Title>PrintHub</Title>
          </Body>
          <Right />
        </Header>
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input  value={this.state.userEmail} onChangeText={userEmail => this.setState({ userEmail: userEmail})}/>
              </Item>
              <Item floatingLabel last> 
                <Label>Password</Label>
                <Input  secureTextEntry={true} onChangeText={userPassword => this.setState({userPassword})}/>
              </Item>
            </Form>
              <Button style={{alignSelf: 'center', justifyContent: "center", backgroundColor: '#F4D03F', width : 150, margin: 25, alignContent: 'center', height: 20, flexDirection: 'row'}}
                onPress={() => {
                  this.onSignUpPress();
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{ fontWeight: 'bold', color: 'white'}}>Confirm</Text>
              </Button>
          </View>
        </Modal>
        
        <Card>            
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input  value={this.state.userEmail} onChangeText={userEmail => this.setState({ userEmail: userEmail})}/>
            </Item>
            <Item floatingLabel last> 
              <Label>Password</Label>
              <Input  secureTextEntry={true} onChangeText={userPassword => this.setState({userPassword})}/>
            </Item>
            <Item style={styles.buttons}>
            <Button transparent warning onPress={this.onButtonPress.bind(this)}><Text>SIGN IN</Text></Button>
            <Button transparent warning  onPress={() => {this.setModalVisible(true);}}><Text>DAFTAR</Text></Button>            
            </Item>
        </Form>
        </Card>
        {this.renderButton()}
        <Text style={styles.error}>{this.state.error}</Text>

      </Container>
    );
  }
}

//<img src="http/google.haha.jpg"/>


const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#F4D03F'
    
  }, buttons: {
    margin: 10,
    alignContent: 'center'
  }, error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  } 
});

//