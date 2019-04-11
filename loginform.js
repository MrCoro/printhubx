import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Form, Item, Input, Label, Button } from 'native-base';

export default class FloatingLabel extends Component {
  constructor(props){
    super(props)
    this.state={
      userEmail:'',
      userPassword:''
    }
  }

  // userRegister=()=>{
  //   const {userEmail} = this.state;
  //   const {userPassword} = this.state;
  // }
  
  render() {
    return (
        <Container>
        <Header style={styles.header}/>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input  onChangeText={userEmail => this.setState({userEmail})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input  onChangeText={userEmail => this.setState({userEmail})}/>
            </Item>
            <Item style={styles.buttons}>
            <Button transparent warning><Text>SIGN IN</Text></Button>
            <Button transparent warning><Text>DAFTAR</Text></Button>
            </Item>
        </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#F4D03F'
  }, buttons: {
    margin: 10,
    alignContent: 'center'
  }
  
});